import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';

const Routes = (props) => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;