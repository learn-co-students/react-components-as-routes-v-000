import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
//step 1: npm install react-router-dom;
//Step 1a: Import react-router functions
import { BrowserRouter as Router, Route } from 'react-router-dom';

// class style done in src/home.js
// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };

const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

// Step 2. Changed to have router coordinate what is displayed:
// most of the time you'll use component as prop.
// You should use only one of these props on a given Route
// component, render, children
// did both compo, and render here as pure exercise;
ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" render={About} />
      <Route exact path="/login" render={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
