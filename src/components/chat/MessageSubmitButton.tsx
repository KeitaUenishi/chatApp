import React from "react";

import { IconButton } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

import { submitMessage } from '../../function/commonFunction';

type Props = {
  inputElement: React.MutableRefObject<HTMLInputElement | null>;
  name: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  text: string;
}

export const MessageSubmitButton: React.FC<Props> = ({ inputElement: inputElm, name, setText, text }) => {

  return (
    <IconButton 
      disabled={text === ''} 
      onClick={(() => {
        submitMessage({ name, text, setText });
        if (inputElm.current !== null) {
          inputElm.current.focus();
        }
      })}>
      <SendIcon />
    </IconButton>
  );
};