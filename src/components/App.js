import React , {useState} from 'react';
import { SignIn } from './login/SignIn';
import { Main } from './Main';
import { SignUp } from './login/SignUp'
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter, Route } from 'react-router-dom';

export default () => {
  const[name, setName] = useState('');

  return(
    <AuthProvider>
      <BrowserRouter>
        <Route exact path="/" >
          <Main name={name} />
        </Route>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" >
          <SignIn setName={setName} />
        </Route>
      </BrowserRouter>
    </AuthProvider>
  );
};
