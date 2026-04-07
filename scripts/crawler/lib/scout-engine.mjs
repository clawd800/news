import { annotateDuplicates } from './dedupe.mjs';
import { passesQualityFilter } from './quality.mjs';
import { scoreCandidate } from './score.mjs';

export function rankCandidates(rawCandidates, articleIndex, maxCandidates = 5) {
  const deduped = annotateDuplicates(rawCandidates, articleIndex)
    .filter((candidate) => passesQualityFilter(candidate))
    .filter((candidate) => !candidate.duplicate)
    .map((candidate) => ({
      ...candidate,
      score: scoreCandidate(candidate),
    }))
    .sort((left, right) => right.score - left.score);

  return deduped.slice(0, maxCandidates);
}
