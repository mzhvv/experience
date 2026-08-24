// packages/npm-kit/src/lib/get-npm-token.ts

import { resolve } from 'path';

import dotenv from 'dotenv';

export async function getNpmToken(path?: string) {
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
  } else {
    return npmToken;
  }
}
