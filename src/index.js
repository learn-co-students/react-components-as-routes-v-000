import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


 // can be replaced with ES6 -- <Route path='/' render={90 => <h1>HOME</h1>} />  for simple renders only 

//styling
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
    <NavLink to="/" exact style={link} 
    activeStyle={{background: 'darkblue'}} > Home </NavLink>
    <NavLink
    to="/about"
    exact
    style={link}
    activeStyle={{background: 'darkblue'}}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'}}
    >Login</NavLink>
    <NavLink
      to="/signup"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'}}
    >Signup</NavLink>
    <NavLink
      to="/messages"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'}}
    >Messages</NavLink>
  </div>;

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
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
const Signup = () => <h2>Sign up here</h2>;
const Messages = () => <h2>Messages here </h2>



ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/messages' component={Messages} />
    </React.Fragment>
  </Router>), 
  document.getElementById('root')
);





// ReactDOM.render((
//   <Router>
//     <React.Fragment>
//       <Route path='/' render={Home} />
//       <Route exact path='/about' render={About} />
//       <Route exact path='/login' render={Login} />
//     </React.Fragment>
//   </Router>), 
//   document.getElementById('root')
// );

// ReactDOM.render((
//   <Router>
//     <React.Fragment>
//       <Route path='/' render={() => <h1>Home</h1>} />
//       <Route exact path='/about' render={About} />
//       <Route exact path='/login' render={Login} />
//     </React.Fragment>
//   </Router>), 
//   document.getElementById('root')
// );

//was: 
// ReactDOM.render(
//   <Home />,
//   document.getElementById('root')
// );
