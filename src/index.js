import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Login from './Login';
import Message from './Message';
import Navbar from './Navbar';
import Signup from './Signup';




ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/message" component={Message} />
    </div>
  </Router>,
  document.getElementById('root')
);
