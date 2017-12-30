import React from 'react';
import { StaticRouter } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import HelmetProvider from 'components/Helmet/Provider';
import App from 'routes/App';

export default (req, res, next) => {
  const staticContext = {};
  const helmet = {};

  const app = (
    <HelmetProvider context={helmet}>
      <ApolloProvider client={res.locals.client}>
        <StaticRouter location={req.url} context={staticContext}>
          <App />
        </StaticRouter>
      </ApolloProvider>
    </HelmetProvider>
  );

  console.log(helmet);

  res.locals.staticContext = staticContext;
  res.locals.app = app;
  res.locals.helmet = helmet;

  next();
};
