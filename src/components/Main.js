import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

import { useAuthContext } from '../context/AuthContext';
import { NameInputForm } from './NameInputForm';
import { ChatPage } from './ChatPage';

export const Main = () => {
  const[name, setName] = useState('');
  const { user } = useAuthContext();

  if (!user) {
    return <Redirect to="/signin" />
  } else if (user && name === '') {
    return <NameInputForm setName={setName}/>
  } else {
    return (
      <>
        <ChatPage name={name}/>
      </>
    )
  }
}
