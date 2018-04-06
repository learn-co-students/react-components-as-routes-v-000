import React from 'react';
import ReactDOM from 'react-dom';
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Login from './Login'

// Step 2. Changed to have router coordinate what is displayed
ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" render={About} />
      <Route exact path="/login" render={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
