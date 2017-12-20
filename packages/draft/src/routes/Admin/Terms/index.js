import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Add from './Add';
import Edit from './Edit';
import ListTable from './ListTable';

export default function TermRouter() {
  return (
    <Switch>
      <Route path="/terms/:taxonomyId/page/:page" component={ListTable} />
      <Route path="/terms/:taxonomyId/add" component={Add} />
      <Route path="/terms/:taxonomyId/:id" component={Edit} />
      <Route path="/terms/:taxonomyId" component={ListTable} />
    </Switch>
  );
}
