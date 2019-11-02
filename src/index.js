import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Navbar from './Navbar';
import Messages from './Messages';


//    Home, About, Login are all compenents in React/ Located in there own compnents.

ReactDOM.render((
  //  Router Coordinate what is displayed.
  //  We place all of teh routes into a <div> </div> so it done'snt throw errors.
  <Router>
    <React.Fragment>
      {/* line 76 get the home.js file. */}
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/messages" component={Messages} />
      {/* we change Renders to COMPONENTS. SO WE CAN USE IT */}
    </React.Fragment>
  </Router>),

  document.getElementById('root')
);
