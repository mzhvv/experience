// packages/libs/src/shared/__index.ts

export * from './log';
export * from './read-package-json';
export * from './bump-package-version';

import { log } from './log';
import { readPackageJson } from './read-package-json';
import { bumpPackageVersion } from './bump-package-version';

export const sharedLibs = {
  log,
  packageJson: {
    read: readPackageJson,
    bumpVersion: bumpPackageVersion,
  },
};
