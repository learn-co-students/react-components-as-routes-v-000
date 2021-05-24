import React from 'react'
const Login = () =>
      <form>
        <input type="text" name="username" placeholder="Username"/>
        <label htmlFor="username">Username</label>
        <input type="password" name="password" placeholder="Password"/>
        <label htmlFor="password">Password</label>

        <button>Submit</button>
      </form>

export default Login
