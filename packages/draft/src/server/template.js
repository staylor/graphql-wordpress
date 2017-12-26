export default ({ helmet, stylesheets = [], state = {}, assets = {} }) => [
  `<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()}>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}
<link rel="stylesheet" href="https://use.typekit.net/tts4dcv.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
${stylesheets.map(sheet => `<link rel="stylesheet" href="${sheet}" />`).join('')}
</head>
<body ${helmet.bodyAttributes.toString()}>
  <main id="main">`,
  `</main>
  <script>window.__APOLLO_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')};</script>
${assets.manifestJSBundle ? `<script defer src="${assets.manifestJSBundle}"></script>` : ''}
${assets.vendorJSBundle ? `<script defer src="${assets.vendorJSBundle}"></script>` : ''}
${assets.mainJSBundle ? `<script defer src="${assets.mainJSBundle}"></script>` : ''}
</body>
</html>`,
];
