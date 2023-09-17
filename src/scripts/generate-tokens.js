import { readdirSync, statSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { format, join, normalize } from 'node:path';
import { argv } from 'node:process';
import { tokensToCss } from './utils/handle-tokens.js';
import { saveFile } from './utils/handle-files.js';
// Custom helpers sort out presenter to storybook design tokens addons

const ROOT = './src/';
const EXT_SEARCH = 'token.json';

const getDirectoriesRecursively = (directoryPath) => {
  return readdirSync(directoryPath)
    .flatMap((file) => {
      const filePath = join(directoryPath, file);
      const stat = statSync(filePath);
      if (stat.isDirectory()) {
        return getDirectoriesRecursively(filePath);
      }
      return filePath;
    })
    .filter((el) => el.endsWith(EXT_SEARCH));
};

const main = async () => {
  try {
    const [fileName, prefix = '', scope = ':root'] = argv.slice(2);
    const filesToken = getDirectoriesRecursively(ROOT);
    let cssVariables = '';
    for (const path of filesToken) {
      const tokensPath = format({ root: './', base: normalize(path) });
      const data = await readFile(tokensPath);
      const tokens = JSON.parse(data.toString());
      cssVariables += tokensToCss(tokens, `--${prefix}`, true);
    }
    const content = `${scope} {\n${cssVariables.replaceAll('--', '  --')}}\n`;
    saveFile({ path: ROOT, fileName, content, ext: 'css' });
  } catch (e) {
    console.log(
      'Provide a incorrect argument - no exist path to token.json.\n',
      e
    );
  }
};

main();
