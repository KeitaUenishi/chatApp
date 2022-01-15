import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { submitMessage } from '../../function/commonFunction';

export const MessageField = ({ name, setText, text, inputEl }) => {
  const [isComposed, setIsComposed] = useState(false);

  const fieldAction = (e) => {
    try{
      if(isComposed) return;

      let text = e.target.value;
      if(text === '') return;

      if(e.key === 'Enter'){
        submitMessage({ name, text, setText });
        e.preventDefault();
      }
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <TextField
      autoFocus
      fullWidth={true}
      inputRef={inputEl}
      onChangeCapture={(e) => setText(e.target.value)}
      onKeyDown={(e) => fieldAction(e)}
      onCompositionStart={() => {setIsComposed(true)}}
      onCompositionEnd={() => {setIsComposed(false)}}
      value={text}
    />
  );
};
