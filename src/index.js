import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import Messages from './Messages';

// Step 1. Import react-router functions
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
<NavLink
      to="/signup"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Signup</NavLink><NavLink
      to="/messages"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Messages</NavLink>  </div>;


ReactDOM.render(
  // Note : Without router
  // <Home />,
  
  // Note : With router
  ( // Step 2. Changed to have router coordinate what is displayed
  <Router>
  
    {/* NOTE : Need to use a fragment (<div> or <> or below) because Router requires only a *single* child/html node (as with all component returns) */}
    <React.Fragment>
      { /* 
      
      // NOTE : Using  "path" causes it to render regardless of the rest of the path (as long as THAT part exists) while using "exact path" causes those paths to render ONLY when the url exactly matches
      <Route path="/" render={Home} />
       
       // Note : Using the render vs the component props has no UX difference -- see more under the hood details "https://reacttraining.com/react-router/web/api/Route"
      <Route exact path="/" render={Home} />
      <Route exact path="/about" render={About} />
      <Route exact path="/login" render={Login} />
      */}
      
      
      <Navbar />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/messages" component={Messages} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
