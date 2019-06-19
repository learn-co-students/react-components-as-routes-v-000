import React from 'react';

class Signup extends React.Component {

  render() {
    return (
      <form>
        <input type='text' placeholder="username" />
        <input type='password' placeholder='password' />
        <input type='submit' value="signup" />
      </form>
    )
  }
};

export default Signup;
