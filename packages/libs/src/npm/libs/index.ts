// packages/libs/src/npm/libs/index.ts

export * from './npm';
export * from './package-json';
export { getNpmToken } from './env/get-npm-token';

// #region

import { npmMethods } from './npm';
import { packageMethods } from './package-json';

export const npmLibs = {
  npm: npmMethods,
  package: packageMethods,
};

// #endregion
