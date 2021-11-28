import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

export const MessageField = ({ name, setText, text }) => {
  console.log({text});
  const [isComposed, setIsComposed] = useState(false);


  return (
    <TextField
      fullWidth={true}
      onChangeCapture={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if(isComposed) return;

        const text = e.target.value;
        if(text === '') return;

        if(e.key === 'Enter'){
          console.log('push message');
          setText('');

          e.preventDefault();
        }
      }}
      onCompositionStart={() => {setIsComposed(true)}}
      onCompositionEnd={() => {setIsComposed(false)}}
      value={text}
    />
  );
};
