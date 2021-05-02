import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Navbar from './Navbar';

// Step 1. Import react-router functions
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

ReactDOM.render((
  <Router>
    <div>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    </div>
  </Router>),

  document.getElementById('root')
);
