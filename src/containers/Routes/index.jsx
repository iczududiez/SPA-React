import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Login from '../Feature/_Login';
import Events from '../Feature/Events';
import ListTownHouse from '../Feature/ListTownHouse';

export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/events" component={Events} />
    <Route exact path="/l" component={ListTownHouse} />
    <Redirect to="/" />
  </Switch>
);
