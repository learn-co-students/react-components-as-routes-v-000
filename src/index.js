import React from 'react'
import ReactDOM from 'react-dom'
// Import react-router functions
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Define routes

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  )
}

const About = () => {
	return (
		<div>
			<h1>This is my about component</h1>
		</div>
	)
}

const Login = () => {
	return (
		<div>
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

// Have router coordinate what is diaplayed
ReactDOM.render((
  // Return Router as the top level component in the React application
  <Router>
  	<React.Fragment>
  		// Define what urls to match on
		// Define what component should be rendered, should a match return true
		// Define an attribute of exact, which explicitly states which rendered component will be seen
	  	<Route exact path='/' render={Home} />
	  	<Route exact path='/about' render={About} />
	  	<Route exact path='/login' render={Login} />
	</React.Fragment>
  </Router>),
  document.getElementById('root')
)
