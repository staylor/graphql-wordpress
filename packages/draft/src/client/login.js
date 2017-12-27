import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Login from 'routes/Login';
import client from './apolloClient';

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Route path="/login/:action?" component={Login} />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('main')
);
