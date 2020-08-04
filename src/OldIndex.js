import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
};

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
    >Signup</NavLink>
    <NavLink
      to="/messages"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Messages</NavLink>
  </div>;

// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };
const Home = () => <h1>Home!</h1>;

// const About = () => {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   )
// }
const About = () => <h1>This is my about component!</h1>;

// const Login = () => {
//   return (
//     <div>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//           <label htmlFor="password">Password</label>
//         </div>
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   )
// }
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

const Signup = () =>
  <form>
    <h1>Signup</h1>
    <div>
      <input type="email" name="email" placeholder="Email" />
      <label htmlFor="email">Email</label>
    </div>
    <div>
      <input type="text" name="username" placeholder="Username" />
      <label htmlFor="username">Username</label>
    </div>
    <div>
      <input type="password" name="password" placeholder="Password" />
      <label htmlFor="password">Password</label>
    </div>
    <input type="submit" value="Signup" />
  </form>;

const Messages = () =>
  <ul>
    <h1>Messages:</h1>
    <li>Hello, World!</li>
    <li>Lorem ipsum dolor sit amet.</li>
    <li>Jesus loves you!</li>
  </ul>

// ReactDOM.render(
//   (<Router>
//      <div>
//        {/* <Route path="/" component={Home} /> (Desirable when I want the same header on multiple pages) */}
//        {/* <Route exact path="/" component={Home} /> */}
//        <Route exact path="/" render={() => <h1>Home!</h1>} />
//        <Route exact path="/about" component={About} />
//        <Route exact path="/login" component={Login} />
//      </div>
//    </Router>),
//   document.getElementById('root')
// );
ReactDOM.render(
  (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/messages" component={Messages} />
      </div>
    </Router>
  ),
  document.getElementById('root')
);