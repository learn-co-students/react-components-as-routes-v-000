import React from 'react';
import ReactDOM from 'react-dom';
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';



  import Home from './components/home';
	import About from './components/about';
	import Login from './components/login';
  import Navbar from './components/navbar'


// Step 2. Changed to have router coordinate what is displayed
ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route path="/components/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
