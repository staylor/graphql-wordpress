import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';

export default ({
  root,
  data,
  ids,
  css,
  mainCSSBundle,
  manifestJSBundle,
  vendorJSBundle,
  mainJSBundle,
}) => {
  const helmet = Helmet.rewind();

  return `<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()}>
<head>
<meta charSet="utf-8" />
${helmet.title.toString()}
<script src="//use.typekit.net/tts4dcv.js"></script>
<script>try{Typekit.load();}catch(e){}</script>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<link rel="shortcut icon" href="/icons/favicon.ico" />
<link rel="apple-touch-icon" href="/icons/60x60.png" />
<link rel="apple-touch-icon" sizes="76x76" href="/icons/76x76.png" />
<link rel="apple-touch-icon" sizes="120x120" href="/icons/120x120.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/icons/152x152.png" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
<link rel="stylesheet" type="text/css" href="/css/gigpress.css" />
${mainCSSBundle ? `<link rel="stylesheet" type="text/css" href="${mainCSSBundle}" />` : ''}
${css && `<style>${css}</style>`}
${helmet.meta.toString()}${helmet.link.toString()}${helmet.script.toString()}
</head>
<body>
<script>window.__emotion = ${JSON.stringify(ids || [])}</script>
<script>window.__APOLLO_STATE__ = ${serialize(data, {
    isJSON: true,
  })};</script>
<main id="main">${root}</main>
${manifestJSBundle ? `<script defer src="${manifestJSBundle}"></script>` : ''}
${vendorJSBundle ? `<script defer src="${vendorJSBundle}"></script>` : ''}
${mainJSBundle ? `<script defer src="${mainJSBundle}"></script>` : ''}
${process.env.NODE_ENV === 'development' ? `<script src="/js/tota11y.min.js"></script>` : ''}
</body>
</html>`;
};
