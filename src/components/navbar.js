import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    color: 'white',
    textDecoration: 'none'
}

const Navbar = () => {
    return (
        <div>
            <NavLink to='/' exact style={link} activeStyle={{ background: 'darkblue' }}>
                Home
            </NavLink>

            <NavLink to='/about' exact style={link} activeStyle={{ background: 'darkblue' }}>
                About
            </NavLink>

            <NavLink to='/login' exact style={link} activeStyle={{ background: 'darkblue' }}>
                Login
            </NavLink>        
        </div>
    )
}

export default Navbar