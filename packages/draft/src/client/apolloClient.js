import { InMemoryCache } from 'apollo-cache-inmemory';
import Cookies from 'js-cookie';
import fragmentMatcher from 'tools/fragmentMatcher';
import { TOKEN_KEY } from 'utils/constants';
import apolloClient from 'apollo/client';

const headers = {};
const authToken = Cookies.get(TOKEN_KEY);
if (authToken) {
  headers.Authorization = `Bearer ${authToken}`;
}

export default apolloClient('/graphql', headers, {
  cache: new InMemoryCache({ fragmentMatcher }).restore(window.__APOLLO_STATE__),
});
