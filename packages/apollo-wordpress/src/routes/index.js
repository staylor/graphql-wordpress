import React from 'react';
import queryMiddleware from 'farce/lib/queryMiddleware';
import createRender from 'found/lib/createRender';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import 'isomorphic-fetch';

const getComponent = loader => (location, cb) =>
  loader()
    .then(module => module.default)
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error);
      cb(error, null);
    });

export const historyMiddlewares = [queryMiddleware];

export const routeConfig = makeRouteConfig(
  <Route
    path="/"
    getComponent={getComponent(() => import(/* webpackChunkName: "app" */ '../containers/App'))}
  >
    <Route
      path=":category(music)/:slug"
      getComponent={getComponent(() => import(/* webpackChunkName: "term" */ './Term'))}
    />
    <Route
      path=":tag(tag)/:slug"
      getComponent={getComponent(() => import(/* webpackChunkName: "term" */ './Term'))}
    />
    <Route
      path=":year(\d{4})/:month(\d{2})/:day(\d{2})/:slug"
      getComponent={getComponent(() => import(/* webpackChunkName: "single" */ './Single'))}
    />
    <Route
      path=":year(\d{4})/:month(\d{2})?/:day(\d{2})?"
      getComponent={getComponent(() => import(/* webpackChunkName: "date" */ './Date'))}
    />
    <Route
      path="search"
      getComponent={getComponent(() => import(/* webpackChunkName: "search" */ './Search'))}
    />
    <Route
      path="charts"
      getComponent={getComponent(() => import(/* webpackChunkName: "chart" */ './Chart'))}
    />
    <Route
      path=":slug"
      getComponent={getComponent(() => import(/* webpackChunkName: "page" */ './Page'))}
    />
    <Route getComponent={getComponent(() => import(/* webpackChunkName: "home" */ './Home'))} />
  </Route>
);

export const render = createRender({});
