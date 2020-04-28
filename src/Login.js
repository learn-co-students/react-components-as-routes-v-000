import React from 'react';

const Login = () => {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="text" name="password" placeholder="Password" />
          </div>
          <button>Login</button>
        </form>
      </div>
    )
}

export default Login;