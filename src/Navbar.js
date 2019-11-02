
import React from 'react'
import { NavLink } from 'react-router-dom';
/* Add basic styling for NavLink */
const link ={
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
}

//  NOte: acts as a superset of Link, adding 
// styling attributes to a rendered element when it matches the current URL.

class Navbar extends React.Component{
    render() {
        return (

       
<div>
  <NavLink
  to='/' /* set exact so it knows to only set activeStyle when route is deeply equal to link */
  exact
  /*add styling to NavLink */
  style={link}
  /* add prop for activeStyle */
  activeStyle={{
    background: 'darkblue'
  }}
  >Home</NavLink>

  <NavLink
  to="/about"
  exact
  style={link}
  activeStyle={{
    background: 'darkblue'
  }}
                    
  >About</NavLink>

  <NavLink
  to="/login"
  exact
  style={link}
  activeStyle={{
    background: 'darkblue'
  }}
  >Login</NavLink>
  </div>

  )
 }
}

export default Navbar;