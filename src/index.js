import React from 'react';
import ReactDOM from 'react-dom';
import About from './About'
import Login from './Login'
import Home from './Home'
import NavLink from './NavLink'

// Step 1. Import react-router functions
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

// Step 2. Changed to have router coordinate what is displayed
ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
