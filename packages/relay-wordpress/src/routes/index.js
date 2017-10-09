// @flow
import type { Props } from 'relay-wordpress';

import React from 'react';
import queryMiddleware from 'farce/lib/queryMiddleware';
import createRender from 'found/lib/createRender';
import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import { Loading } from '@wonderboymusic/graphql-wordpress-components';
import AppQuery from 'queries/App';
import HomeQuery from 'queries/Home';
import SingleQuery from 'queries/Single';
import ChartQuery from 'queries/Chart';
import DateQuery from 'queries/Date';
import PageQuery from 'queries/Page';
import SearchQuery from 'queries/Search';
import TermQuery from 'queries/Term';
import ErrorBoundary from 'components/ErrorBoundary';

const getComponent = loader => (location, cb) =>
  loader().then(module => module.default).catch(error => {
    // eslint-disable-next-line no-console
    console.error(error);
    cb(error, null);
  });

export const historyMiddlewares = [queryMiddleware];

const renderProp = ({ Component, props }: { Component: any, props: Props }) =>
  Component && props
    ? <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    : <Loading />;

/* eslint-disable global-require */

export const routeConfig = makeRouteConfig(
  <Route
    path="/"
    getComponent={getComponent(() => import(/* webpackChunkName: "app" */ '../containers/App'))}
    query={AppQuery}
    prepareVariables={params => ({
      ...params,
      menuID: 'TmF2TWVudToy',
      sidebarID: 'U2lkZWJhcjpzaWRlYmFyLTE=',
    })}
  >
    <Route
      path="music/:slug"
      getComponent={getComponent(() => import(/* webpackChunkName: "term" */ './Term'))}
      query={TermQuery}
      render={renderProp}
      prepareVariables={params => ({
        ...params,
        taxonomy: 'category',
      })}
    />
    <Route
      path="tag/:slug"
      getComponent={getComponent(() => import(/* webpackChunkName: "term" */ './Term'))}
      query={TermQuery}
      render={renderProp}
      prepareVariables={params => ({
        ...params,
        taxonomy: 'tag',
      })}
    />
    <Route
      path=":year(\d{4})/:month(\d{2})/:day(\d{2})/:id"
      getComponent={getComponent(() => import(/* webpackChunkName: "single" */ './Single'))}
      query={SingleQuery}
      render={renderProp}
    />
    <Route
      path=":year(\d{4})/:month(\d{2})?/:day(\d{2})?"
      getComponent={getComponent(() => import(/* webpackChunkName: "date" */ './Date'))}
      query={DateQuery}
      prepareVariables={params => {
        const vars = Object.assign({}, params);
        return ['year', 'month', 'day'].reduce((memo, value) => {
          if (vars[value]) {
            memo[value] = parseInt(vars[value], 10);
          }
          return memo;
        }, {});
      }}
    />
    <Route
      path="search"
      getComponent={getComponent(() => import(/* webpackChunkName: "search" */ './Search'))}
      query={SearchQuery}
      render={renderProp}
    />
    <Route
      path="charts"
      getComponent={getComponent(() => import(/* webpackChunkName: "chart" */ './Chart'))}
      query={ChartQuery}
      render={renderProp}
    />
    <Route
      path=":slug"
      getComponent={getComponent(() => import(/* webpackChunkName: "page" */ './Page'))}
      query={PageQuery}
      render={renderProp}
    />
    <Route
      getComponent={getComponent(() => import(/* webpackChunkName: "home" */ './Home'))}
      query={HomeQuery}
      render={renderProp}
    />
  </Route>
);

export const render = createRender({});
