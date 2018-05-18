import React from 'react';

export class SignUp extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h1>Sign Up</h1>
          <div>
            <input type="text" name="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input type="password" name="confirmPassword" placeholder="Cornfirm Password" />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}