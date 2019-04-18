import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        const link = {
            width: '100px',
            padding: '12px',
            margin: '0 6px 6px',
            background: 'blue',
            textDecoration: 'none',
            color: 'white',
        }

        return(
            <div>
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
                <NavLink
                    to="/signup"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >Signup</NavLink>
                <NavLink
                    to="/messages"
                    exact
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >Messages</NavLink>
            </div>
        )
    }
}

export default Navbar