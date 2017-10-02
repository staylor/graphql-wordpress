import React from 'react';
import ReactDOM from 'react-dom';
import { hydrate } from 'wp-styled-components';
import createInitialBrowserRouter from 'found/lib/createInitialBrowserRouter';
import { CookiesProvider } from 'react-cookie';
import { historyMiddlewares, render, routeConfig } from 'routes';
import { ApolloProvider, ApolloClient } from 'react-apollo';
import networkInterface from 'apollo/networkInterface';
import fragmentMatcher from 'apollo/fragmentMatcher';

(async () => {
  try {
    // eslint-disable-next-line no-underscore-dangle
    hydrate(window.__emotion);

    const client = new ApolloClient({
      // eslint-disable-next-line no-underscore-dangle
      initialState: window.__APOLLO_STATE__,
      networkInterface,
      fragmentMatcher,
    });

    const BrowserRouter = await createInitialBrowserRouter({
      historyMiddlewares,
      historyOptions: { useBeforeUnload: true },
      routeConfig,
      render,
    });

    ReactDOM.hydrate(
      <ApolloProvider client={client}>
        <CookiesProvider>
          <BrowserRouter />
        </CookiesProvider>
      </ApolloProvider>,
      document.getElementById('main')
    );
  } catch (e) {
    throw e;
  }
})();
