import React from 'react';
import { StaticRouter, Route } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import { HelmetProvider } from 'react-helmet-async';
import Login from 'routes/Login';
import dashiconsCSS from 'public/css/dashicons.min.css';

export default (req, res, next) => {
  const staticContext = {};
  const context = {};

  const app = (
    <HelmetProvider context={context}>
      <ApolloProvider client={res.locals.client}>
        <StaticRouter location={req.url} context={staticContext} basename="/login">
          <Route path="/:action?" component={Login} />
        </StaticRouter>
      </ApolloProvider>
    </HelmetProvider>
  );

  res.locals.staticContext = staticContext;
  res.locals.app = app;
  res.locals.helmetContext = context;
  res.locals.stylesheets = [dashiconsCSS];

  next();
};
