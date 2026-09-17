// packages/libs/src/package-json/libs/index.ts

import { addScripts } from './add-scripts';
import { updatePackageVersion } from './update-package-version';

export { addScripts, updatePackageVersion };
export const packageJsonLibs = {
  addScripts,
  updatePackageVersion,
};
