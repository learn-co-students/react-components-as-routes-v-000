import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import Login from './Login'
import About from './About'


import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}


ReactDOM.render(
  <Router>
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
  </div>
  </Router>),

  document.getElementById('root')
);
