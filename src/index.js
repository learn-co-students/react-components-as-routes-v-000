import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/home';
import About from '../src/about';
import Login from '../src/login';
import NavBar from '../src/navbar';

ReactDOM.render(
  <Router>
    <div>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
    </div>
  </Router>,
  document.getElementById('root')
);
