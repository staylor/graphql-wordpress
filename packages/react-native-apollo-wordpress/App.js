import React from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloClient, ApolloProvider, createNetworkInterface, IntrospectionFragmentMatcher } from 'react-apollo';
import Wrapper from 'components/Wrapper';
import __schema from './tools/fragmentMatcher.json';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://graphql.highforthis.com/graphql'
  }),
  fragmentMatcher: new IntrospectionFragmentMatcher({
    introspectionQueryResultData: __schema,
  });,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NativeRouter>
        <Wrapper />
      </NativeRouter>
    </ApolloProvider>
  );
}
