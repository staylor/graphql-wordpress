import React from 'react';
import { StaticRouter } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import App from 'routes/App';

export default (req, res, next) => {
  const context = {};

  const app = (
    <ApolloProvider client={res.locals.client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  res.locals.app = app;

  next();
};
