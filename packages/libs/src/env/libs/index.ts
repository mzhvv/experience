// packages/cli/src/env/libs/index.ts

import { getNpmToken } from './get-npm-token';

export { getNpmToken };
export const envLibs = {
  token: {
    npm: {
      get: getNpmToken,
    },
  },
};
