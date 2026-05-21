import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const scriptPath = path.resolve('scripts/crawler/ensure-thumbnail.mjs');

function tempArticleDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'open-news-thumbnail-'));
}

test('ensure-thumbnail validates an existing thumbnail', () => {
  const articleDir = tempArticleDir();
  fs.writeFileSync(path.join(articleDir, 'thumbnail.png'), 'not empty');

  const result = spawnSync(process.execPath, [scriptPath, '--article-dir', articleDir], {
    encoding: 'utf8',
  });

  assert.equal(result.status, 0);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.ok, true);
  assert.equal(payload.validated, true);
});

test('ensure-thumbnail fails instead of generating fallback art', () => {
  const articleDir = tempArticleDir();

  const result = spawnSync(process.execPath, [
    scriptPath,
    '--article-dir',
    articleDir,
    '--placeholder',
    '--title',
    'Should not generate',
  ], { encoding: 'utf8' });

  assert.notEqual(result.status, 0);
  assert.equal(fs.existsSync(path.join(articleDir, 'thumbnail.png')), false);
});
