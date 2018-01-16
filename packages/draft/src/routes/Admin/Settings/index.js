import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Site from './Site';
import Social from './Social';
import Media from './Media';
import Dashboard from './Dashboard';

export default function SettingsRouter() {
  return (
    <Switch>
      <Route path="/settings/dashboard" component={Dashboard} />
      <Route path="/settings/media" component={Media} />
      <Route path="/settings/site" component={Site} />
      <Route path="/settings/social" component={Social} />
      <Route path="/settings" component={Site} />
    </Switch>
  );
}
