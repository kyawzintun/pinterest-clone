import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Explore from './components/explore/explore';
import Home from './components/home/home';

const Routes = (props) => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/explore' component={Explore} />
    </Switch>
  </BrowserRouter>
);

export default Routes;