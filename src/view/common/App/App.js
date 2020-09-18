import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../../supplier/Home/Home';
import Login from '../../auth/Login/Login';
import Register from '../../auth/Register/Register';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
