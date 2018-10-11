import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white'
}

const activeLink = {
    background: 'darkblue'
}

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/" exact style={link} activeStyle={activeLink}>Home</NavLink>
                <NavLink to="/about" exact style={link} activeStyle={activeLink}>About</NavLink>
                <NavLink to="/login" exact style={link} activeStyle={activeLink}>Login</NavLink>
                <NavLink to="/signup" exact style={link} activeStyle={activeLink}>Signup</NavLink>
                <NavLink to="/messages" exact style={link} activeStyle={activeLink}>Messages</NavLink>
            </div>
        )
    }   
}

export default Navbar