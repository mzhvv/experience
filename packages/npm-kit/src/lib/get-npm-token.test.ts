// packages/npm-kit/src/lib/get-npm-token.test.ts

import { describe, it, expect, vi, beforeEach } from 'vitest';

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

  it('должен возвращать токен, если установлена ​​переменная NPM_TOKEN', () => {
    const NPM_TOKEN = 'npm_...';
    vi.stubEnv('NPM_TOKEN', 'npm_...');

    const token = getNpmToken();
    expect(token).toBe(NPM_TOKEN);
  });

  it('следует завершить работу, если NPM_TOKEN не задан', () => {
    delete process.env.NPM_TOKEN;

    const spyExit = vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);
    const spyConsole = vi.spyOn(console, 'error').mockImplementation(() => {});

    getNpmToken();

    expect(spyConsole).toHaveBeenCalledWith('❌ NPM_TOKEN not set in .env');
    expect(spyExit).toHaveBeenCalledWith(1);

    spyExit.mockRestore();
    spyConsole.mockRestore();
  });
});
