import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

import { pushMessage } from '../../firebase';

import { submitMessage } from '../../function/commonFunction';

type Props = {
  inputElement: React.MutableRefObject<HTMLInputElement | null>;
  name: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleLoading: (isLoad: boolean) => Promise<void>;
}

export const MessageField: React.FC<Props> = ({ name, text, inputElement, setText, handleLoading }) => {
  const [isComposed, setIsComposed] = useState(false);

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    try{
      if(isComposed) return;

      if (!(e.target instanceof HTMLInputElement)) return;

      let text = e.target.value;
      if(text === '') return;

      if(e.key === 'Enter'){
        handleLoading(true);

        //TODO: MessageSubmitButtonと共通化したい
        submitMessage({ text }).then((convertText) => {
          pushMessage(name, convertText);
          setText('');
          handleLoading(false);
        })
        e.preventDefault();
      }
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <TextField
        autoFocus
        fullWidth={true}
        inputRef={inputElement}
        onChangeCapture={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if(!(e.target instanceof HTMLInputElement)) return;
          setText(e.target.value)
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e)}
        onCompositionStart={() => {setIsComposed(true)}}
        onCompositionEnd={() => {setIsComposed(false)}}
        value={text}
      />
    </>
  );
};
