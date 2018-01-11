import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Explore from './components/explore/explore';
import Home from './components/home/home';
import Board from './components/board/board';

const Routes = (props) => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/explore' component={Explore} />
      <Route exact path='/:id/boards' component={Board} />
    </Switch>
  </BrowserRouter>
);

export default Routes;