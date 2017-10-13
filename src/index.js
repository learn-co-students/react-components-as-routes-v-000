import React from 'react';
import ReactDOM from 'react-dom';
// Step 1. Import react-router-functions
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


const link = {
  width: '100px',
  padding: '12px',
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
      to="/signup"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Signup</NavLink>
  </div>


const Home = () => <h1>Home</h1>

const About = () => <h1>About</h1>

const Login = () =>
  <div>
    <h1>Login</h1>
    <form>

      <div>
        <label htmlFor="Username">Username: </label>
        <input type="text" name="username" placeholder="Username" />
      </div>

      <div>
        <label htmlFor="Password">Password: </label>
        <input type="password" name="password" placeholder="Password" />
      </div>

      <input type="submit" value="Login" />

    </form>
  </div>

const Signup = () =>
  <div>
    <h1>Signup</h1>
    <form>

      <div>
        <label htmlFor="Email">Email: </label>
        <input type="text" name="email" placeholder="Email" />
      </div>

      <div>
        <label htmlFor="Username">Username: </label>
        <input type="text" name="username" placeholder="Username" />
      </div>

      <div>
        <label htmlFor="Password">Password: </label>
        <input type="password" name="password" placeholder="Password" />
      </div>

      <input type="submit" value="Signup" />

    </form>
  </div>


const App = () => {
  return (

    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
