import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import About from './About.js';
import Login from './Login.js';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color:'white'
}

const Navbar = () =>
  <div>
    <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>

    <NavLink to="/about" style={link} activeStyle={{background: 'darkblue'}}>About</NavLink>

    <NavLink to="/login" style={link} activeStyle={{background: 'darkblue'}}>Login</NavLink>
  </div>

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home!</h1>
      </div>
    );
  }
}


ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
