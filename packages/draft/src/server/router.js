import React from 'react';
import { renderToString } from 'react-dom/server';
import { extractCritical } from 'emotion-server';
import template from 'server/template';
import App from 'components/App';

export default ({ manifestJSBundle, mainJSBundle, vendorJSBundle }) => (req, res) => {
  const { ids, css, html } = extractCritical(renderToString(<App />));

  res.status(200);
  res.send(
    template({
      root: html,
      ids,
      css,
      manifestJSBundle,
      mainJSBundle,
      vendorJSBundle,
    })
  );
};
