// packages/cli/src/env/libs/get-npm-token.test.ts

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import dotenv from 'dotenv';

import { getNpmToken } from './get-npm-token';

vi.mock('dotenv', () => ({
  default: {
    config: vi.fn(),
  },
}));

const mockDotenv = vi.mocked(dotenv);

describe('getNpmToken', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    delete process.env.NPM_TOKEN;
    mockDotenv.config.mockImplementation(() => ({ parsed: {} }));
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('возвращает NPM_TOKEN из .env', () => {
    const NPM_TOKEN = 'npm_111';

    mockDotenv.config.mockImplementation(() => {
      process.env.NPM_TOKEN = NPM_TOKEN;
      return { parsed: { NPM_TOKEN } };
    });

    const token = getNpmToken();

    expect(token).toBe(NPM_TOKEN);
    expect(mockDotenv.config).toHaveBeenCalledWith({
      path: expect.stringContaining('.env'),
    });
  });

  it('возвращает NPM_TOKEN из указанной папки ./envDir/.env', () => {
    const NPM_TOKEN = 'npm_222';
    const ENV_DIR = 'envDir';

    mockDotenv.config.mockImplementation(() => {
      process.env.NPM_TOKEN = NPM_TOKEN;
      return { parsed: { NPM_TOKEN } };
    });

    const token = getNpmToken(ENV_DIR);

    expect(token).toBe(NPM_TOKEN);
    expect(mockDotenv.config).toHaveBeenCalledWith({
      path: expect.stringContaining(`${ENV_DIR}/.env`),
    });
  });

  it('завершает работу с ошибкой, если NPM_TOKEN не задан', () => {
    const exitSpy = vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    getNpmToken();

    expect(errorSpy).toHaveBeenCalledWith('❌ NPM_TOKEN not set in .env');
    expect(exitSpy).toHaveBeenCalledWith(1);
  });
});
