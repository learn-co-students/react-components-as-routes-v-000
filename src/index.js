import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './home'
import About from './about'
import Login from './login'
import Messages from './messages'
import Signup from './signup'

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
      to="/messages"
      exact
      style={link}
      activeStyle={{ background: 'pink' }}
      >Messages</NavLink>
    <NavLink
      to="/signup"
      exact
      style={link}
      activeStyle={{ background: 'pink' }}
      >Signup</NavLink>
  </div>;

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/signup" component={Signup} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
