import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
}

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/" exact
          style={link}
          activeStyle={{ background: 'darkblue' }}
        >Home</NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{ background: 'darkblue'}}
        >About</NavLink>
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{ background: 'darkblue'}}
        >Login</NavLink>
      </div>
    )
  }
}

export default Navbar
