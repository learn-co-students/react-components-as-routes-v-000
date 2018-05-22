import React, { Component } from 'react'

class Login extends Component {
  render(){
    return(
      <div style={{margin: '25px'}}>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username"/>
            <label htmlFor="username">Username</label>
          </div>
          <idv>
            <input type="password" name="password" placeholder="Password"/>
            <label htmlFor="password">Password</label>
          </idv>
          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}


export default Login
