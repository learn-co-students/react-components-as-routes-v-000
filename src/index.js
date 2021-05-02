import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home'
import About from './about'
import Login from './login'
import Messages from './messages'
import Signup from './signup'
import Navbar from './navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render((
  <Router>
    <>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/messages" component={Messages} />
    </>
  </Router>),
  document.getElementById('root')
);
