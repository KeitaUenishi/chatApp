import React from "react";
import { IconButton } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

import { pushMessage } from '../../firebase'
import { changeText } from '../../function/commonFunction';

export const MessageSubmitButton = ({inputEl, name, setText, text}) => {

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