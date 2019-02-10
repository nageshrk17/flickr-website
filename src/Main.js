
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import List from './Groups';
import GalleryList from './Groups/Gallery';



const Main = () => (
  <Switch>
    <Redirect exact from='/' to='/groups' />
    <Route exact path='/groups' render={() => <List /> } />
    <Route exact path='/gallery/:id' render={() => <GalleryList /> } />

  </Switch>
);

export default Main;
