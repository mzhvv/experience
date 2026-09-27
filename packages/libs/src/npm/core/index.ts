// packages/libs/src/npm/core/index.ts

import { publishVersionWithToken } from './publish-version-with-token';

export { publishVersionWithToken };

export const npmCore = {
  publish: {
    versionWithToken: publishVersionWithToken,
  },
};
