import React from 'react';
import { StaticRouter, Route } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import Login from 'routes/Login';
import dashiconsCSS from 'public/css/dashicons.min.css';

export default (req, res, next) => {
  const staticContext = {};

  const app = (
    <ApolloProvider client={res.locals.client}>
      <StaticRouter location={req.url} context={staticContext}>
        <Route path="/login/:action?" component={Login} />
      </StaticRouter>
    </ApolloProvider>
  );

  res.locals.staticContext = staticContext;
  res.locals.app = app;
  res.locals.stylesheets = [dashiconsCSS];

  next();
};
