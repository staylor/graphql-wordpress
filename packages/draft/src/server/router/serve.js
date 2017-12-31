import through from 'through';
import { renderToNodeStream } from 'react-dom/server';
import { renderStylesToNodeStream } from 'emotion-server';
import { getDataFromTree } from 'react-apollo';
// eslint-disable-next-line
import template from 'server/template';
import injectStyles from 'styles/inject';

export default async (req, res) => {
  const { app, client, stylesheets = [], assets = {} } = res.locals;

  try {
    injectStyles();

    await getDataFromTree(app);
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
  }

  const state = client.cache.extract();

  const [header, footer] = template({
    helmet: res.locals.helmetContext.helmet,
    stylesheets,
    state,
    assets,
  });

  res.status(200);
  res.write(header);
  renderToNodeStream(app)
    .pipe(renderStylesToNodeStream())
    .pipe(
      through(
        function write(data) {
          this.queue(data);
        },
        function end() {
          this.queue(footer);
          this.queue(null);
        }
      )
    )
    .pipe(res);
};
