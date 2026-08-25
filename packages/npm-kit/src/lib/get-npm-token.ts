// packages/npm-kit/src/lib/get-npm-token.ts

import { resolve } from 'path';
import dotenv from 'dotenv';

/**
 * ---
 * @example `getNpmToken()` в ./src/feature/github/.../index.ts
 * @returns (относительно корня) ./.env
 *
 * ---
 * @example `getNpmToken(envDir)` в ./src/feature/github/.../index.ts
 * @returns (относительно корня) ./envDir/.env
 * */
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
