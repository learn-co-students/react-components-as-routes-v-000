import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import Login from './Login';

// First, import react-router functions
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
  </div>
;

// Next, change this to have the router coordinate what is displayed
ReactDOM.render((
  // <Home />
  <Router>
    <React.Fragment>
      <Navbar />
      {/* <Route path="/" render={Home} /> */}
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);

// The Route component is in charge of saying: "when the url matches this specified "path", render this specified {component}".

// We wrapped it in a React.Fragment because "a <Router> may have only one child element", and this is better that having to wrap it in a useless <div>

// In this implementation, the "Home" component is always rendering.  If it's something like a header, that may be desirable. If not, we could change the Route component for "Home" to `exact path` instead of just `path`.