import React from 'react';
import { StaticRouter } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import Admin from 'routes/Admin';
import dashiconsCSS from 'public/css/dashicons.min.css';
import draftCSS from 'public/css/Draft.css';

export default (req, res, next) => {
  const staticContext = {};

  const app = (
    <ApolloProvider client={res.locals.client}>
      <StaticRouter location={req.url} context={staticContext} basename="/admin">
        <Admin />
      </StaticRouter>
    </ApolloProvider>
  );

  res.locals.staticContext = staticContext;
  res.locals.user = req.user;
  res.locals.app = app;
  res.locals.stylesheets = [dashiconsCSS, draftCSS];

  next();
};