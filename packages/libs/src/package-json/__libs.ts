// packages/libs/src/package-json/__libs.ts

import { bumpPackageJsonVersion, parsePackageJsonVersionType } from './bump-version';
import { readPackageJson } from './read';

export const packageJsonLibs = {
  read: readPackageJson,
  bumpVersion: bumpPackageJsonVersion,
  parseVersionType: parsePackageJsonVersionType,
};
