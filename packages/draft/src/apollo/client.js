// @flow
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-fetch';
import fragmentMatcher from 'tools/fragmentMatcher';

/* eslint-disable no-console */

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

type ClientOps = {
  ssrMode?: boolean,
  cache?: any,
};

export default function apolloClient(uri: string, headers: {}, opts: ClientOps) {
  const params = Object.assign({}, opts);
  if (!params.cache) {
    params.cache = new InMemoryCache({ fragmentMatcher });
  }
  return new ApolloClient(
    Object.assign(
      {},
      {
        link: ApolloLink.from([
          errorLink,
          new HttpLink({
            uri,
            fetch,
            headers,
          }),
        ]),
      },
      params
    )
  );
}
