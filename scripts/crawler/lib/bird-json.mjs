export function extractBirdJson(raw) {
  const text = String(raw ?? '').trim();
  if (!text) return [];

  const arrayIndex = text.indexOf('[');
  const objectIndex = text.indexOf('{');
  const startIndex = [arrayIndex, objectIndex]
    .filter((value) => value >= 0)
    .sort((a, b) => a - b)[0];

  if (startIndex == null) {
    throw new Error('No JSON payload found in bird output');
  }

  const payload = text.slice(startIndex);
  return JSON.parse(payload);
}

export function isRetweet(tweet) {
  return String(tweet?.text ?? '').startsWith('RT @');
}

export function isReply(tweet) {
  return Boolean(tweet?.inReplyToStatusId) && tweet?.inReplyToStatusId !== tweet?.id;
}

export function hasUsefulMedia(tweet) {
  const text = String(tweet?.text ?? '');
  return /https?:\/\//.test(text) || /t\.co\//.test(text);
}

