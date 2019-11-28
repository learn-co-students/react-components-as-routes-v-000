import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js';
import Login from './Login.js';
import About from './About.js';
import Navbar from './Navbar.js';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route path ="/" component={Home} />
      <Route exact path="/about" component={About}/>
      <Route exact path="/login" component={Login}/>
    </div>
  </Router>),
  document.getElementById('root')
);
