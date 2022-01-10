import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { pushMessage } from '../../firebase';
import { changeText } from '../../function/commonFunction';

export const MessageField = ({ name, setText, text, inputEl }) => {
  const [isComposed, setIsComposed] = useState(false);

  const changeMessage = (text) => {
    const beforeText = text.split('');
    let returnText= '';
    beforeText.map((text) => {
      const setChar = text.toString().charCodeAt(0);
      returnText = returnText + changeText(setChar);
    })
    return returnText;
  }

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
