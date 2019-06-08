import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import Home from './home';

/* Add basic styling for NavLink */
  const link ={
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
    to='/' /* set exact so it knows to only set activeStyle when route is deeply equal to link */
    exact
    /*add styling to NavLink */
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

  const Home = () => <h1>Home! what</h1>;
  const About = () => <h1> This is my component!</h1>



  const Login = () => {
    return (
      <div>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
              <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value="Login"/>
        </form>
      </div>
    );
  };

ReactDOM.render((
  <Router>
    <React.Fragment>
      {/* line 76 get the home.js file. */}
    <Route exact path="/" component={Home} />
    <Route exact path="/about" render={About} />
    <Route exact path="/login" render={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
