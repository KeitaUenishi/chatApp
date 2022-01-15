import kuromoji from 'kuromoji'
import { pushMessage } from '../firebase';

export const submitMessage = ({ name, text, setText }) => {
  const createText = changeMessage(text)

  createText.then((text) => {
    pushMessage({name, text})
    setText('');
  })
}

const changeMessage = (text) => {
  return new Promise((resolve, reject) => {
    let tokens = '';

    kuromoji.builder({ dicPath: "/dict" }).build((err, tokenizer) => {
      if(err){
        console.log(err)
        return reject("reject");
      } else {
        tokens = tokenizer.tokenize(text)
        return resolve(changeTextToPrimitiveHuman(tokens))
      }
    })
  })
}

const changeTextToPrimitiveHuman = (tokens) => {
  const text = tokens.map((token) => {
    if(token.word_type === 'UNKNOWN') return 'ヌゥゥゥン！！';
    if(token.pos === '助詞'){
      return '';
    }
    else{
      return JSON.stringify(token.pronunciation).replaceAll('"', '');
    }
  })
  return text.join(' ');
}