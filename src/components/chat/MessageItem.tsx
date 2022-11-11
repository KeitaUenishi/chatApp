import React, { useEffect, useRef } from 'react'
import { ListItem, ListItemAvatar, ListItemText, Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}));

export const MessageItem = ({isLastItem ,name, text}) => {
  const ref = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    if(isLastItem){
      ref.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [isLastItem]);

  return (
    <ListItem divider={true} ref={ref}>
        <ListItemAvatar>
          <Avatar alt='Primitive Man' src={`${process.env.PUBLIC_URL}/static/images/primitiveMan.jpeg`} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {text}
              </Typography>
          }
        />
      </ListItem>
  )
}
