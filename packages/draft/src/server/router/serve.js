import { renderToString } from 'react-dom/server';
import { extractCritical } from 'emotion-server';
import { getDataFromTree } from 'react-apollo';
import template from 'server/template';
import injectStyles from 'styles/inject';

export default async (req, res) => {
  try {
    injectStyles();

    await getDataFromTree(res.locals.app);

    const { ids, css, html } = extractCritical(renderToString(res.locals.app));
    const initialState = res.locals.client.cache.extract();

    res.status(200);
    res.send(
      template({
        root: html,
        ids,
        css,
        stylesheets: res.locals.stylesheets,
        state: initialState,
        ...res.locals.assets,
        user: res.locals.user,
      })
    );
  } catch (e) {
    console.log(e);
    res.send(e.message);
  }
};
