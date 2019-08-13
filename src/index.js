import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import About from './about'
import Login from './login'
import link from './link'

const Navbar = () =>
  <div>
    <NavLink to="/"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'}}
    >Home</NavLink>

    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}>About</NavLink>

    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
  </div>


class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Home!</h1>
      </div>
    )
  }
}




ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />

    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
