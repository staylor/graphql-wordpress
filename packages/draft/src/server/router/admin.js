import React from 'react';
import { StaticRouter } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import HelmetProvider from 'components/Helmet/Provider';
import Admin from 'routes/Admin';
import dashiconsCSS from 'public/css/dashicons.min.css';
import draftCSS from 'public/css/Draft.css';

export default (req, res, next) => {
  const staticContext = {};
  const helmet = {};

  const app = (
    <HelmetProvider context={helmet}>
      <ApolloProvider client={res.locals.client}>
        <StaticRouter location={req.url} context={staticContext} basename="/admin">
          <Admin />
        </StaticRouter>
      </ApolloProvider>
    </HelmetProvider>
  );

  res.locals.staticContext = staticContext;
  res.locals.app = app;
  res.locals.helmet = helmet;
  res.locals.stylesheets = [dashiconsCSS, draftCSS];

  next();
};
