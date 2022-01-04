import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { auth } from '../firebase';

export const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try{
      await auth.createUserWithEmailAndPassword(
      email.value,
        password.value
      );
      history.push('/');
    }catch (error){
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>ユーザ登録</h1>
      {error && <Typography style={{ color: 'red' }} component="h3" variant="h6">{error}</Typography>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email"
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            placeholder="password"
          />
        </div>
        <div>
          <button>登録</button>
        </div>
        <div>
          ログインページは<Link to={'/login'}>こちら</Link>
        </div>
      </form>
    </div>
  );
}