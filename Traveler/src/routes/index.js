import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CityList from '../pages/CityList';
import City from '../pages/City';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/listaCidade" component={CityList} />
    <Route path="/cidade" component={City} />
  </Switch>
);

export default Routes;
