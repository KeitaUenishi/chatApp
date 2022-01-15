import React from "react";
import { IconButton } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import { submitMessage } from '../../function/commonFunction';

export const MessageSubmitButton = ({ inputEl, name, setText, text }) => {

  return (
    <IconButton 
      disabled={text === ''} 
      onClick={(() => {
        submitMessage({ name, text, setText });
        inputEl.current.focus();
      })}>
      <SendIcon />
    </IconButton>
  );
};