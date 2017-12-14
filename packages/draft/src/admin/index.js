import React from 'react';
import ReactDOM from 'react-dom';
import { hydrate } from 'emotion';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-fetch';
import Admin from 'routes/Admin';
import fragmentMatcher from 'tools/fragmentMatcher';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch }),
  cache: new InMemoryCache({ fragmentMatcher }).restore(window.__APOLLO_STATE__),
});

if (window.__emotion) {
  hydrate(window.__emotion);
}

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter basename="/admin">
      <Admin />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('main')
);
