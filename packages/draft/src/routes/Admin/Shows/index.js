import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Add from './Add';
import Edit from './Edit';
import ListTable from './ListTable';

export default function ShowRouter() {
  return (
    <Switch>
      <Route path="/show/page/:page" component={ListTable} />
      <Route path="/show/add" component={Add} />
      <Route path="/show/:id" component={Edit} />
      <Route path="/show" component={ListTable} />
    </Switch>
  );
}
