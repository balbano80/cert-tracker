import React from 'react';
import {BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';

// FREE
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import FormEmployeePage from './pages/FormEmployeePage';
import AboutUs from './pages/AboutUs';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* FREE */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignupPage} />
        <Route exact path='/dashboard' component={DashboardPage} />
        <Route exact path='/employeeform' component={FormEmployeePage} />
        <Route exact path='/aboutus' component={AboutUs} />
        <Route render = { function() {
          return <h1>Not Found</h1>;
        }} />
      </Switch>
    );
  }
}

export default Routes;
