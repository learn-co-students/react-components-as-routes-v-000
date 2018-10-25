import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home'
import About from './about'
import Login from './login'

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'black',
  textDecoration: 'none',
  color: 'white',
}

/* add the navbar component */
const Navbar = () =>
  <div>
    <NavLink
      to="/"
      style={link}
      activeStyle={{
        background: 'gray'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'gray'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'gray'
      }}
    >Login</NavLink>
  </div>;

ReactDOM.render((
  <Router>
    <React.Fragment>
    /* path="whatever" good for header components or anything we want to appear on every route*/
    <Navbar />
    <Route path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
