import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Add from './Add';
import Edit from './Edit';
import ListTable from './ListTable';

export default function UserRouter() {
  return (
    <Switch>
      <Route path="/user/page/:page" component={ListTable} />
      <Route path="/user/add" component={Add} />
      <Route path="/user/:id" component={Edit} />
      <Route path="/user" component={ListTable} />
    </Switch>
  );
}
