import test from 'node:test';
import assert from 'node:assert/strict';

import { isSkippableSourceError } from '../../scripts/crawler/lib/source-errors.mjs';

test('isSkippableSourceError detects rate-limit failures', () => {
  assert.equal(isSkippableSourceError(new Error('HTTP 429: Rate limit exceeded')), true);
  assert.equal(isSkippableSourceError({ stderr: 'Too many requests from bird upstream' }), true);
  assert.equal(isSkippableSourceError({ code: 'ENOENT', path: 'bird' }), true);
  assert.equal(isSkippableSourceError(new Error('spawnSync bird ENOENT')), true);
  assert.equal(isSkippableSourceError(new Error('spawn ENOENT')) , false);
});
