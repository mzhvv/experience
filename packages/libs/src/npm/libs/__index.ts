// packages/libs/src/npm/libs/__index.ts

export * from './npm-commands';
export * from './add-scripts';
export { getNpmToken } from './get-npm-token';

// #region

import { npmCommands } from './npm-commands';
import { packageMethods } from './add-scripts';

export const npmLibs = {
  npm: npmCommands,
  package: packageMethods,
};

// #endregion
