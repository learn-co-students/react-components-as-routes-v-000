import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import NavBar from './NavBar'


ReactDOM.render((
  <Router>
  	<React.Fragment>
  		<NavBar />
    	<Route exact path="/" component={Home} />
    	<Route exact path="/about" component={About} />
    	<Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
