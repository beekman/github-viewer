import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './home/Home.js';
import UserDetailsPage from './details/UserDetails.js';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={UserDetailsPage} />
      </Switch>
    </Router>
  );
}
