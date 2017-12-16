import { renderToString } from 'react-dom/server';
import { extractCritical } from 'emotion-server';
import { getDataFromTree } from 'react-apollo';
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

    const { ids, css, html } = extractCritical(renderToString(app));
    const state = client.cache.extract();

    const settings = {};
    if (user) {
      settings.user = user;
    }
    if (staticContext.siteUrl) {
      settings.siteUrl = staticContext.siteUrl;
    }

    res.status(200);
    res.send(
      template({
        root: html,
        ids,
        css,
        stylesheets,
        state,
        assets,
        settings,
      })
    );
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
    res.send(e.message);
  }
};
