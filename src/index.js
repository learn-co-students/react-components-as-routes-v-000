
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js'
import About from './About.js'
import Login from './Login.js'
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route } from 'react-router-dom';


// Step 2. Changed to have router coordinate what is displayed
ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
