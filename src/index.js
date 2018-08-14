import React from 'react';
import ReactDOM from 'react-dom';
// Step 1. After running npm install react-router-dom
// Import react-router functions, 2 components being imported here.
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'

// Step 2: The Router (our alias for BrowserRouter) component is the base for our application's routing. 
// It is where we declare how React Router will be used. Notice that nested inside the Router component we use the 
// Route component. The Route component has two props in our example: path and render. 
// The Route component is in charge of saying: "when the url matches this specified path, render this specified component".

// Step 2: Have Router coordinate what is displayed 
// ReactDOM.render(
//   <Home />,
//   document.getElementById('root')
// );

// ADD BASIC STYLING FOR NAVLINKS

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


ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
    </React.Fragment>
  </Router>), 
  document.getElementById('root')
);
