export function isSkippableSourceError(error) {
  const text = String(error?.stderr || error?.message || error || '');
  return /429/i.test(text) || /rate limit/i.test(text) || /too many requests/i.test(text);
}

