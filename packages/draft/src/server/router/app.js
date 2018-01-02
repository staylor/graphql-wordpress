import React from 'react';
import { StaticRouter } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import { HelmetProvider } from 'react-helmet-async';
import App from 'routes/App';

export default (req, res, next) => {
  const staticContext = {};
  const context = {};

  const app = (
    <HelmetProvider context={context}>
      <ApolloProvider client={res.locals.client}>
        <StaticRouter location={req.url} context={staticContext}>
          <App />
        </StaticRouter>
      </ApolloProvider>
    </HelmetProvider>
  );

  res.locals.staticContext = staticContext;
  res.locals.app = app;
  res.locals.helmetContext = context;

  next();
};
