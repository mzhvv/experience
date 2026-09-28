// packages/libs/src/log/index.ts

function _job(message: string) {
  console.log(`   ${message}`);
}

function _success(message: string) {
  console.log(`✅ ${message}`);
}

function _fail(message: string, error?: unknown) {
  const details = error instanceof Error ? error.message : error ? String(error) : '';
  console.error(`❌ ${message}${details ? `: ${details}` : ''}`);
}

function _dev(...args: unknown[]) {
  if (import.meta.env.DEV) {
    console.log('[development]', ...args);
  }
}

export const log = {
  job: _job,
  success: _success,
  fail: _fail,
  dev: _dev,
};
