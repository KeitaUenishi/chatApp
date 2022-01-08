import React from 'react'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { auth } from '../firebase';

import { MessageInputField } from './chat/MessageInputField';
import { MessageList } from './chat/MessageList';


const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',
  },
});

export const ChatPage = ({name}) => {
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
