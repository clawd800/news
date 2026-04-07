import { TRUSTED_USERNAMES } from '../config.mjs';

export function computeEngagementScore(candidate) {
  const likes = Number(candidate.likeCount ?? 0);
  const reposts = Number(candidate.retweetCount ?? 0);
  const replies = Number(candidate.replyCount ?? 0);
  return likes + reposts * 2 + replies * 1.5;
}

export function scoreCandidate(candidate) {
  let score = 0;

  if (TRUSTED_USERNAMES.has(String(candidate.authorUsername ?? '').toLowerCase())) score += 30;
  if (candidate.hasVideo) score += 35;
  if (candidate.hasLink) score += 15;
  if (candidate.discoverySource === 'search') score += 5;

  const engagement = computeEngagementScore(candidate);
  score += Math.min(40, engagement / 3);

  return Math.round(score * 10) / 10;
}
