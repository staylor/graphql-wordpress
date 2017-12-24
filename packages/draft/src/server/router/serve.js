import through from 'through';
import Helmet from 'react-helmet';
import { renderToNodeStream } from 'react-dom/server';
import { renderStylesToNodeStream } from 'emotion-server';
import { getDataFromTree } from 'react-apollo';
// eslint-disable-next-line
import template from 'server/template';
import injectStyles from 'styles/inject';

export default async (req, res) => {
  try {
    injectStyles();

    const {
      app,
      client,
      user = null,
      staticContext = {},
      stylesheets = [],
      assets = {},
    } = res.locals;

    await getDataFromTree(app);
    const helmet = Helmet.renderStatic();
    const state = client.cache.extract();

    const settings = {};
    if (user) {
      settings.user = user;
    }
    if (staticContext.siteUrl) {
      settings.siteUrl = staticContext.siteUrl;
    }

    const [header, footer] = template({
      helmet,
      stylesheets,
      state,
      assets,
      settings,
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
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
    res.send(e.message);
  }
};
