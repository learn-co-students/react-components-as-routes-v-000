import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home'
import About from './about'
import Login from './login'

// Step 1. Import react-router functions
// Add NavLink to importer
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// Add basic styling for NavLinks
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
}

// Add the navbar component
const Navbar = () => {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Home</NavLink>
      <NavLink
        to="/about"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >About</NavLink>
      <NavLink
        to="/login"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Login</NavLink>
    </div>
  )
}
// Refactored to class components

// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };
//
// const About = () => {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// };
//
// const Login = () => {
//   return (
//     <div>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="passowrd" name="password" placeholder="Password" />
//           <label htmlFor="password">Password</label>
//         </div>
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// };

// Step 2. Changed to have router coordinate what is displayed
// ReactDOM.render(
//   <Home />,
//   document.getElementById('root')
// );
ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
