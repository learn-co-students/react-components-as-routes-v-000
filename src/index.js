import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/navbar';

import Home from './components/home';
import About from './components/about';
import Login from './components/login';

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar/>
      <Route exact path='/' component={ Home }/>
      <Route exact path='/about' component={ About }/>
      <Route exact path='/login' component={ Login }/>
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
