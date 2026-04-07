import { jaccardSimilarity, normalizeText, stableSlugSeed, uniqueTokens } from './normalize.mjs';

function sharedTokenCount(leftValue, rightValue) {
  const left = new Set(uniqueTokens(leftValue));
  const right = new Set(uniqueTokens(rightValue));
  let shared = 0;

  for (const token of left) {
    if (right.has(token)) shared += 1;
  }

  return shared;
}

export function isLikelyDuplicate(candidate, article) {
  const titleSimilarity = jaccardSimilarity(candidate.title, article.title);
  const candidateEntityText = [candidate.authorName, candidate.title].filter(Boolean).join(' ');
  if (titleSimilarity >= 0.6) {
    return {
      duplicate: true,
      reason: `title-similarity:${titleSimilarity.toFixed(2)}`,
      matchedTitle: article.title,
    };
  }

  const sharedTitleTokens = sharedTokenCount(candidateEntityText || candidate.title, article.title);
  if (sharedTitleTokens >= 4) {
    return {
      duplicate: true,
      reason: `shared-title-tokens:${sharedTitleTokens}`,
      matchedTitle: article.title,
    };
  }

  const candidateSlugSeed = stableSlugSeed(candidate.title);
  const articleSlugSeed = stableSlugSeed(`${article.title} ${article.slug}`);
  if (candidateSlugSeed && candidateSlugSeed === articleSlugSeed) {
    return {
      duplicate: true,
      reason: 'slug-seed-match',
      matchedTitle: article.title,
    };
  }

  const candidateUrl = normalizeText(candidate.url);
  if (candidateUrl && article.sources.some((source) => normalizeText(source) === candidateUrl)) {
    return {
      duplicate: true,
      reason: 'source-url-match',
      matchedTitle: article.title,
    };
  }

  return { duplicate: false };
}

export function annotateDuplicates(candidates, articleIndex) {
  return candidates.map((candidate) => {
    for (const article of articleIndex) {
      const result = isLikelyDuplicate(candidate, article);
      if (result.duplicate) {
        return {
          ...candidate,
          duplicate: true,
          duplicateReason: result.reason,
          duplicateTitle: result.matchedTitle,
        };
      }
    }

    return {
      ...candidate,
      duplicate: false,
      duplicateReason: null,
      duplicateTitle: null,
    };
  });
}
