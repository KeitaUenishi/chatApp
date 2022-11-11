import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import { submitMessage } from '../../function/commonFunction';

type Props = {
  inputElement: React.MutableRefObject<HTMLInputElement | null>;
  name: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export const MessageField: React.FC<Props> = ({ name, setText, text, inputElement }) => {
  const [isComposed, setIsComposed] = useState(false);

  const fieldAction = (e: React.KeyboardEvent<HTMLInputElement>) => {
    try{
      if(isComposed) return;

      if (!(e.target instanceof HTMLInputElement)) return;

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
      inputRef={inputElement}
      onChangeCapture={(e: React.KeyboardEvent<HTMLInputElement>) => {
        if(!(e.target instanceof HTMLInputElement)) return;
        setText(e.target.value)
      }}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => fieldAction(e)}
      onCompositionStart={() => {setIsComposed(true)}}
      onCompositionEnd={() => {setIsComposed(false)}}
      value={text}
    />
  );
};
