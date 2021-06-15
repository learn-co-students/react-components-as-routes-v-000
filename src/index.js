import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Navbar';
import About from './About';
import Home from './Home';
import Login from './Login';

import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
