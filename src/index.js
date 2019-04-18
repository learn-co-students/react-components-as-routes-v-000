import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login.js'
import About from './about.js'
import Home from './home.js'
import Navbar from './navbar.js'

ReactDOM.render(
  // <Home />
  <Router>
    <React.Fragment>
      <Navbar />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={signup} />
      <Route exact path="/messages" component={messages} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);
