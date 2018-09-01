import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <h1>Blog!</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About!</h1>
    </div>
  );
};

ReactDOM.render((
  <Router>
    <React.Fragment>
      <ul>
        <li><a href="http://localhost:3000/">home</a></li>
        <li><a href="http://localhost:3000/about">about</a></li>
        <li><a href="http://localhost:3000/blog">blog</a></li>
      </ul>
      <Route exact path="/" render={Home} />
      <Route exact path="/about" render={About} />
      <Route exact path="/blog" render={Blog} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
