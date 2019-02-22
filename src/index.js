import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Login from './Login'
import Home from './Home'
import About from './About'
import Signup from './Signup'
import Message from './Message'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () => {
  return (
    <div>
      <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
      <NavLink to="/about" exact style={link} activeStyle={{background: 'darkblue'}}>About</NavLink>
      <NavLink to="/login" exact style={link} activeStyle={{background: 'darkblue'}}>Login</NavLink>
      <NavLink to="/signup" exact style={link} activeStyle={{background: 'darkblue'}}>Signup</NavLink>
      <NavLink to="/message" exact style={link} activeStyle={{background: 'darkblue'}}>Message</NavLink>
    </div>
  )
}

ReactDOM.render((
  <Router>
    <React.Fragment>
    <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/message' component={Message} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
