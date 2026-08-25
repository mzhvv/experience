// packages/npm-kit/src/lib/create-publish-version-token.test.ts

import { describe, it, expect, vi } from 'vitest';

import { createPublishVersionToken } from '../lib/create-publish-version-token';

describe('createPublishVersionToken', () => {
  it('should determine patch as default type', () => {
    const token = 'test-token';
    const execSyncMock = vi
      .spyOn(require('child_process'), 'execSync')
      .mockImplementation(() => {});

    createPublishVersionToken(token);

    expect(execSyncMock).toHaveBeenCalledWith(
      expect.stringContaining('npm version patch'),
      expect.anything()
    );
    execSyncMock.mockRestore();
  });
});
