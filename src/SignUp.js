import React from 'react';

const SignUp = () => {
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" placeholder="Username"/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="text" name="password" placeholder="Password"/>
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    )
  }

  export default SignUp;