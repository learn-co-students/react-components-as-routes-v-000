import React from 'react';
import ReactDOM from 'react-dom';
//Import react-router functions
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './about.js'
import Login from './login.js'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home!</h1>
      </div>
      )
    }
  }

//changed from `<Home />` to have router coordinate what's displayed
ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
