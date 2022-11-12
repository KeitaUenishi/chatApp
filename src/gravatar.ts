import crypto from 'crypto'

export const gravatarPath = (code: string) => {
  const lowerCaseString = code.trim().toLowerCase();
  const md5 = crypto.createHash('md5');
  // @ts-ignore
  const digest = md5.update(lowerCaseString, 'binary').digest('hex');
  
  return `https://www.gravatar.com/avatar/${digest}/?d=wavatar`;
}