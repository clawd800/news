import { annotateDuplicates } from './dedupe.mjs';
import { passesQualityFilter } from './quality.mjs';
import { scoreCandidate } from './score.mjs';

function accountKey(candidate) {
  return String(candidate.authorUsername || candidate.authorName || '').trim().toLowerCase();
}

function topicKey(candidate) {
  return String(candidate.topicKey || candidate.slugSeed || '').trim().toLowerCase();
}

export function rankCandidates(rawCandidates, articleIndex = [], limit = 5) {
  const annotated = annotateDuplicates(rawCandidates, articleIndex);

  const ranked = annotated
    .filter((candidate) => passesQualityFilter(candidate))
    .map((candidate) => ({ ...candidate, score: scoreCandidate(candidate) }))
    .filter((candidate) => !candidate.duplicate)
    .sort((a, b) => b.score - a.score);

  const results = [];
  const accountCounts = new Map();
  const seenTopics = new Set();

  for (const candidate of ranked) {
    const author = accountKey(candidate);
    const topic = topicKey(candidate);

    if (author && (accountCounts.get(author) || 0) >= 2) continue;
    if (topic && seenTopics.has(topic)) continue;

    results.push(candidate);
    if (author) accountCounts.set(author, (accountCounts.get(author) || 0) + 1);
    if (topic) seenTopics.add(topic);

    if (results.length >= limit) break;
  }

  return results;
}
