import React from 'react';
import ReactDOM from 'react-dom';
import BrowserProtocol from 'farce/lib/BrowserProtocol';
import createInitialFarceRouter from 'found/lib/createInitialFarceRouter';
import { Resolver } from 'found-relay';
import { CookiesProvider } from 'react-cookie';
import { hydrate } from 'wp-styled-components';
import { historyMiddlewares, render, routeConfig } from 'routes';
import createEnviroment from 'relay/environment';

(async () => {
  // eslint-disable-next-line no-underscore-dangle
  hydrate(window.__emotion);

  const environment = createEnviroment('/graphql');
  const resolver = new Resolver(environment);

  try {
    const Router = await createInitialFarceRouter({
      historyProtocol: new BrowserProtocol(),
      historyMiddlewares,
      historyOptions: { useBeforeUnload: true },
      routeConfig,
      resolver,
      render,
    });
    ReactDOM.hydrate(
      <CookiesProvider>
        <Router resolver={resolver} />
      </CookiesProvider>,
      document.getElementById('main')
    );
  } catch (e) {
    throw e;
  }
})();
