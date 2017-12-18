import fetch from 'node-fetch';
import appRouter from 'server/router/app';
import adminRouter from 'server/router/admin';
import loginRouter from 'server/router/login';
import apolloClient from 'server/router/apolloClient';
import serveResponse from 'server/router/serve';

const clientAssets = require(KYT.ASSETS_MANIFEST); // eslint-disable-line import/no-dynamic-require

const assetMiddleware = entry => (req, res, next) => {
  res.locals.assets = {
    manifestJSBundle: clientAssets['manifest.js'],
    mainJSBundle: clientAssets[`${entry}.js`],
    vendorJSBundle: clientAssets['vendor.js'],
  };
  next();
};

export default function router(app, passport) {
  app.use('/oembed', async (req, res) => {
    const response = await fetch(
      `${req.query.provider}?url=${encodeURIComponent(req.query.url)}`
    ).then(result => result.json());

    res.json(response);
  });

  app.use(
    '/admin',
    passport.authenticate('jwt', {
      session: false,
      failureRedirect: '/login/unauthorized',
    }),
    assetMiddleware('admin'),
    apolloClient,
    adminRouter,
    serveResponse
  );

  app.use('/login', assetMiddleware('login'), apolloClient, loginRouter, serveResponse);
  app.use(assetMiddleware('main'), apolloClient, appRouter, serveResponse);
}
