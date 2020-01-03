import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page!</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About Page!</h1>
    </div>
  )
}

const Login = () => {
  return (
    <div>
      <form>
	<div>
	  <input type="text" name="username" placeholder="username" />
	  <label htmlFor="username">Username</label>
	</div>
	<div>
	  <input type="text" name="password" placeholder="password" />
	  <label htmlFor="password">Password</label>
	</div>
	<input type="submit" value="Login" />
      </form>
    </div>
  )
}


ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
