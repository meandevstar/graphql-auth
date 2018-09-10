import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Signup from '../containers/Signup';
import Dashboard from '../containers/Dashboard';
import LoginContainer from '../containers/Login';

class App extends Component {
  render() {
    const isAuthenticated = !!localStorage.getItem('token')
    
    return (
      <div>
        <Switch>
          <Route exact path='/signup' component={Signup} />          
          <Route exact path='/login' render={(props) => ( isAuthenticated
            ? <Redirect to='/dashboard' />
            : <LoginContainer {...props} />
          )} />
          <Route exact path='/dashboard' render={(props) => ( isAuthenticated
            ? <Dashboard {...props} />
            : <Redirect to='/login' />
          )} />
          <Route exact path='*' render={(props) => <Redirect to='/dashboard' />} />
        </Switch>
      </div>
    );
  }
}

export default App;