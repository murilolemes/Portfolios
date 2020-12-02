import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Forgot from '../pages/Forgot';
import Dashboard from '../pages/Dashboard';
import ActiveClientList from '../pages/ActiveClientList';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/forgot" component={Forgot} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/activeClientList" component={ActiveClientList} />
  </Switch>
);

export default Routes;
