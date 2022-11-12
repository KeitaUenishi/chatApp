import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { OverlaySpinner } from './common/OverlaySpinner';
import { Header } from './common/Header';
import { SignIn } from './login/SignIn';
import { SignUp } from './login/SignUp';
import { Main } from './Main';
import { AuthProvider } from '../context/AuthContext';


export const App = () => {


  return(
    <AuthProvider>
      <BrowserRouter>
        <Route exact path="/" >
          <Header/>
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
