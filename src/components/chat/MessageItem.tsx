import React, { useEffect, useRef } from 'react'
import { ListItem, ListItemAvatar, ListItemText, Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}));

type Props = {
  name: string;
  text: string;
  isLastItem: boolean;
}

export const MessageItem: React.FC<Props> = ({isLastItem ,name, text}) => {
  const ref: React.RefObject<HTMLLIElement> = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    if(isLastItem){
      if (ref.current === null) return;
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
