import { TRUSTED_USERNAMES } from '../config.mjs';

function hasPattern(candidate, pattern) {
  return pattern.test(String(candidate.signalText || candidate.title || ''));
}

export function computeEngagementScore(candidate) {
  const likes = Number(candidate.likeCount ?? 0);
  const reposts = Number(candidate.retweetCount ?? 0);
  const replies = Number(candidate.replyCount ?? 0);
  return likes + reposts * 2 + replies * 1.5;
}

export function scoreCandidate(candidate) {
  let score = 0;

  if (TRUSTED_USERNAMES.has(String(candidate.authorUsername ?? '').toLowerCase())) score += 30;
  if (candidate.discoverySource === 'github-release') score += 20;
  if (candidate.discoverySource === 'official-blog') score += 18;
  if (candidate.hasVideo) score += 35;
  if (candidate.hasLink) score += 15;
  if (candidate.discoverySource === 'search') score += 5;

  const engagement = computeEngagementScore(candidate);
  score += Math.min(40, engagement / 3);

  if (hasPattern(candidate, /\blaunch|\blaunched|\brelease|\breleased|\bmainnet|\broadmap/i)) score += 12;
  if (hasPattern(candidate, /\bdemo|\bvideo/i)) score += 8;
  if (hasPattern(candidate, /fellowship|resources|weekly recap|roundup|highlights/i)) score -= 18;

  return Math.round(score * 10) / 10;
}
