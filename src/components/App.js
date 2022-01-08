import React from 'react';
import { SignIn } from './login/SignIn';
import { Main } from './Main';
import { SignUp } from './login/SignUp'
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter, Route } from 'react-router-dom';

export default () => {

  return(
    <AuthProvider>
      <BrowserRouter>
        <Route exact path="/" >
          <Main />
        </Route>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" >
          <SignIn />
        </Route>
      </BrowserRouter>
    </AuthProvider>
  );
};
