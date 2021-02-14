import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <p></p>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Signup" />
      </form>
    </div>
  )
}

const Messages = () => <h1>This is my messages component!</h1>

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/messages" component={Messages} />
    </div>
  </Router>,
   document.getElementById('root')
);
