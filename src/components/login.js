import React, { Components } from 'react'

export default class Login extends Component {
  return (
    <div>
      <form>
        <div>
          <input type='text' name='username' />
          <label htmlFor='username'>Username</label>
        </div>
        <div>
          <input type='password' name='password' placeholder='password' />
          <label htmlFor='password'>Password</label>
        </div>
        <input type='submit' value = 'login' />
      </form>
    </div>
  )
}
