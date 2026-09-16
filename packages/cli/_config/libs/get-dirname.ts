// packages/npm-kit/_config/libs/get-dirname.ts

import { fileURLToPath } from 'url';

export function getDirname(metaUrl: string, url: string = '.') {
  return fileURLToPath(new URL(url, metaUrl));
}
