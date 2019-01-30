import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Login from '../Feature/Login';
import DashBoard from '../Feature/DashBoard';

export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/dash" component={DashBoard} />
    <Redirect to="/" />
  </Switch>
);
