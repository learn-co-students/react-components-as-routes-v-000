import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);