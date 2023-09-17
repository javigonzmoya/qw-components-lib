import { writeFile } from 'node:fs/promises';

export const saveFile = async ({ path, fileName, content, ext }) => {
  try {
    await writeFile(`${path}${fileName}.${ext}`, content);
  } catch (e) {
    console.log('Error while saving a file.\n', e);
  }
};
