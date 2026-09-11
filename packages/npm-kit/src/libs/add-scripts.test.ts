// packages/npm-kit/src/libs/add-scripts.test.ts

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { writeFileSync, existsSync, unlinkSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { addScripts } from './add-scripts';

const testPackageJsonPath = resolve(process.cwd(), 'package.json');

describe('addScripts', () => {
  // Создаём тестовый package.json перед каждым тестом
  beforeEach(() => {
    const pkg = {
      name: 'test-package',
      version: '1.0.0',
    };
    writeFileSync(testPackageJsonPath, JSON.stringify(pkg, null, 2));
  });

  // Удаляем после каждого теста
  afterEach(() => {
    if (existsSync(testPackageJsonPath)) {
      unlinkSync(testPackageJsonPath);
    }
  });

  it('добавляет скрипты в package.json', () => {
    addScripts();

    const pkg = JSON.parse(readFileSync(testPackageJsonPath, 'utf-8'));
    expect(pkg.scripts).toHaveProperty('publish:patch', 'npm-kit-publish');
    expect(pkg.scripts).toHaveProperty('publish:minor', 'npm-kit-publish --minor');
    expect(pkg.scripts).toHaveProperty('publish:major', 'npm-kit-publish --major');
  });

  it('не падает если package.json нет', () => {
    unlinkSync(testPackageJsonPath);
    expect(() => addScripts()).not.toThrow();
  });

  it('не перезаписывает существующие скрипты', () => {
    const pkg = JSON.parse(readFileSync(testPackageJsonPath, 'utf-8'));
    pkg.scripts = { existing: 'echo hello' };
    writeFileSync(testPackageJsonPath, JSON.stringify(pkg, null, 2));

    addScripts();

    const updated = JSON.parse(readFileSync(testPackageJsonPath, 'utf-8'));
    expect(updated.scripts).toHaveProperty('existing', 'echo hello');
  });
});
