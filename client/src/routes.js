import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './pages/App/App';
import About from './pages/About/About';

const Routes = props => (
  <Router>
    <Route path="/" exact component={App} />
    <Route path="/about" component={About} />
  </Router>
);

export default Routes;
