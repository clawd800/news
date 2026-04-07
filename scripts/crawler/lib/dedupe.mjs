import { jaccardSimilarity, normalizeText, stableSlugSeed } from './normalize.mjs';

export function isLikelyDuplicate(candidate, article) {
  const titleSimilarity = jaccardSimilarity(candidate.title, article.title);
  if (titleSimilarity >= 0.6) {
    return {
      duplicate: true,
      reason: `title-similarity:${titleSimilarity.toFixed(2)}`,
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

