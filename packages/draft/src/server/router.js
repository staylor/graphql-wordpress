import React from 'react';
import { renderToString } from 'react-dom/server';
import template from 'server/template';
import App from 'components/App';

export default ({ manifestJSBundle, mainJSBundle, vendorJSBundle }) => (req, res) => {
  const html = renderToString(<App />);

  res.status(200);
  res.send(
    template({
      root: html,
      manifestJSBundle,
      mainJSBundle,
      vendorJSBundle,
    })
  );
};
