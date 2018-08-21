import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import Login from './Login';

// Step 1. Import react-router functions
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
  // Note : Without router
  // <Home />,
  
  // Note : With router
  ( // Step 2. Changed to have router coordinate what is displayed
  <Router>
  
    {/* NOTE : Need to use a fragment (<div> or <> or below) because Router requires only a *single* child/html node (as with all component returns) */}
    <React.Fragment>
      { /* NOTE : Using  "path" causes it to render regardless of the rest of the path (as long as THAT part exists) while using "exact path" causes those paths to render ONLY when the url exactly matches
      <Route path="/" render={Home} />
       */}
       
      <Route exact path="/" render={Home} />
      <Route exact path="/about" render={About} />
      <Route exact path="/login" render={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
