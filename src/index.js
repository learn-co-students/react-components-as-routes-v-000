import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'

  ReactDOM.render((
    <Router>
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
      </React.Fragment>
    </Router>),
    document.getElementById('root')
  );
