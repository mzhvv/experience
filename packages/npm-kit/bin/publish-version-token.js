// packages/npm-kit/bin/publish-version-token.js

import { getNpmToken } from '../src/lib/get-npm-token';
import { createPublishVersionToken } from '../src/lib/create-publish-version-token';

const npmToken = await getNpmToken();
// const publishVersionToke = createPublishVersionToken(npmToken);
// void publishVersionToke;
createPublishVersionToken(npmToken);
