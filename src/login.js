import React from 'react';

export default class Login extends React.Component {
  render(){
    return (
      <div>
        <form>
          <div>
            <input type="text" name="username" placeholder="username" />
            <label htmlFor="username">Username</label>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    )
  }
}