import React from 'react';

export default class Signup extends React.Component {
	render() {
		return (
			<div>
				<form>
					<div>
						<input type="text" name="username" />
						<label htmlFor="username">Username</label>
					</div>
					<div>
						<input type="password" name="password" value="password" />
						<label htmlFor="password">Password</label>
					</div>
					<input type="submit" value="Signup" />
				</form>
			</div>
		)
	}
}