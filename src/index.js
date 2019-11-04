import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home'
import About from './about'
import Login from './login'
import Navbar from './navbar'
// Step 1. Import react-router functions
/* Add NavLink to importer */
import { BrowserRouter as Router, Route} from 'react-router-dom';

// /* Add basic styling for NavLinks */
// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }

// /* add the navbar component */
// const Navbar = () =>
//   <div>
//     <NavLink
//       to="/"
//       /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//       exact
//       /* add styling to Navlink */
//       style={link}
//       /* add prop for activeStyle */
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Home</NavLink>
//     <NavLink
//       to="/about"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >About</NavLink>
//     <NavLink
//       to="/login"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Login</NavLink>
//   </div>;
 
// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };
// // Step 3. Add components for about and login
// const About = () => {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// };
 
// const Login = () => {
//   return (
//     <div>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//           <label htmlFor="password">Password</label>
//         </div>
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// };

// Step 2. Changed to have router coordinate what is displayed
ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      {/* Step 4. Add our /about and /login routes to our router */}
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);