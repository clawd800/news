import test from 'node:test';
import assert from 'node:assert/strict';

import { extractBirdJson, isReply, isRetweet } from '../../scripts/crawler/lib/bird-json.mjs';

test('extractBirdJson handles bird logs before JSON payload', () => {
  const raw = [
    'ℹ️ Looking up @ethereum...',
    'ℹ️ Fetching tweets...',
    '[{"id":"1","text":"hello"}]',
  ].join('\n');

  assert.deepEqual(extractBirdJson(raw), [{ id: '1', text: 'hello' }]);
});

test('retweet and reply filters detect non-original tweets', () => {
  assert.equal(isRetweet({ text: 'RT @foo: hello' }), true);
  assert.equal(isRetweet({ text: 'hello' }), false);
  assert.equal(isReply({ id: '1', inReplyToStatusId: '2' }), true);
  assert.equal(isReply({ id: '1', inReplyToStatusId: '1' }), false);
});

