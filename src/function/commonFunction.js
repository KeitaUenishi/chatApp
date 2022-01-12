import React from 'react'
import kuromoji from 'kuromoji'

export const changeMessage = (text) => {

  kuromoji.builder({ dicPath: "/dict" }).build((err, tokenizer) => {
    if(err){
      console.log(err)
    } else {
      const tokens = tokenizer.tokenize(text)
      console.log(tokens)
    }
  })

  const beforeText = text.split('');
  let returnText= '';
  beforeText.map((text) => {
    const setChar = text.toString().charCodeAt(0);
    returnText = returnText + changeText(setChar);
  })
  return returnText;
}

export const changeText = (setChar) => {

  if(setChar <= 10000){
    return 'オッ'
  }

  // 「あ」〜「ん」の変換
  if(setChar >= 10001 && setChar <= 12394){
    return 'ンォゥ！！！　'
  }
  if(setChar >= 12353 && setChar <= 12362){
    return 'ゥオッ'
  }
  if(setChar >= 12363 && setChar <= 12372){
    return 'ウォオオオオオオン！！！　'
  }
  if(setChar >= 12373 && setChar <= 12382){
    return 'オゥン！　'
  }
  if(setChar >= 12383 && setChar <= 12393){
    return 'ヌゥウ'
  }
  if(setChar >= 12394 && setChar <= 12398){
    return 'ホウ'
  }
  if(setChar >= 12399 && setChar <= 12413){
    return 'オウ'
  }
  if(setChar >= 12414 && setChar <= 12418){
    return 'ホォォォウ！！　'
  }
  if(setChar >= 12419 && setChar <= 12423){
    return ''
  }
  if(setChar >= 12424 && setChar <= 12438){
    return 'ヌッ'
  }

  // その他の変換
  if(setChar >= 12438 && setChar <= 20000){
    return 'ヌン！　'
  }
  if(setChar >= 20001 && setChar <= 30000){
    return 'オホウッ'
  }
  if(setChar >= 30001 && setChar <= 40000){
    return 'ホオホ'
  }

  return 'ゥ';
}
