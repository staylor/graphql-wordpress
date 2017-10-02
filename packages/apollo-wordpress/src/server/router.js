import React from 'react';
import { renderToString } from 'react-dom/server';
import { getFarceResult } from 'found/lib/server';
import { CookiesProvider } from 'react-cookie';
import { extractCritical } from 'wp-styled-components/lib/server';
import { ApolloClient, ApolloProvider, getDataFromTree } from 'react-apollo';
import template from 'server/template';
import { historyMiddlewares, render, routeConfig } from 'routes';
import networkInterface from 'apollo/networkInterface';
import fragmentMatcher from 'apollo/fragmentMatcher';

export default ({ manifestJSBundle, mainJSBundle, vendorJSBundle, mainCSSBundle }) => async (
  req,
  res
) => {
  try {
    const { redirect, element } = await getFarceResult({
      url: req.url,
      historyMiddlewares,
      routeConfig,
      render,
    });

    if (redirect) {
      res.redirect(302, redirect.url);
      return;
    }

    const client = new ApolloClient({
      ssrMode: true,
      networkInterface,
      fragmentMatcher,
    });

    const app = (
      <ApolloProvider client={client}>
        <CookiesProvider cookies={req.universalCookies}>{element}</CookiesProvider>
      </ApolloProvider>
    );

    getDataFromTree(app).then(() => {
      const { html, ids, css } = extractCritical(renderToString(app));

      const initialState = {
        apollo: client.getInitialState(),
      };
      res.status(200);
      res.send(
        template({
          root: html,
          ids,
          css,
          data: initialState,
          manifestJSBundle,
          mainJSBundle,
          vendorJSBundle,
          mainCSSBundle,
        })
      );
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    res.send(e.message);
  }
};
