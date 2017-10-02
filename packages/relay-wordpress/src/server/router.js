// @flow
import React from 'react';
import { renderToString } from 'react-dom/server';
import { extractCritical } from 'wp-styled-components/lib/server';
import { getFarceResult } from 'found/lib/server';
import { Resolver } from 'found-relay';
import { CookiesProvider } from 'react-cookie';
import { historyMiddlewares, render, routeConfig } from 'routes';
import createEnviroment from 'relay/environment';
import template from 'server/template';

import type { $Request, $Response } from 'express';

type RequestWithCookies = $Request & { universalCookies: Object };

type KYTAssets = {
  manifestJSBundle: string,
  mainJSBundle: string,
  vendorJSBundle: string,
};

export default ({ manifestJSBundle, mainJSBundle, vendorJSBundle }: KYTAssets) => async (
  req: RequestWithCookies,
  res: $Response
) => {
  try {
    const requestCache = {};
    const environment = createEnviroment('http://localhost:8080/graphql', requestCache);
    const resolver = new Resolver(environment);

    const { redirect, element } = await getFarceResult({
      url: req.url,
      historyMiddlewares,
      routeConfig,
      resolver,
      render,
    });

    if (redirect) {
      res.redirect(302, redirect.url);
      return;
    }

    const { html, css, ids } = extractCritical(
      renderToString(<CookiesProvider cookies={req.universalCookies}>{element}</CookiesProvider>)
    );

    res.status(200);
    res.send(
      template({
        root: html,
        data: requestCache,
        css,
        ids,
        manifestJSBundle,
        mainJSBundle,
        vendorJSBundle,
      })
    );
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    res.send(e.message);
  }
};
