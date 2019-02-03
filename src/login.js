import React from 'react'

class Login extends React.Component {
  render() {
    return(
      <div>
        <h1>Log In!</h1>
        <form>
          <div>
            <input type="text" id="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
          </div>
          <div>
              <input type="password" id="password" placeholder="Password" />
              <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value="Log In" />
        </form>
      </div>
    )
  }
}

export default Login
