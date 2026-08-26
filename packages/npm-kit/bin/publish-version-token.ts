// packages/npm-kit/bin/publish-version-token.ts

import { updatePackageVersion } from '../src/lib/update-package-version';
import { getNpmToken } from '../src/lib/get-npm-token';
import { createPublishVersionToken } from '../src/lib/create-publish-version-token';

updatePackageVersion();
createPublishVersionToken(getNpmToken());
