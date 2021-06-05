import React from 'react';
import ReactDOM from 'react-dom';
/* Add NavLink to importer */
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'


 
// const Home = () => <h1>Home!</h1>;
 
// const About = () => <h1>This is my about component!</h1>;
 
// const Login = () =>
//   <form>
//     <h1>Login</h1>
//     <div>
//       <input type="text" name="username" placeholder="Username" />
//       <label htmlFor="username">Username</label>
//     </div>
//     <div>
//       <input type="password" name="password" placeholder="Password" />
//       <label htmlFor="password">Password</label>
//     </div>
//     <input type="submit" value="Login" />
//   </form>;
 

 
ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);


