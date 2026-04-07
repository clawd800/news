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
];

const NEWS_SIGNAL_PATTERNS = [
  /\bannounce/i,
  /\bannounced/i,
  /\blaunch/i,
  /\blaunched/i,
  /open[ -]?source/i,
  /github trending/i,
  /\bdemo\b/i,
  /\brelease\b/i,
  /\breleased\b/i,
  /\broadmap\b/i,
  /\bmainnet\b/i,
  /\bpaper\b/i,
  /\bresearch\b/i,
  /\bpartnership\b/i,
  /\bacquisition\b/i,
  /\bwallet\b/i,
  /\bexchange\b/i,
  /\bframework\b/i,
  /\bprotocol\b/i,
  /\brobot/i,
  /\brobotics\b/i,
  /\bkernel\b/i,
  /\bgemma\b/i,
  /\bquantum\b/i,
  /\badds\b/i,
  /\badded\b/i,
  /\badds support\b/i,
  /\bstarts\b/i,
  /\bstarted\b/i,
  /\brolls out\b/i,
  /\brolled out\b/i,
  /\bpublishes\b/i,
  /\bpublished\b/i,
  /\bhit\b/i,
  /\bhits\b/i,
  /\bsigns\b/i,
  /\bsigned\b/i,
  /\bsupport\b/i,
];

const ACTION_SIGNAL_PATTERNS = [
  /\bannounce/i,
  /\bannounced/i,
  /\blaunch/i,
  /\blaunched/i,
  /\bdemo\b/i,
  /\brelease\b/i,
  /\breleased/i,
  /\broadmap\b/i,
  /\bmainnet\b/i,
  /\bopen[ -]?source\b/i,
  /\badds\b/i,
  /\badded\b/i,
  /\bstarts\b/i,
  /\bstarted\b/i,
  /\brolls out\b/i,
  /\brolled out\b/i,
  /\bpublishes\b/i,
  /\bpublished\b/i,
  /\bhit\b/i,
  /\bhits\b/i,
  /\bsigns\b/i,
  /\bsigned\b/i,
  /\bsupport\b/i,
];

const EVIDENCE_SIGNAL_PATTERNS = [
  /\bdune\b/i,
  /\bvisa\b/i,
  /\bmonthly\b/i,
  /\bvolume\b/i,
  /\bmerchant(s)?\b/i,
  /\blocalized stablecoin(s)?\b/i,
  /\bprocess(?:es|ing|ed)?\b/i,
  /\bcheckout\b/i,
  /\bshopify\b/i,
];

const NARRATIVE_PATTERNS = [
  /^.+\bis for\b/i,
  /^why\b/i,
  /^how\b/i,
  /^the future of\b/i,
  /^we believe\b/i,
  /^crypto is\b/i,
  /^ai is\b/i,
];

const MARKETING_PATTERNS = [
  /watch us/i,
  /start building/i,
  /build your own/i,
  /less than \d+ minutes/i,
  /vibe coded/i,
  /step-by-step/i,
];

export function getSignalText(candidate) {
  return String(candidate.signalText || candidate.title || '').trim();
}

export function isSpammyText(value) {
  const text = String(value ?? '');
  return SPAM_PATTERNS.some((pattern) => pattern.test(text));
}

export function hasNewsSignal(candidate) {
  const text = getSignalText(candidate);
  return NEWS_SIGNAL_PATTERNS.some((pattern) => pattern.test(text));
}

export function hasEvidenceSignal(candidate) {
  const text = getSignalText(candidate);
  return EVIDENCE_SIGNAL_PATTERNS.some((pattern) => pattern.test(text));
}

export function hasActionSignal(candidate) {
  const text = getSignalText(candidate);
  return ACTION_SIGNAL_PATTERNS.some((pattern) => pattern.test(text));
}

export function isNarrativePriorityPost(candidate) {
  if (candidate.discoverySource !== 'priority-account') return false;
  const text = String(candidate.title ?? '').trim();
  return NARRATIVE_PATTERNS.some((pattern) => pattern.test(text));
}

export function isMarketingStylePost(candidate) {
  const text = getSignalText(candidate);
  return MARKETING_PATTERNS.some((pattern) => pattern.test(text));
}

export function isFreshCandidate(candidate, now = new Date(), maxAgeHours = 72) {
  if (!candidate?.createdAt) return true;
  const createdAt = new Date(candidate.createdAt);
  if (Number.isNaN(createdAt.getTime())) return true;
  const ageMs = now.getTime() - createdAt.getTime();
  return ageMs <= maxAgeHours * 60 * 60 * 1000;
}

export function passesQualityFilter(candidate, { now = new Date() } = {}) {
  const title = String(candidate.title ?? '').trim();
  if (!title || title.length < 25) return false;
  if (title.length > 500) return false;
  if (isSpammyText(getSignalText(candidate))) return false;
  if (isMarketingStylePost(candidate)) return false;
  if (!isFreshCandidate(candidate, now)) return false;

  const likes = Number(candidate.likeCount ?? 0);
  const reposts = Number(candidate.retweetCount ?? 0);
  const trusted = Boolean(candidate.isTrustedAuthor);
  const newsSignal = hasNewsSignal(candidate);
  const evidenceSignal = hasEvidenceSignal(candidate);
  const actionSignal = hasActionSignal(candidate);

  if (candidate.discoverySource === 'search') {
    if (!trusted) return false;
    if (!candidate.hasLink && !candidate.hasVideo) return false;
    if (!newsSignal) return false;
    if (!actionSignal) return false;
    if (likes < 25 && reposts < 5) return false;
  }

  if (candidate.discoverySource === 'priority-account') {
    if (!newsSignal && !candidate.hasVideo && !evidenceSignal) return false;
    if (isNarrativePriorityPost(candidate) && !candidate.hasQuotedTweet) return false;
    if (isNarrativePriorityPost(candidate) && !actionSignal) return false;
  }

  return true;
}
