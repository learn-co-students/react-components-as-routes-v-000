import React from 'react';
import ReactDOM from 'react-dom';
// Step 1. Import react-router functions
//import the BrowserRouter component as a Router and the Route component
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import {About} from './components/about';
import {Home} from './components/home';
import {Login} from './components/login';
import {SignUp} from './components/signup';
import {Messages} from './components/messages';


/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}
 
/* add the navbar component */
const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
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
    >SignUp</NavLink>

    <NavLink
      to="/messages"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Messages</NavLink>
    
  </div>;
 
   
// Step 2. Changed to have router coordinate what is displayed
// inject Route  into our Home component
ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/messages" component={Messages} />
    </div>
  </Router>,
  document.getElementById('root')
);
