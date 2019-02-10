
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import List from './Groups';


const Main = () => (
  <Switch>
    <Redirect exact from='/' to='/groups' />
    <Route exact path='/groups' render={() => <List /> } />
  </Switch>
);

export default Main;
