import Helmet from 'react-helmet';

export default ({
  root = '',
  ids = [],
  css = '',
  stylesheets = [],
  state = {},
  user = null,
  manifestJSBundle,
  vendorJSBundle,
  mainJSBundle,
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
${user ? `<script>window.__USER__ = ${JSON.stringify(user)}</script>` : ''}
</head>
<body ${helmet.bodyAttributes.toString()}>
  <main id="main">${root}</main>
${manifestJSBundle ? `<script defer src="${manifestJSBundle}"></script>` : ''}
${vendorJSBundle ? `<script defer src="${vendorJSBundle}"></script>` : ''}
${mainJSBundle ? `<script defer src="${mainJSBundle}"></script>` : ''}
</body>
</html>`;
};
