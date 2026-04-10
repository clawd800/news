import { jaccardSimilarity, normalizeText, stableSlugSeed, uniqueTokens } from './normalize.mjs';

function normalizeUrl(rawUrl) {
  try {
    const url = new URL(rawUrl);
    url.hash = '';
    for (const key of [...url.searchParams.keys()]) {
      if (key.toLowerCase().startsWith('utm_')) url.searchParams.delete(key);
    }
    const normalizedPath = url.pathname.replace(/\/+$/, '') || '/';
    return `${url.origin.toLowerCase()}${normalizedPath.toLowerCase()}`;
  } catch {
    return '';
  }
}

function candidateText(candidate) {
  return [
    candidate.title,
    candidate.summary,
    candidate.description,
    candidate.signalText,
    candidate.discoveryQuery,
  ].filter(Boolean).join(' ');
}

function toMeta(candidate) {
  const text = candidateText(candidate);
  const normalized = normalizeText(text);
  const slugSeed = stableSlugSeed(candidate.title || text);
  const tokens = uniqueTokens(normalized);
  const urlKey = normalizeUrl(candidate.url || candidate.verifiedSourceUrl || candidate.primarySourceUrl || '');
  const topicKey = slugSeed || stableSlugSeed(normalized);
  return {
    ...candidate,
    normalized,
    slugSeed,
    tokens,
    urlKey,
    topicKey,
  };
}

function similarity(a, b) {
  const titleMatch = Boolean(a.slugSeed && b.slugSeed && a.slugSeed === b.slugSeed);
  const urlMatch = Boolean(a.urlKey && b.urlKey && a.urlKey === b.urlKey);
  const tokenMatch = jaccardSimilarity(a.tokens, b.tokens) >= 0.72;
  return titleMatch || urlMatch || tokenMatch;
}

function articleMeta(article) {
  const text = [article.title, article.summary, article.slug].filter(Boolean).join(' ');
  return {
    slugSeed: stableSlugSeed(article.slug || article.title || text),
    tokens: uniqueTokens(normalizeText(text)),
    urlKey: normalizeUrl(article.url || ''),
  };
}

export function annotateDuplicates(rawCandidates, articleIndex = []) {
  const existing = articleIndex.map(articleMeta);
  const seen = [];

  return rawCandidates.map((candidate) => {
    const meta = toMeta(candidate);

    let duplicate = false;
    let duplicateReason = null;
    let duplicateOf = null;
    let topicKey = meta.topicKey;

    for (const article of existing) {
      if (similarity(meta, article)) {
        duplicate = true;
        duplicateReason = 'existing-article';
        duplicateOf = article.urlKey || article.slugSeed || null;
        break;
      }
    }

    if (!duplicate) {
      for (const prior of seen) {
        if (similarity(meta, prior)) {
          duplicate = true;
          duplicateReason = 'batch-duplicate';
          duplicateOf = prior.urlKey || prior.slugSeed || null;
          topicKey = prior.topicKey || topicKey;
          break;
        }

        if (!topicKey && prior.topicKey && jaccardSimilarity(meta.tokens, prior.tokens) >= 0.58) {
          topicKey = prior.topicKey;
        }
      }
    }

    const annotated = {
      ...candidate,
      slugSeed: meta.slugSeed,
      topicKey,
      duplicate,
      duplicateReason,
      duplicateOf,
    };

    if (!duplicate) seen.push({ ...meta, topicKey });
    return annotated;
  });
}
