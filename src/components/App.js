import React , {useState} from 'react';
import { SignIn } from './SignIn';
import { Main } from './Main';
import { SignUp } from './SignUp'
import config from '../config.json';
import { AuthProvider } from '../context/AuthContext';

export default () => {
  const[name, setName] = useState('');
  const signIn = false; // 仮設定
  return(
    <AuthProvider>
      {signIn ?
        config.signInEnabled && name === ''
        ? (<SignIn setName={setName}/>)
        : (<Main name={name} />)
      :
        (<SignUp/>)
      }
    </AuthProvider>
  )

};
