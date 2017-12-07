import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Add from './Add';
import Edit from './Edit';
import ListTable from './ListTable';

export default function TagRouter() {
  return (
    <Switch>
      <Route path="/tag/page/:page" component={ListTable} />
      <Route path="/tag/add" component={Add} />
      <Route path="/tag/:id" component={Edit} />
      <Route path="/tag" component={ListTable} />
    </Switch>
  );
}
