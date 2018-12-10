import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Login from '../Feature/_Login';
import Events from '../Feature/Events';
import ListTownHouse from '../Feature/ListTownHouse';
import HealthFinancial from '../Feature/HealthFinancial';

export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/events" component={Events} />
    <Route exact path="/l" component={ListTownHouse} />
    <Route exact path="/h" component={HealthFinancial} />
    <Redirect to="/" />
  </Switch>
);
