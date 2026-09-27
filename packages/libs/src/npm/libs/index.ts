// packages/libs/src/npm/libs/index.ts

import { addPackageScripts } from './add-scripts';
import { getNpmToken } from './get-npm-token';
import { setNpmAuthToken, deleteNpmAuthToken, publishNpm } from './npm-commands';

export { addPackageScripts, getNpmToken, setNpmAuthToken, deleteNpmAuthToken, publishNpm };

export const npmLibs = {
  scripts: {
    add: addPackageScripts,
  },
  token: {
    get: getNpmToken,
  },
  commands: {
    authToken: {
      set: setNpmAuthToken,
      delete: deleteNpmAuthToken,
    },
    publish: publishNpm,
  },
};
