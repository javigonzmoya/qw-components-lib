import { argv } from 'node:process';
import { parse, format, normalize } from 'node:path';
import { writeFile } from 'node:fs/promises';

const tokensToCss = (object = {}, base = `-`) =>
  Object.entries(object).reduce((css, [key, value]) => {
    if (key === 'type') return css;
    let newBase = `${base}${key !== 'value' ? `-${key}` : ''}`;
    if (typeof value !== 'object') {
      return `${css}${newBase}: ${value};\n`;
    }
    return `${css}${tokensToCss(value, newBase)}`;
  }, ``);

const saveTokens = async (name, tokens) => {
  try {
    await writeFile(`./src/${name}.css`, tokens);
  } catch (e) {
    console.log('There was an error while saving a file.\n', e);
  }
};

const main = async () => {
  try {
    const [path, prefix = '', scope = ':root'] = argv.slice(2);
    const tokensPath = format({ root: './', base: normalize(path) });
    const { tokens } = await import(tokensPath);
    const { name } = parse(tokensPath);

    const cssVariables = tokensToCss(tokens, `--${prefix}`);
    const cssClass = `${scope} {\n${cssVariables.replaceAll('--', '  --')}}\n`;
    saveTokens(name, cssClass);
  } catch (e) {
    console.log(
      'Provide a correct argument - a relative path to design tokens.\n',
      e
    );
  }
};

main();
