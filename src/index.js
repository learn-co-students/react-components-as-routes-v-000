import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import Messages from './Messages'
import SignUp from './Signup'

ReactDOM.render((
  <Router>
    <divt>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/messages" component={Messages} />
    </divt>
  </Router>),
  document.getElementById('root')
);
