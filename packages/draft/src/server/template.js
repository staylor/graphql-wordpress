import Helmet from 'react-helmet';

export default ({
  root = '',
  ids = [],
  css = '',
  stylesheets = [],
  state = {},
  settings = {},
  assets = {},
}) => {
  const helmet = Helmet.renderStatic();

  return `<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()}>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}
<link rel="stylesheet" href="https://use.typekit.net/tts4dcv.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
${stylesheets.map(sheet => `<link rel="stylesheet" href="${sheet}" />`).join('')}
${css ? `<style>${css}</style>` : ''}
<script>window.__emotion = ${JSON.stringify(ids)};</script>
<script>window.__APOLLO_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')};</script>
${settings ? `<script>window.__APP_SETTINGS__ = ${JSON.stringify(settings)}</script>` : ''}
</head>
<body ${helmet.bodyAttributes.toString()}>
  <main id="main">${root}</main>
${assets.manifestJSBundle ? `<script defer src="${assets.manifestJSBundle}"></script>` : ''}
${assets.vendorJSBundle ? `<script defer src="${assets.vendorJSBundle}"></script>` : ''}
${assets.mainJSBundle ? `<script defer src="${assets.mainJSBundle}"></script>` : ''}
</body>
</html>`;
};
