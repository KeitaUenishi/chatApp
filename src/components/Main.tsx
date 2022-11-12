import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

import { useAuthContext } from '../context/AuthContext';
import { NameInputForm } from './NameInputForm';
import { ChatPage } from './ChatPage';

type Props = {
  handleLoading: (isLoad: boolean) => Promise<void>;
}

export const Main: React.FC<Props> = ({ handleLoading }) => {
  const[name, setName] = useState('');
  //TODO: any型をなくす
  const { user } = useAuthContext() as any;

  if (!user) {
    return <Redirect to="/signin" />
  } else if (user && name === '') {
    return <NameInputForm setName={setName}/>
  } else {
    return (
      <>
        <ChatPage name={name} handleLoading={handleLoading}/>
      </>
    )
  }
}
