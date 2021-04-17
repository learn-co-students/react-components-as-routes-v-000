import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import './Style.css';

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};
function About() {
  return(
    <div>xD</div>
  )
}
function Login() {
  return(
    <form onSubmit={(event)=> {
      event.preventDefault();
      loggedIn = true
    }}>
      <input type="text" />
    </form>
  )
}
function Admin() {
  return (
    <h1>Welcome to admin page!</h1>
  )
}
function AdminInfo() {
  return (
    <h1>You are an admin!</h1>
  )
}
let loggedIn = false
function Navbar() {
  return (
    <div className="Navbar">
      <NavLink to="/" exact className="navlink">Home</NavLink>
      <NavLink to="/about" className="navlink">About</NavLink>

      <NavLink to="/admin" className="navlink">Admin</NavLink>
      {/* <NavLink to="/about" exact style={linkStyle} activeStyle={{ background: 'darkblue' }}>About</NavLink> */}
    </div>
  )
}
ReactDOM.render(
  <>
  <Router>
    <>
  <Navbar />
    <Route exact path="/" component={Home}/>
    <Route path="/error" render={_=> <h1>ERROR!</h1>} />
    <Route path="/admin" component={Admin} />
    <Route exact path="/admin/info" component={AdminInfo} />
    <Route exact path="/about" component={About} />
    </>
  </Router>
  </>,
  document.getElementById('root')
);
