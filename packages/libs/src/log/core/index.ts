// packages/libs/src/log/core/index.ts

function logJob(message: string) {
  console.log(`   ${message}`);
}

function logSuccess(message: string) {
  console.log(`✅ ${message}`);
}

function logFail(message: string, error?: unknown): never {
  const details = error instanceof Error ? error.message : error ? String(error) : '';
  console.error(`❌ ${message}${details ? `: ${details}` : ''}`);
  process.exit(1);
}

export { logJob, logSuccess, logFail };
export const logMethods = {
  job: logJob,
  success: logSuccess,
  fail: logFail,
};
