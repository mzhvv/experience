// packages/libs/src/npm/libs/npm-commands.ts

import type { ExecSyncOptions } from 'child_process';
import { execSync } from 'child_process';

// #region shared

const SharedExecSyncOptions: Pick<ExecSyncOptions, 'stdio'> = { stdio: 'inherit' };

// #endregion

// #region methods

/** @description Выполняет: ```bash
 * npm config set //registry.npmjs.org/:_authToken=${token}
 * ``` */
function setNpmAuthToken(token: string) {
  return execSync(`npm config set //registry.npmjs.org/:_authToken=${token}`, {
    ...SharedExecSyncOptions,
  });
}

/** @description Выполняет: ```bash
 * npm config delete //registry.npmjs.org/:_authToken
 * ``` */
function deleteNpmAuthToken() {
  return execSync('npm config delete //registry.npmjs.org/:_authToken', {
    ...SharedExecSyncOptions,
  });
}

/** @description Выполняет: ```bash
 * npm publish --access public
 * ``` */
function publishNpm() {
  return execSync('npm publish --access public', { ...SharedExecSyncOptions });
}

// #endregion

export { setNpmAuthToken, deleteNpmAuthToken, publishNpm };

export const npmCommands = {
  authToken: {
    set: setNpmAuthToken,
    delete: deleteNpmAuthToken,
  },
  publish: publishNpm,
};
