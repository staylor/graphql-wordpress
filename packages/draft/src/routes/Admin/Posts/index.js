import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Add from './Add';
import Edit from './Edit';
import ListTable from './ListTable';

export default function PostRouter() {
  return (
    <Switch>
      <Route path="/post/page/:page" component={ListTable} />
      <Route path="/post/add" component={Add} />
      <Route path="/post/:id" component={Edit} />
      <Route path="/post" component={ListTable} />
    </Switch>
  );
}
