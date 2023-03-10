import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import HomePage from './home/pages/HomePage';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

function App() {
  return <Router>
    <MainNavigation />
    <main>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
  </Router>;
}

export default App;
