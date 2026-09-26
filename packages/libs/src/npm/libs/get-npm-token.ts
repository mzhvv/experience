// packages/libs/src/npm/libs/get-npm-token.ts

import dotenv from 'dotenv';
import { resolve } from 'path';

export function getNpmToken(envDir?: string): string {
  if (!envDir) {
    dotenv.config({ path: resolve(process.cwd(), '.env') });
  } else {
    dotenv.config({ path: resolve(process.cwd(), envDir, '.env') });
  }

  const npmToken = process.env.NPM_TOKEN;

  if (!npmToken) {
    console.error('❌ NPM_TOKEN not set in .env');
    process.exit(1);
  }
  return npmToken;
}
