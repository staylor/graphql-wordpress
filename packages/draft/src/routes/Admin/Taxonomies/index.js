import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Add from './Add';
import Edit from './Edit';
import ListTable from './ListTable';

export default function TaxonomyRouter() {
  return (
    <Switch>
      <Route path="/taxonomy/page/:page" component={ListTable} />
      <Route path="/taxonomy/add" component={Add} />
      <Route path="/taxonomy/:id" component={Edit} />
      <Route path="/taxonomy" component={ListTable} />
    </Switch>
  );
}
