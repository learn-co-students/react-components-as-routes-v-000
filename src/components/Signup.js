import React from 'react';

class Signup extends React.Component {
  render() {
    return (
      <div>
        <h3>Sign Up Form</h3>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
}

export default Signup;
