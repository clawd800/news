const SPAM_PATTERNS = [
  /hours left/i,
  /join now/i,
  /bonus/i,
  /testimonials/i,
  /annual/i,
  /your move/i,
  /free\s*\$\d+/i,
  /bonus\s*\$\d+/i,
  /drop your product url/i,
  /follow for more/i,
  /dm me/i,
  /waitlist/i,
  /sign up/i,
  /save your spot/i,
  /register today/i,
  /join us at/i,
  /see you at/i,
  /visit our booth/i,
  /get tickets?/i,
];

const IN_SCOPE_PATTERNS = [
  /\bai\b/i,
  /\bagent(?:ic|s)?\b/i,
  /\bllm\b/i,
  /\bmodel(?:s)?\b/i,
  /\binference\b/i,
  /\brobot(?:ics)?\b/i,
  /\bgemma\b/i,
  /\bopen source\b/i,
  /\bdeveloper(?:s)?\b/i,
  /\bapi\b/i,
  /\bbase\b/i,
  /\beth(?:ereum)?\b/i,
  /\bcrypto\b/i,
  /\bweb3\b/i,
  /\bonchain\b/i,
  /\bstablecoin\b/i,
  /\btoken(?:ization)?\b/i,
  /\bwallet\b/i,
  /\bprotocol\b/i,
  /\bdefi\b/i,
  /\bmainnet\b/i,
  /\brollup\b/i,
];

const OFF_TOPIC_PATTERNS = [
  /youtube premium/i,
  /youtube music/i,
  /subscription price increase/i,
  /ditch windows/i,
  /windows\b/i,
  /cloud gaming/i,
  /samson: a tyndalston story/i,
  /exclusive .* short story/i,
];

const LOW_SIGNAL_MARKET_PATTERNS = [
  /performance update/i,
  /leading index lower/i,
  /index lower/i,
  /token drops? \d/i,
  /price update/i,
  /record lows/i,
];

function candidateText(candidate) {
  return [
    candidate.title,
    candidate.summary,
    candidate.description,
    candidate.signalText,
    candidate.discoveryQuery,
    candidate.authorName,
    candidate.authorUsername,
  ].filter(Boolean).join(' ');
}

function hasAnyPattern(text, patterns) {
  return patterns.some((pattern) => pattern.test(text));
}

export function passesQualityFilter(candidate) {
  const text = candidateText(candidate);
  const normalized = String(text || '').trim();

  if (!normalized || normalized.length < 24) return false;
  if (hasAnyPattern(normalized, SPAM_PATTERNS)) return false;
  if (hasAnyPattern(normalized, OFF_TOPIC_PATTERNS)) return false;
  if (!hasAnyPattern(normalized, IN_SCOPE_PATTERNS)) return false;
  if (hasAnyPattern(normalized, LOW_SIGNAL_MARKET_PATTERNS)) return false;

  return true;
}
