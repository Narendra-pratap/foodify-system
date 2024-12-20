// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignUpForm from './components/signup/signup';
import Login from './components/login/login.jsx';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Route for SignUp */}
        <Route exact path="/signup" component={SignUpForm} />
        
        {/* Route for Login */}
        <Route exact path="/login" component={LoginPage} />
        
        {/* Default route: Redirect to /login if no match */}
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
