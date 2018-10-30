import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () => 
  <div>
    <NavLink
      to="/"
      exact 
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Home</NavLink>
      <NavLink 
        to="/login"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
        >Login</NavLink>
      <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >About</NavLink>
  </div>


ReactDOM.render(
  <Router>
    <React.Fragment>
      <Navbar />
      {/* <Route path="/" render={Home}/> */}
      {/* <Route exact path="/" render={Home}/> */}
      <Route exact path="/" component={Home} />
      {/* <Route path="/" render={() => <h1>Home!</h1>} /> */} 
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);
