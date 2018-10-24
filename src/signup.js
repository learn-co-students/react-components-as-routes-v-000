import React from 'react'

export default class Signup extends React.Component {

  render() {
    return(
      <div>
      <br />
        <form>
          <div>
            <input type="text" name="username" placeholer="Username"/>
            <label htmlFor="Username"> Username </label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="Password">Password</label>
            <br />
            <input type="submit" value="Sign Up"/>
          </div>
        </form>
      </div>
    )
  }
}
