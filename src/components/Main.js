import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { MessageInputField } from './MessageInputField';
import { MessageList } from './MessageList';

import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',
  },
});

export const Main = ({name}) => {
  const classes = useStyles();
  const history = useHistory();

  const handleLogout = () => {
    auth.signOut();
    history.push('/signin')
  }


  return (
    <div className={classes.root}>
      <div>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
      <MessageList />
      <MessageInputField name={name}/>
    </div>
  )
}
