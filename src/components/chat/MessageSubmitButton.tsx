import React from "react";

import { IconButton } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

import { pushMessage } from '../../firebase';

import { submitMessage } from '../../function/commonFunction';

type Props = {
  inputElement: React.MutableRefObject<HTMLInputElement | null>;
  name: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleLoading: (isLoad: boolean) => Promise<void>;
}

export const MessageSubmitButton: React.FC<Props> = ({
  inputElement,
  name,
  text,
  setText,
  handleLoading
}) => {

  const handleOnClick = async () => {
    handleLoading(true);

    //TODO: MessageFieldと共通化したい
    submitMessage({ text }).then((convertText) => {
      pushMessage(name, convertText);
      setText('');
      handleLoading(false);
    })

    if (inputElement.current !== null) {
      inputElement.current.focus();
    }
  }
  return (
    <IconButton 
      disabled={text === ''} 
      onClick={() => handleOnClick()}>
      <SendIcon />
    </IconButton>
  );
};