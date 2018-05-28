import React from 'react';

export default class Signup extends React.Component {
  
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
          <div>
            <input type="password" name="passwordconfirm" placeholder="Password Confirmation" />
            <label htmlFor="passwordconfirm">Password Confirmation</label>
          </div>
          <div>
            <input type="text" name="email" placeholder="email address" />
            <label htmlFor="email">Email Address</label>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}