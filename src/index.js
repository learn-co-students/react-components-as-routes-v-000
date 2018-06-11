import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Messages from './components/Messages'



ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/messages" component={Messages} />
     </div> 
  </Router>
  ),
  document.getElementById('root')
);
