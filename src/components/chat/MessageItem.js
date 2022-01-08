import React, { useEffect, useRef } from 'react'
import { ListItem, ListItemAvatar, ListItemText, Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { gravatarPath } from '../../gravatar';

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}));

export const MessageItem = ({isLastItem ,name, text}) => {
  const ref = useRef(null);
  const classes = useStyles();
  const avaterPath = gravatarPath(name);

  useEffect(() => {
    if(isLastItem){
      ref.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [isLastItem]);

  return (
    <ListItem divider={true} ref={ref}>
        <ListItemAvatar>
          <Avatar src={avaterPath} />
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
