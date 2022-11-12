import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { OverlaySpinner } from './common/OverlaySpinner';
import { Header } from './common/Header';
import { SignIn } from './login/SignIn';
import { SignUp } from './login/SignUp';
import { Main } from './Main';
import { AuthProvider } from '../context/AuthContext';


export const App = () => {


  const [isLoading, setIsLoading] = useState(false);
  
  const handleLoading = async (isLoad: boolean) => {
    setIsLoading(isLoad);
  }
  return(
    <AuthProvider>
      <BrowserRouter>
        <Route exact path="/" >
          {isLoading && <OverlaySpinner />}
          <Header/>
          <Main handleLoading={handleLoading}/>
        </Route>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" >
          <SignIn />
        </Route>
      </BrowserRouter>
    </AuthProvider>
  );
};
