import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Edit from './Edit';
import ListTable from './ListTable';
import Upload from './Upload';

export default function MediaRouter() {
  return (
    <Switch>
      <Route path="/media/page/:page" component={ListTable} />
      <Route path="/media/upload" component={Upload} />
      <Route path="/media/:id" component={Edit} />
      <Route path="/media" component={ListTable} />
    </Switch>
  );
}
