import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CityList from '../pages/CityList';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cityList" exact component={CityList} />
  </Switch>
);

export default Routes;
