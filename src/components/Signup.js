import React, { Component } from 'react';

export default class Signup extends Component {
    render () {
        return (
            <div>
              <h1>Signup</h1>
            <form>
              <div>
                <input type="text" name='username' placeholder="Username" />
                <label htmlFor='username'>Username</label>
              </div>
              <div>
                <input type='passwird' name="password" placeholder="Password" />
                <label htmlFor='password'>Password</label>
              </div>
                <input type='submit' value="Signup" />
            </form>
          </div>
        )
    }
}