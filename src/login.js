import React from 'react';

class Login extends React.Component {
  state = {  }
  render() {
    return (
      <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username"/>
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password"/>
          <label htmlFor="password">Password</label>
        </div>
        <input rype="submit" value="Login"/>
      </form>
    </div>
  );
    
  }
}

export default Login;