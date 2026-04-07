const SPAM_PATTERNS = [
  /hours left/i,
  /join now/i,
  /bonus/i,
  /testimonials/i,
  /annual/i,
  /your move/i,
  /\$\d+/i,
];

const NEWS_SIGNAL_PATTERNS = [
  /\bannounce/i,
  /\blaunch/i,
  /open[ -]?source/i,
  /github trending/i,
  /\bdemo\b/i,
  /\bpaper\b/i,
  /\bresearch\b/i,
  /\bmainnet\b/i,
  /\broadmap\b/i,
  /\bwallet\b/i,
  /\bprotocol\b/i,
  /\bframework\b/i,
  /\brobot/i,
  /\brobotics\b/i,
  /\bexchange\b/i,
  /\bkernel\b/i,
  /\bgemma\b/i,
  /\bquantum\b/i,
];

export function isSpammyText(value) {
  const text = String(value ?? '');
  return SPAM_PATTERNS.some((pattern) => pattern.test(text));
}

export function passesQualityFilter(candidate) {
  const title = String(candidate.title ?? '').trim();
  if (!title || title.length < 25) return false;
  if (title.length > 500) return false;
  if (isSpammyText(title)) return false;

  const likes = Number(candidate.likeCount ?? 0);
  const reposts = Number(candidate.retweetCount ?? 0);
  const trusted = Boolean(candidate.isTrustedAuthor);

  if (candidate.discoverySource === 'search') {
    if (!trusted && likes < 10 && reposts < 3) return false;
    if (!candidate.hasLink && !candidate.hasVideo) return false;
    if (!trusted && !NEWS_SIGNAL_PATTERNS.some((pattern) => pattern.test(title))) return false;
  }

  return true;
}
