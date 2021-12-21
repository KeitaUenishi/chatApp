import React from 'react'
import { ListItem, ListItemAvatar, ListItemText, Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { gravatarPath } from '../gravatar';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
}));

export const MessageItem = ({name, text}) => {
  const classes = useStyles();
  const avaterPath = gravatarPath(name);

  return (
    <ListItem divider={true}>
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
