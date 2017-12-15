import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fragmentMatcher from 'tools/fragmentMatcher';

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch }),
  cache: new InMemoryCache({ fragmentMatcher }).restore(window.__APOLLO_STATE__),
});

export default client;
