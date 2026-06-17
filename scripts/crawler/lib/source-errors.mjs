export function isSkippableSourceError(error) {
  const text = String(error?.stderr || error?.message || error || '');
  const code = String(error?.code || '');
  const path = String(error?.path || '');
  return (code === 'ENOENT' && path === 'bird')
    || /spawn(?:Sync)? bird ENOENT/i.test(text)
    || /429/i.test(text)
    || /rate limit/i.test(text)
    || /too many requests/i.test(text)
    || /user @?[^\s]+ not found/i.test(text)
    || /could not find user/i.test(text);
}
