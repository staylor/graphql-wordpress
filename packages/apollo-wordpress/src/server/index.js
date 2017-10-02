import 'dotenv/config';
import express from 'express';
import proxy from 'http-proxy-middleware';
import cookiesMiddleware from 'universal-cookie-express';
import morgan from 'morgan';
import compression from 'compression';
import path from 'path';
import router from 'server/router';

process.env.TZ = 'America/New_York';

const clientAssets = require(KYT.ASSETS_MANIFEST); // eslint-disable-line import/no-dynamic-require
const app = express();

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(compression());

// Standard Apache combined log output.
// https://github.com/expressjs/morgan#combined
app.use(morgan('combined'));

// Setup the public directory so that we can server static assets.
app.use(express.static(path.join(process.cwd(), KYT.PUBLIC_DIR)));

app.use(cookiesMiddleware());

// use a local GQL server by default
const gqlHost = process.env.GQL_HOST || 'http://localhost:8080';

const gqlPath = process.env.GQL_PATH || '/graphql';

// proxy to the graphql server
app.use(
  gqlPath,
  proxy({
    target: gqlHost,
    changeOrigin: true,
  })
);

app.use(
  router({
    manifestJSBundle: clientAssets['manifest.js'],
    mainJSBundle: clientAssets['main.js'],
    vendorJSBundle: clientAssets['vendor.js'],
    mainCSSBundle: clientAssets['main.css'],
  })
);

app.listen(parseInt(KYT.SERVER_PORT, 10));

process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error);
});
