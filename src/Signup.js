import React, { Component } from 'react';

export default class Signup extends Component {
  render() {
    return (
      <form>
        <div>
          <input type="text" name="firstname" placeholder="First Name" />
          <label htmlFor="firstname">First Name</label>
        </div>
        <div>
          <input type="text" name="lastname" placeholder="last Name" />
          <label htmlFor="lastname">last Name</label>
        </div>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
}
