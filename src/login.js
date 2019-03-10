import React from 'react'

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <input type="text" name="username" placeholer="Username"/>
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholer="Password"/>
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value="Login"/>
        </form>
      </div>
    );
  }
}
