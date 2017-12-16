import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-fetch';
import Cookies from 'js-cookie';
import fragmentMatcher from 'tools/fragmentMatcher';
import { TOKEN_KEY } from 'utils/constants';

const headers = {};
const authToken = Cookies.get(TOKEN_KEY);
if (authToken) {
  headers.Authorization = `Bearer ${authToken}`;
}

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch, headers }),
  cache: new InMemoryCache({ fragmentMatcher }).restore(window.__APOLLO_STATE__),
});

export default client;
