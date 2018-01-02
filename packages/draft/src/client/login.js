import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { HelmetProvider } from 'react-helmet-async';
import Login from 'routes/Login';
import client from './apolloClient';

ReactDOM.hydrate(
  <HelmetProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Route path="/login/:action?" component={Login} />
      </BrowserRouter>
    </ApolloProvider>
  </HelmetProvider>,
  document.getElementById('main')
);
