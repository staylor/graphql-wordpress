import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Admin from 'routes/Admin';
import client from './apolloClient';

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter basename="/admin">
      <Admin />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('main')
);
