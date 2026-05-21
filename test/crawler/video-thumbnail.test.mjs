import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const scriptPath = path.resolve('scripts/crawler/video-thumbnail.mjs');

function tempArticleDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'open-news-video-thumbnail-'));
}

test('video-thumbnail reports missing video as data with exit 0', () => {
  const articleDir = tempArticleDir();

  const result = spawnSync(process.execPath, [scriptPath, '--article-dir', articleDir], {
    encoding: 'utf8',
  });

  assert.equal(result.status, 0);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.ok, false);
  assert.equal(payload.reason, 'no-video');
  assert.equal(fs.existsSync(path.join(articleDir, 'thumbnail.png')), false);
});

test('video-thumbnail requires an article directory', () => {
  const result = spawnSync(process.execPath, [scriptPath], { encoding: 'utf8' });

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Missing required argument --article-dir/);
});
