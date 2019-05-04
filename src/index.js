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

const NavBar = () => {
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
  </div>;
}
const Home = () => <h1>HOME!</h1>;

const About = () => <h1>ABOUT!</h1>

const Login = () =>
  <form>
    <h1>Login</h1>
    <div>
      <input type="text" name="username" placeholder="Username" />
      <label htmlFor="username">Username</label>
    </div>
    <div>
      <input type="password" name="password" placeholder="Password" />
      <label htmlFor="password">Password</label>
    </div>
    <input type="submit" value="Login" />
  </form>;

// Now, we can render the components we built above with react-router-dom, specified up top as 'Route': render={<<Component>>}, which we can further refactor using component per the <Route> API
// the 'exact path' is specified for what is displayed in the browser.
// Since <Router> may have only one child element, we use <React.fragment> ie <div> tag
ReactDOM.render((
  <Router>
    <React.fragment>
      <Route path='/' component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.fragment>    
  </Router>),
  document.getElementById('root')
);
