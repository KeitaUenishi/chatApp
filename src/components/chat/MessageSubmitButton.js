import React from "react";
import { IconButton } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

import { pushMessage } from '../../firebase'
import { changeMessage } from '../../function/commonFunction';

export const MessageSubmitButton = ({inputEl, name, setText, text}) => {

  return (
    <IconButton 
      disabled={text === ''} 
      onClick={(() => {
        text = changeMessage(text);
        pushMessage({ name, text });
        setText('');
        inputEl.current.focus();
      })}>
      <SendIcon />
    </IconButton>
  );
};