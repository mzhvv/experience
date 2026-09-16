// packages/npm-kit/src/libs/add-scripts.test.ts

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

import { writeFileSync, readFileSync, existsSync, unlinkSync } from 'fs';
import { resolve } from 'path';

import { addScripts } from './add-scripts';

// 👇 Мокаем console чтобы не засорять вывод
const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

const testPackageJsonPath = resolve(process.cwd(), 'package.json');

describe('addScripts', () => {
  beforeEach(() => {
    // Создаём тестовый package.json
    const pkg = {
      name: 'test-package',
      version: '1.0.0',
    };
    writeFileSync(testPackageJsonPath, JSON.stringify(pkg, null, 2));
    vi.clearAllMocks();
  });

  afterEach(() => {
    // Удаляем тестовый package.json
    if (existsSync(testPackageJsonPath)) {
      unlinkSync(testPackageJsonPath);
    }
  });

  describe('когда package.json существует', () => {
    it('добавляет publish:patch, publish:minor, publish:major', () => {
      addScripts();

      const pkg = JSON.parse(readFileSync(testPackageJsonPath, 'utf-8'));

      expect(pkg.scripts).toHaveProperty('publish:patch', 'npm-kit-publish');
      expect(pkg.scripts).toHaveProperty('publish:minor', 'npm-kit-publish --minor');
      expect(pkg.scripts).toHaveProperty('publish:major', 'npm-kit-publish --major');
    });

    it('создаёт scripts, если его не было', () => {
      const pkg = JSON.parse(readFileSync(testPackageJsonPath, 'utf-8'));
      expect(pkg.scripts).toBeUndefined();

      addScripts();

      const updated = JSON.parse(readFileSync(testPackageJsonPath, 'utf-8'));
      expect(updated.scripts).toBeDefined();
      expect(updated.scripts).toHaveProperty('publish:patch');
    });

    it('сохраняет существующие скрипты', () => {
      const pkg = JSON.parse(readFileSync(testPackageJsonPath, 'utf-8'));
      pkg.scripts = { existing: 'echo hello' };
      writeFileSync(testPackageJsonPath, JSON.stringify(pkg, null, 2));

      addScripts();

      const updated = JSON.parse(readFileSync(testPackageJsonPath, 'utf-8'));
      expect(updated.scripts).toHaveProperty('existing', 'echo hello');
      expect(updated.scripts).toHaveProperty('publish:patch');
    });

    it('сохраняет остальные поля package.json', () => {
      const pkg = JSON.parse(readFileSync(testPackageJsonPath, 'utf-8'));

      addScripts();

      const updated = JSON.parse(readFileSync(testPackageJsonPath, 'utf-8'));
      expect(updated.name).toBe(pkg.name);
      expect(updated.version).toBe(pkg.version);
    });

    it('выводит сообщение об успехе', () => {
      addScripts();

      expect(consoleLogSpy).toHaveBeenCalledWith('✅ npm-kit:* scripts added to package.json');
    });

    it('сохраняет файл с отступами 2 и переводом строки', () => {
      addScripts();

      const content = readFileSync(testPackageJsonPath, 'utf-8');
      expect(content).toContain('\n'); // есть переводы строк
      expect(content).toMatch(/ {2}"name"/); // отступ 2 пробела
    });
  });

  describe('когда package.json не существует', () => {
    beforeEach(() => {
      unlinkSync(testPackageJsonPath);
    });

    it('не падает с ошибкой', () => {
      expect(() => addScripts()).not.toThrow();
    });

    it('выводит ошибку', () => {
      addScripts();

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        '❌ package.json not found in current directory'
      );
    });

    it('не создаёт package.json', () => {
      addScripts();

      expect(existsSync(testPackageJsonPath)).toBe(false);
    });
  });

  describe('когда package.json содержит невалидный JSON', () => {
    beforeEach(() => {
      writeFileSync(testPackageJsonPath, '{ invalid json }');
    });

    it('ловит ошибку и выводит сообщение', () => {
      expect(() => addScripts()).not.toThrow();

      expect(consoleErrorSpy).toHaveBeenCalled();
      expect(consoleErrorSpy.mock.calls[0][0]).toContain('❌ Failed to update package.json');
    });
  });
});
