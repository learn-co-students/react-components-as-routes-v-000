import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Home = () =>
  <h1>Home!</h1>;

const About = () =>
  <h1>This is my about component!</h1>;

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
          }}>Home
        </NavLink>

        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}>About
        </NavLink>

        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}>Login
        </NavLink>

        <NavLink to="/signup" exact style={link} activeStyle={{background: 'darkblue'}}>Signup</NavLink>
        <NavLink to="/messages" exact style={link} activeStyle={{background: 'darkblue'}}>
          Messages
        </NavLink>
      </div>;


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

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
      <input type="text" name="username" placeholder="Username" />
      <label htmlFor="username">Username</label>
    </div>
    <div>
      <input type="password" name="password" placeholder="Password" />
      <label htmlFor="password">Password</label>
    </div>
    <div>
      <input type="password" name="password confirmation" placeholder="Password Confirmation" />
      <label htmlFor="password">Password Confirmation</label>
    </div>
    <input type="submit" value="Signup" />
  </form>

const Messages = () =>
  <div>
    <h1>Hello, World</h1>
    <h2>Hello, World</h2>
    <h3>Hello, World</h3>
    <h4>Hello, World</h4>
    <h5>Hello, World</h5>
    <h6>Hello, World</h6>
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
