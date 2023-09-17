import { readFile } from 'node:fs/promises';
import { argv } from 'node:process';
import { tokensToCss } from './utils/handle-tokens.js';
import { saveFile } from './utils/handle-files.js';

const main = async () => {
  try {
    const [prefix = '', path] = argv.slice(2);
    const data = await readFile(path);
    const tokens = JSON.parse(data.toString());
    const cssVariables = tokensToCss(tokens, `--${prefix}`).split(';\n');
    const content = cssVariables.reduce((acc, item) => {
      const [name = ''] = item.split(':');
      if (!name) return acc;
      const mixin = `@mixin ${name.replace(
        '--',
        ''
      )}{\nNAME_RULE: var(${name});\n}\n`;
      return (acc += mixin);
    }, '');
    const formatPath = path.split('/');
    const pathToSave = formatPath.slice(0, formatPath.length - 1).join('/');
    saveFile({
      path: `${pathToSave}/`,
      fileName: 'auto._hooks',
      content,
      ext: 'scss',
    });
  } catch (e) {
    console.log(
      'Provide a incorrect argument - no exist path to token.json.\n',
      e
    );
  }
};

main();
