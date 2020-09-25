import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import Messages from './Messages'
import Navbar from './Navbar'
// Step 1. Import react-router functions
/* Add NavLink to importer */
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Step 2. Changed to have router coordinate what is displayed
ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/messages" component={Messages} />
    </div>
  </Router>),
  document.getElementById('root')
);
