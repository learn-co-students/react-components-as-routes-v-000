import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import About from './About'
import Signup from './Signup'
import Messages from './Messages'



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
      to="/Home"
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
    >Signup</NavLink>
    <NavLink
      to="/Messages"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Messages</NavLink>
  </div>;

ReactDOM.render((
  <Router>
    <div>
    <Navbar />
      <Route path="/Home" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/Messages" component={Messages} />
    </div>
  </Router>),
  document.getElementById('root')
);
