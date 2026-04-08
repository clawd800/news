import test from 'node:test';
import assert from 'node:assert/strict';

import { canReadViaJina, jinaSearch } from '../../scripts/crawler/lib/jina.mjs';

test('jinaSearch normalizes array payloads', async () => {
  const fetchImpl = async () => ({
    ok: true,
    async json() {
      return [{ title: 'AI launch', url: 'https://example.com/ai-launch', content: 'launch details' }];
    },
  });

  const results = await jinaSearch('ai launch', ['example.com'], fetchImpl);
  assert.equal(results.length, 1);
  assert.equal(results[0].title, 'AI launch');
});

test('canReadViaJina returns false on failed fetch', async () => {
  const fetchImpl = async () => ({ ok: false, status: 403 });
  assert.equal(await canReadViaJina('https://example.com/post', fetchImpl), false);
});

