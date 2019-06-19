import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Login from './Login';
import About from './About';
import Home from './Home';
import Messages from './Messages';
import Signup from './Signup';

const link = {
  width: '100px',
  padding: '12 px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
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
      to="/messages"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Messages</NavLink>
    <NavLink
      to="/signup"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Signup</NavLink>
  </div>

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
//       <h1>About</h1>
//       <p>This is about stuff</p>
//     </div>
//   )
// };
//
// const Login = () => {
//   return (
//     <div>
//       <form onSubmit="">
//
//           <input type="text" placeholder="username" />
//           <input type="password" placeholder="password" />
//           <input type='submit' value='Login' />
//
//       </form>
//     </div>
//   )
// };

ReactDOM.render(
  //<Home />,
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/messages' component={Messages} />
      <Route exact path='/signup' component={Signup} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);
