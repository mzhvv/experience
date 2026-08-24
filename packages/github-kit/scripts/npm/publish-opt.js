// packages/github-kit/scripts/npm/publish-opt.js

import { execSync } from 'child_process';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '../../.env') });

const otp = process.env.NPM_OTP;
const isForce = process.argv.includes('--force');

if (!otp) {
  console.error('❌ NPM_OTP not set in .env');
  process.exit(1);
}

// Сборка
execSync('npm run build', { stdio: 'inherit' });

// Публикация
const command = `npm publish --access public --otp=${otp}${isForce ? ' --force --no-git-checks' : ''}`;
console.log(`📦 Running: ${command}`);
execSync(command, { stdio: 'inherit' });
