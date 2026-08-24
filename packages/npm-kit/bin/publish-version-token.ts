// packages/npm-kit/bin/publish-version-token.ts

import { getNpmToken } from '../src/lib/get-npm-token';
import { createPublishVersionToken } from '../src/lib/create-publish-version-token';

const npmToken = getNpmToken();
// const publishVersionToke = createPublishVersionToken(npmToken);
// void publishVersionToke;
createPublishVersionToken(npmToken);
