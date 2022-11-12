import kuromoji from 'kuromoji'
import { pushMessage } from '../firebase';

type Props = {
  name: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

type Token = {
  word_id: number
  word_type: string
  word_position: number
  surface_form: string
  pos: string
  pos_detail_1: string
  pos_detail_2: string
  pos_detail_3: string
  conjugated_type: string
  conjugated_form: string
  basic_form: string
  reading: string
  pronunciation: string
}

export const submitMessage = ({ name, text, setText }: Props) => {
  const createText = changeMessage(text)

  createText.then((text) => {
    pushMessage(name, text);
    setText('');
  })
}

const changeMessage = (text: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    let tokens: Token[];

    kuromoji.builder({ dicPath: "/dict" }).build((err, tokenizer) => {
      if(err){
        console.log(err)
        return reject("reject");
      } else {
        tokens = tokenizer.tokenize(text) as any;
        return resolve(changeTextToPrimitiveHuman(tokens))
      }
    })
  })
}

const changeTextToPrimitiveHuman = (tokens: Token[]): string => {
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