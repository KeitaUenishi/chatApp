import React, { useRef } from 'react';
import { auth } from '../firebase';
import { useAuthContext } from '../context/AuthContext';

export const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
  };

  return (
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            ref={emailRef}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            ref={passwordRef}
          />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </div>
  );
}