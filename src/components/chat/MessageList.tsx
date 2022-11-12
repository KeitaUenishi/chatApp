import React, { useEffect, useState } from 'react'
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// @ts-ignore
import { MessageItem } from './MessageItem'
// @ts-ignore
import { messagesRef } from '../../firebase';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflow: 'auto',
    gridRow: 1,
  },
});

type NameAndMessage = {
  name: string;
  text: string;
}

type Entry = [
  string,
  NameAndMessage[]
]

type NewMessage = {
  key: string;
  name: string;
  text: string;
}

export const MessageList = () => {
  const [messages, setMessages] = useState([])
  const classes = useStyles();

  useEffect(() => {
    messagesRef
    .orderByKey()
    .limitToLast(30)
    .on('value', (snapshot: any) => {
      const messages = snapshot.val();

      if (messages === null) return;

      const entries: Entry[] = Object.entries(messages);

      const newMessages: any = entries.map((entry): NewMessage => {
        const [key, nameAndText] = entry;

        // @ts-ignore
        return { key, ...nameAndText };
      });
      
      setMessages(newMessages);
    });
  }, []);

  const length = messages.length;

  return (
    <List className={classes.root}>
      {messages.map(({key, name, text}, index) => {
        const isLastItem = length === index + 1;
        return (
          <MessageItem
            key={key}
            name={name}
            text={text}
            isLastItem={isLastItem}
          />
          )
      })}
    </List>
  )
}
