import React from 'react';
import { renderToString } from 'react-dom/server';
import { extractCritical } from 'emotion-server';
import { StaticRouter } from 'react-router';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-fetch';
import template from 'server/template';
import App from 'components/App';

export default ({ manifestJSBundle, mainJSBundle, vendorJSBundle }) => async (req, res) => {
  const port = parseInt(KYT.SERVER_PORT, 10);
  const uri = `http://localhost:${port}/graphql`;
  const client = new ApolloClient({
    ssrMode: true,
    link: new HttpLink({ uri, fetch }),
    cache: new InMemoryCache(),
  });

  const context = {};

  const app = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  try {
    await getDataFromTree(app);
    const { ids, css, html } = extractCritical(renderToString(app));
    const initialState = client.cache.extract();

    res.status(200);
    res.send(
      template({
        root: html,
        ids,
        css,
        state: initialState,
        manifestJSBundle,
        mainJSBundle,
        vendorJSBundle,
      })
    );
  } catch (e) {
    console.log(e);
    res.send(e.message);
  }
};
