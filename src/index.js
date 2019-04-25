import React 		from 'react';
import ReactDOM from 'react-dom';

// Step 1 to set routes: Import BrowserRouter component as a Router and the Route component from the React Router library
import { BrowserRouter as Router, Route } from 'react-router-dom';

// In anticipation of a growing code base we will move the components created for rendering (Home, About, Login) to their own file in the src dir and we will make them a classic class React.Component

// START: RENDERING COMPONENTS LOCATED IN THE SAME FILE
	// const Home = () => {
	//   return (
	//     <div>
	//       <h1>Home!</h1>
	//     </div>
	//   );
	// };

	// const About = () => {
	// 	return (
	// 		<div>
	// 			<h1>This is my about component!</h1>
	// 		</div>
	// 	)
	// }

	// const Login = () => {
	// 	return (
	// 		<form>
	// 			<React.Fragment>
	// 				<label for="username">Username: </label>
	// 				<input type="text" id="username" />
	// 			</React.Fragment>
	// 			<React.Fragment>
	// 				<label for="password">Password: </label>
	// 				<input type="password" id="password" />
	// 			</React.Fragment>
	// 			<input type="submit" />
	// 		</form>
	// 	)
	// }

	// ReactDOM.render(
	// 	// <Home />,
	// 	// Step 2 to set routes: Have BrowserRouter (as Router) coordinate what is rendered in the DOM
	// 	// Step 3 to set routes: Give Route props for what path will be used and what component to render in that path
	// 	<Router>
	// 		<React.Fragment>
	// 			{/* all paths will start with '/' so the Home component is always rendered */}
	// 			<Route path="/" render={Home} />
	// 			{/* 'exact' will ensure that only with that exact path '/about' the About component is rendered  */}
	// 			<Route exact path="/about" render={About} />
	// 			<Route exact path="/login" render={Login} />
	// 		</React.Fragment>
	// 	</Router>,
	// 	document.getElementById('root')
	// );

// END: RENDERING COMPONENTS LOCATED IN THE SAME FILE



// START: RENDERING COMPONENTS LOCATED IN SEPARATE FILES IN THE SRC DIR
import Home 		from './Home/Home'
import About 		from './About/About'
import Login 		from './Login/Login'
import Navbar 	from './Navbar/Navbar'



ReactDOM.render(
	(<Router>
			<React.Fragment>
				<Navbar />
				<Route path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/login" component={Login} />
			</React.Fragment>
		</Router>),
	document.getElementById('root')

);
// END: RENDERING COMPONENTS LOCATED IN SEPARATE FILES IN THE SRC DIR

