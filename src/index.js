import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
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
    <NavLink
      to="/signup"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Sign Up</NavLink>
    <NavLink
      to="/messages"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Messages</NavLink>
  </div>;

const Home = () => <h1>Home!</h1>;

const About = () => <h1>This is my about component!</h1>;

const Login = () =>
  <form>
    <h1>Login</h1>
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" placeholder="Username" />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="Password" />
    </div>
    <input type="submit" value="Login" />
  </form>;

const Signup = () =>
  <form>
    <h1>Sign Up</h1>
    <div>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" placeholder="Email" />
    </div>
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" placeholder="Username" />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="Password" />
    </div>
    <input type="submit" value="Sign Up" />
  </form>;

const Messages = () =>
  <div>
    <p>Not all messages are the same.</p>
    <p>What is expected when we call to see the messages?</p>
  </div>



ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/messages" component={Messages} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
