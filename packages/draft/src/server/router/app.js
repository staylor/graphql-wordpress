import React from 'react';
import { StaticRouter } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import App from 'routes/App';

export default (req, res, next) => {
  const staticContext = {};

  const app = (
    <ApolloProvider client={res.locals.client}>
      <StaticRouter location={req.url} context={staticContext}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  res.locals.staticContext = staticContext;
  res.locals.app = app;

  next();
};
