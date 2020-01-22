import React from 'react';

class SignUp extends React.Component {
  render() {
    return(
      <div>
        <form>
          <h1>Sign Up</h1>
          <div>
            <input type="text" name="email" placeholder="Email Address"/>
            <label htmlFor="email">Email Address</label>
          </div>
          <div>
            <input type="text" name="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password"/>
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    )
  }

}

export default SignUp;
