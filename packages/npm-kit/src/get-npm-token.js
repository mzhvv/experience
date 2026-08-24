// packages/npm-kit/src/get-npm-token.js

import dotenv from 'dotenv';
import { resolve } from 'path';

export async function getNpmToken(path) {
  if (!path) {
    dotenv.config({ path: resolve(process.cwd(), '.env') });
  } else {
    const { fileURLToPath } = await import('url');
    const { dirname } = await import('path');

    const __dirname = dirname(fileURLToPath(import.meta.url));
    dotenv.config({ path: resolve(__dirname, `${path}.env`) });
  }

  const npmToken = process.env.NPM_TOKEN;

  if (!npmToken) {
    console.error('❌ NPM_TOKEN not set in .env');
    process.exit(1);
  }
  return npmToken;
}
