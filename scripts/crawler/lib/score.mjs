import { TRUSTED_USERNAMES } from '../config.mjs';

const HIGH_SIGNAL_PATTERNS = [
  /\bmainnet\b/i,
  /\bopen source\b/i,
  /\bopen-sourced\b/i,
  /\blaunch(?:ed|ing)?\b/i,
  /\brelease(?:d)?\b/i,
  /\brollout\b/i,
  /\bacquisition\b/i,
  /\bfunding\b/i,
  /\bwhitepaper\b/i,
  /\bdeveloper preview\b/i,
  /\bapi\b/i,
  /\bmodel\b/i,
  /\brobotics?\b/i,
];

const PROMO_PATTERNS = [
  /\bwaitlist\b/i,
  /\bsign up\b/i,
  /\bregister today\b/i,
  /\bsave your spot\b/i,
  /\bjoin us at\b/i,
  /\bvisit our booth\b/i,
  /\bget tickets?\b/i,
  /\bsee you at\b/i,
  /\blimited time\b/i,
  /\bbook now\b/i,
  /\bapply now\b/i,
];

const PATCH_PATTERNS = [
  /\bv\d+\.\d+\.\d+\b/i,
  /\b\d+\.\d+\.\d+\b/i,
  /\bpatch(?:ed)?\b/i,
  /\bbugfix(?:es)?\b/i,
  /\bhotfix\b/i,
  /\bmaintenance release\b/i,
  /\bchangelog\b/i,
  /\bminor fixes\b/i,
  /\bpoint release\b/i,
];

function candidateText(candidate) {
  return [
    candidate.title,
    candidate.summary,
    candidate.description,
    candidate.signalText,
    candidate.discoveryQuery,
    candidate.authorUsername,
    candidate.authorName,
  ].filter(Boolean).join(' ');
}

function hasPattern(candidate, pattern) {
  return pattern.test(candidateText(candidate));
}

function getDiscoveryKind(candidate) {
  return String(candidate.discoverySource || candidate.sourceType || '').toLowerCase();
}

function isTrusted(candidate) {
  const username = String(candidate.authorUsername || '').toLowerCase();
  return Boolean(username) && TRUSTED_USERNAMES.has(username);
}

function hasPatchSignal(candidate) {
  const kind = getDiscoveryKind(candidate);
  const text = candidateText(candidate);
  const looksLikeVersionedRelease = PATCH_PATTERNS.some((pattern) => pattern.test(text));
  if (!looksLikeVersionedRelease) return false;
  return kind === 'github-release' || /\bpatch\b|\bfix\b|\bbugfix\b|\bhotfix\b|\bchangelog\b/i.test(text);
}

function hasCorroboration(candidate) {
  const kind = getDiscoveryKind(candidate);
  const hasVerification = Boolean(candidate.verifiedSourceUrl || candidate.sourceVerified);
  const isMedia = kind === 'media-rss' || kind === 'media-search';
  const isOfficial = kind === 'official-blog' || kind === 'github-release';
  return hasVerification || (isMedia && Boolean(candidate.hasLink)) || (isOfficial && Boolean(candidate.url));
}

export function scoreCandidate(candidate) {
  const kind = getDiscoveryKind(candidate);
  let score = 0;

  if (isTrusted(candidate)) score += 24;
  if (kind === 'official-blog') score += 24;
  if (kind === 'github-release') score += 12;
  if (kind === 'media-rss') score += 16;
  if (kind === 'media-search') score += 14;
  if (candidate.hasLink) score += 6;
  if (candidate.hasVideo) score += 4;
  if (candidate.hasQuotedTweet) score += 3;
  if (candidate.sourceVerified || candidate.verifiedSourceUrl) score += 12;
  if (hasCorroboration(candidate)) score += 12;
  if (HIGH_SIGNAL_PATTERNS.some((pattern) => hasPattern(candidate, pattern))) score += 10;
  if (PROMO_PATTERNS.some((pattern) => hasPattern(candidate, pattern))) score -= 18;
  if (hasPatchSignal(candidate)) score -= 36;

  return score;
}
