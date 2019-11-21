import React, {Component} from 'react'

export default class LogIn extends Component{
  render(){
    return(
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <iput type="password" name="password" placeholder="Password" />

        </div>
        <input type="submit" value="LogIn" />
      </form>
    )
  }
}
