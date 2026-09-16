// packages/npm-kit/src/libs/env/index.ts

import { getNpmToken } from './get-npm-token';

export const envLibs = {
  token: {
    npm: {
      get: getNpmToken,
    },
  },
};
