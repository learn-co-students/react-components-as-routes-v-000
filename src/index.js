import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';

//import Home from './components/home';

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
    <NavLink to="/" exact style={link} activeStyle={{background:'darkblue'}}>
    Home</NavLink>
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
  </div>; /*end of Navbar*/

const Home = () =>
       <h1>Home!</h1>;
const About  = () =>{
  return(
    <div>
       <h1>This is my About Component!</h1>
    </div>
  )
}

const Login = () => {
  return(
    <div>
      <form>
        <input tupe="text" name="username" placeholder="Username"/>
        <label htmlFor="username">Username</label>
        <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
// wrap all routes in the router element in a div since a component must return one child/node-->

ReactDOM.render((
  <Router>
  <div>
     <Navbar />
     <Route path="/" component={Home} />
     <Route exact path="/about" component={About} />
     <Route exact path="/login" component={Login} />
  </div>
  </Router>),document.getElementById('root')
);
