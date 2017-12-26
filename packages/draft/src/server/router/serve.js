import through from 'through';
import Helmet from 'react-helmet';
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

  const helmet = Helmet.renderStatic();
  const state = client.cache.extract();

  const [header, footer] = template({
    helmet,
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
