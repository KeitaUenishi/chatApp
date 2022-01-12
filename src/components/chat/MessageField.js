import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { pushMessage } from '../../firebase';
import { changeMessage } from '../../function/commonFunction';

export const MessageField = ({ name, setText, text, inputEl }) => {
  const [isComposed, setIsComposed] = useState(false);

  return (
    <TextField
      autoFocus
      fullWidth={true}
      inputRef={inputEl}
      onChangeCapture={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if(isComposed) return;

        let text = e.target.value;
        if(text === '') return;

        if(e.key === 'Enter'){
          text = changeMessage(text);
          pushMessage({name, text})
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
