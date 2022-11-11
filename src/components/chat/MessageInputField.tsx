import React, {useState, useRef} from 'react'
import {Avatar, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import { MessageField } from './MessageField';
import { MessageSubmitButton } from './MessageSubmitButton';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  },
});

type Props = {
  name: string;
}

export const MessageInputField: React.FC<Props> = ({ name }) => {
  const inputEl = useRef(null)
  const [text, setText] = useState('')
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar alt='Primitive Man' src={`${process.env.PUBLIC_URL}/static/images/primitiveMan.jpeg`}/>
        </Grid>
        <Grid item xs={10}>
          <MessageField
            inputElement={inputEl}
            name={name}
            setText={setText}
            text={text}/>
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton
            inputElement={inputEl}
            name={name}
            setText={setText}
            text={text} />
        </Grid>
      </Grid>
    </div>
  )
}
