#!/usr/bin/env node
// packages/npm-kit/bin/typecheck.js

import { execSync } from 'child_process';

console.log('🔍 Running typecheck...');

try {
  execSync('tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ Typecheck passed');
} catch {
  console.error('❌ Typecheck failed');
  process.exit(1);
}
