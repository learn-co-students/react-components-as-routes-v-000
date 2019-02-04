import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Signup from './Signup'
import Messages from './Messages'

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" render={Home} />
      <Route exact path="/about" render={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/messages" component={Messages}/>
    </React.Fragment>
  </Router>
  
  ,
  document.getElementById('root')
);

