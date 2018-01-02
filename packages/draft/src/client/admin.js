import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { HelmetProvider } from 'react-helmet-async';
import Admin from 'routes/Admin';
import client from './apolloClient';

ReactDOM.hydrate(
  <HelmetProvider>
    <ApolloProvider client={client}>
      <BrowserRouter basename="/admin">
        <Admin />
      </BrowserRouter>
    </ApolloProvider>
  </HelmetProvider>,
  document.getElementById('main')
);
