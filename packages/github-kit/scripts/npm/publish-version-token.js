// packages/github-kit/scripts/npm/publish-version-token.js

import { execSync } from 'child_process';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '../../.env') });

const token = process.env.NPM_TOKEN;

if (!token) {
  console.error('❌ NPM_TOKEN not set in .env');
  process.exit(1);
}

// Определяем тип обновления (patch, minor, major)
const type = process.argv.includes('--minor')
  ? 'minor'
  : process.argv.includes('--major')
    ? 'major'
    : 'patch';

console.log(`📦 Updating version (${type})...`);

// 1. Обновляем версию
execSync(`npm version ${type} --no-git-tag-version`, { stdio: 'inherit' });

// 2. Собираем
execSync('npm run build', { stdio: 'inherit' });

// 3. Устанавливаем токен
execSync(`npm config set //registry.npmjs.org/:_authToken=${token}`, { stdio: 'inherit' });

// 4. Публикуем
execSync('npm publish --access public', { stdio: 'inherit' });

// 5. Удаляем токен
execSync('npm config delete //registry.npmjs.org/:_authToken', { stdio: 'inherit' });

console.log('✅ Published successfully!');
