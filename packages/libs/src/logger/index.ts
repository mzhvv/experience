// packages/libs/src/logger/index.ts

// #region methods

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

// #endregion

// #region export

// export { _job as loggerJob, _success as loggerSuccess, _fail as loggerFail };
export const logger = {
  job: _job,
  success: _success,
  fail: _fail,
};

// #endregion
