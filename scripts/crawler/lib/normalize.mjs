const STOPWORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'in', 'into',
  'is', 'it', 'its', 'of', 'on', 'or', 'that', 'the', 'their', 'this', 'to',
  'up', 'with', 'while', 'using', 'adds', 'starts', 'launches', 'launch',
  'says', 'publishes', 'rolls', 'out', 'hit', 'hits', 'debut', 'debuts',
]);

export function normalizeWhitespace(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

export function normalizeText(value) {
  return normalizeWhitespace(String(value ?? '').toLowerCase().replace(/https?:\/\/\S+/g, ' '))
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function tokenize(value) {
  return normalizeText(value)
    .split(' ')
    .map((token) => token.trim())
    .filter((token) => token.length >= 3 && !STOPWORDS.has(token));
}

export function uniqueTokens(value) {
  return [...new Set(tokenize(value))];
}

export function jaccardSimilarity(a, b) {
  const left = new Set(uniqueTokens(a));
  const right = new Set(uniqueTokens(b));
  if (left.size === 0 || right.size === 0) return 0;

  let intersection = 0;
  for (const token of left) {
    if (right.has(token)) intersection += 1;
  }
  const union = new Set([...left, ...right]).size;
  return union === 0 ? 0 : intersection / union;
}

export function stableSlugSeed(value) {
  return uniqueTokens(value).slice(0, 8).join('-');
}

