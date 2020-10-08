import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginContainer from './Login/LoginContainer';

const LoginScreen = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <LoginContainer />
          </Route> 
          <Redirect from="/" to="/login"></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default LoginScreen;

