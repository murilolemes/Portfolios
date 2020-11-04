import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../page/Home';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);

export default Routes;
