import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

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

  return (
    <div className={classes.root}>
      <MessageList />
      <MessageInputField name={name}/>
    </div>
  )
}
