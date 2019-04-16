import React from 'react';
import ReactDOM from 'react-dom';
// step 1. Import react-router functions
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';

// Add basic styling for NavLinks
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
};

// add the navbar component
const Navbar = () => (
  <div>
    <NavLink
      to="/"
      // set exaact so it know to only set activeStyle when route is deeply equal to link */
      exact
      // add styling to Navlink
      style={link}
      // add prop for activeStyle
      activeStyle={{
        background: 'darkblue'
      }}
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >
      About
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >
      Login
    </NavLink>
  </div>
);

// step 2. Changed to have router coordinate what is displayed
ReactDOM.render(
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);
