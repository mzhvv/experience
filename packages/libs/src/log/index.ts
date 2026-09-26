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

export const logLibs = {
  job: _job,
  success: _success,
  fail: _fail,
};
