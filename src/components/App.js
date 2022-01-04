import React , {useState} from 'react';
import { SignIn } from './SignIn';
import { Main } from './Main';
import { SignUp } from './SignUp'
import config from '../config.json';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter, Route } from 'react-router-dom';

export default () => {
  const[name, setName] = useState('');
  const signIn = false; // 仮設定
  return(
    <AuthProvider>
      {/* {signIn ?
        config.signInEnabled && name === ''
        ? (<SignIn setName={setName}/>)
        : (<Main name={name} />)
      :
        ( */}
          <BrowserRouter>
            <Route exact path="/" >
              <Main name={name} />
            </Route>
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" >
              <SignIn setName={setName} />
            </Route>
          </BrowserRouter>
        {/* )
      } */}
    </AuthProvider>
  )

};
