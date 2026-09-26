// packages/libs/src/package-json/index.ts

import type { ParsePackageJsonVersionType } from './bump-version';
export type { ParsePackageJsonVersionType };

import { bumpPackageJsonVersion, parsePackageJsonVersionType } from './bump-version';
import { readPackageJson } from './read';

export { bumpPackageJsonVersion, parsePackageJsonVersionType, readPackageJson };

export const packageJsonLibs = {
  read: readPackageJson,
  bumpVersion: bumpPackageJsonVersion,
  parseVersionType: parsePackageJsonVersionType,
};
