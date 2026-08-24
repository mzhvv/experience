// packages/npm-kit/bin/publish-version-token.js

import { getNpmToken } from '../src/get-npm-token';
import { createPublishVersionToken } from '../src/create-publish-version-token';

const npmToken = await getNpmToken();
// const publishVersionToke = createPublishVersionToken(npmToken);
// void publishVersionToke;
createPublishVersionToken(npmToken);
