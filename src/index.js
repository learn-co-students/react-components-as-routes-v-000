import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </div>
  </Router>),
  document.getElementById('root')
);
