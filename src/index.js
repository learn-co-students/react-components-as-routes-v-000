import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import SignUp from './SignUp';
import Login from './Login';

ReactDOM.render(
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </div>
  </Router>,
  document.getElementById('root')
);
