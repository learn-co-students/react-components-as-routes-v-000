import React from 'react';
import ReactDOM from 'react-dom';
//import the BrowserRouter component as a Router and the Route component and inject it into our Home component.
//Add NavLink to style our page Navigation
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

/* add the navbar component */
const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
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

  const Home = () => <h1>Home!</h1>;

  const About = () => <h1>This is my about component!</h1>;

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

  ReactDOM.render((
    <Router>
    // Without the code on line 42 and 47 or 45 and 49's <div> tags we React won't work, you don't need both. React components MUST return only one child/html node
    //To remedy this problem we can place all of the Route components into a <div> tag or a fragment:
      <React.Fragment>
      //<div>
        <Navbar />
        //add our /about and /login routes to our router
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        //</div>
      </React.Fragment>
    </Router>),
    document.getElementById('root')
  );
