import React from 'react';
import ReactDOM from 'react-dom';

// Step 1. Import react-router functions
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
/* There are two components that we are importing from
React Router; Router and Route. We use them in turn. */

import Home from './home'
import About from './about'
import Login from './login'
import Signup from './signup'
import Messages from './messages'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Login</NavLink>
      <NavLink
        to="/signup"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
        >Sign Up</NavLink>
        <NavLink
          to="/messages"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
          >Messages</NavLink>
  </div>

// Step 2. Changed to have router regulate what is displayed
ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/messages" component={Messages} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
/* The Router is our alias for BrowserRouter, and it is
the base for our application's routing. It is where we
declare how React Router will be used. */

/* Nested inside the Router component we use the Route
component. The Route component has two props in this
example: path and render. The Route component is in
charge of saying "when the url matches this specified
path, render this specified component." */
