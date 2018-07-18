import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import About from './about.js'
import Login from './login.js'
import Navbar from './navlink.js'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home!</h1>
      </div>
    )
  }
}

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
