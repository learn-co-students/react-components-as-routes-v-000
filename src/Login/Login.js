import React, { Component } from 'react'

class Login extends Component {
	render() {
		return (
			<form>
				<React.Fragment>
					<label for="username">Username: </label>
					<input type="text" id="username" />
				</React.Fragment>
				<React.Fragment>
					<label for="password">Password: </label>
					<input type="password" id="password" />
				</React.Fragment>
				<input type="submit" />
			</form>
		)
	}
}

export default Login;