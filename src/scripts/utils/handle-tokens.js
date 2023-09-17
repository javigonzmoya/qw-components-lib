import { END_TOKENS_DOCS, getTokensDoc } from '../token-docs/token-docs.js';

export const tokensToCss = (object = {}, base = `-`, doc = false) =>
  Object.entries(object).reduce((css, [key, value]) => {
    if (key === 'type') return css;
    let newBase = `${base}${key !== 'value' ? `-${key}` : ''}`;
    if (typeof value !== 'object') {
      const initDoc = doc ? getTokensDoc(newBase) : '';
      const endDoc = doc ? `\n${END_TOKENS_DOCS}\n` : `\n`;
      return `${css}${initDoc}${newBase}: ${value};${endDoc}`;
    }
    return `${css}${tokensToCss(value, newBase, doc)}`;
  }, ``);
