import React from 'react';
import ReactDOM from 'react-dom';
import About from './About'
import Home from './Home'
import Login from './Login'
import Navbar from './NavLink'

import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);