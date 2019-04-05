import React from 'react'

class Login extends React.Component {
	render() {
		return (
			<div>
				<br /><br /> 
				<form>
					<div>
						<input type='text' name='username' placeholder='Username' />
						<label htmlFor='username'> Username</label>
					</div>
					<br />
					<div>
						<input type='text' name='password' placeholder='Password' />
						<label htmlFor='password'> Password</label>
					</div>
					<br />
					<input type='submit' value='Login' />
				</form>	
			</div>
		)
	}
}

export default Login
