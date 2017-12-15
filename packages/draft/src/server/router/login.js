import React from 'react';
import { StaticRouter } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import Login from 'routes/Login';
import dashiconsCSS from 'public/css/dashicons.min.css';

export default (req, res, next) => {
  const context = {};

  const app = (
    <ApolloProvider client={res.locals.client}>
      <StaticRouter location={req.url} context={context}>
        <Login />
      </StaticRouter>
    </ApolloProvider>
  );

  res.locals.app = app;
  res.locals.stylesheets = [dashiconsCSS];

  next();
};
