// packages/npm-kit/src/lib/get-npm-token.test.ts

import { describe, it, expect, vi, beforeEach } from 'vitest';
import dotenv from 'dotenv';
import { getNpmToken } from '../lib/get-npm-token';

vi.mock('dotenv', () => ({
  default: {
    config: vi.fn(),
  },
}));

describe('getNpmToken', () => {
  beforeEach(() => {
    vi.resetModules();
    delete process.env.NPM_TOKEN;
  });

  it('возвращает токен при наличии переменной NPM_TOKEN', () => {
    const npmToken = 'npm_111';

    vi.stubEnv('NPM_TOKEN', npmToken);
    const token = getNpmToken();

    expect(token).toBe(npmToken);
  });

  it('возвращает токен из кастомной папки, если передана переменная NPM_TOKEN', () => {
    const npmToken = 'npm_222';
    const envDir = 'envDir';
    const configSpy = vi.spyOn(dotenv, 'config');

    vi.stubEnv('NPM_TOKEN', npmToken);
    const token = getNpmToken(envDir);

    expect(configSpy).toHaveBeenCalledWith({
      path: expect.stringContaining(`${envDir}/.env`),
    });
    expect(token).toBe(npmToken);

    configSpy.mockRestore();
  });

  it('завершает работу с ошибкой, если NPM_TOKEN не задан', () => {
    const configSpy = vi.spyOn(dotenv, 'config');
    const spyExit = vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);
    const spyConsole = vi.spyOn(console, 'error').mockImplementation(() => {});

    getNpmToken();

    expect(spyConsole).toHaveBeenCalledWith('❌ NPM_TOKEN not set in .env');
    expect(spyExit).toHaveBeenCalledWith(1);

    configSpy.mockRestore();
    spyExit.mockRestore();
    spyConsole.mockRestore();
  });
});
