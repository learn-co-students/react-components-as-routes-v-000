import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home'
import About from './about'
import Login from './login'
import Navbar from './navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
