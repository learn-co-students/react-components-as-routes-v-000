import React from 'react'

class Login extends React.Component {
  render () {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
