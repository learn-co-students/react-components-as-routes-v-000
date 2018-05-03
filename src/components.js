import React from 'react';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home!</h1>
      </div>
    )
  }
}

export class About extends React.Component {
  render() {
    return (
      <div>
        <h1>This is my about component!</h1>
      </div>
    );
  };
}
 
export class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  };
}
