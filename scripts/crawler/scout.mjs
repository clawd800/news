#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  GITHUB_RELEASE_REPOS,
  JINA_MEDIA_SEARCHES,
  PRIORITY_X_ACCOUNTS,
  RSS_FEEDS,
  SEARCH_LIMITS,
  SEARCH_QUERIES,
  TRUSTED_USERNAMES,
} from './config.mjs';
import { loadArticleIndex, loadDraftIndex } from './lib/article-index.mjs';
import { extractBirdJson, hasUsefulMedia, isReply, isRetweet } from './lib/bird-json.mjs';
import { fetchGitHubReleaseCandidates } from './lib/github-releases.mjs';
import { fetchMediaSearchCandidates } from './lib/media-search.mjs';
import { fetchRssCandidates } from './lib/rss.mjs';
import { isSkippableSourceError } from './lib/source-errors.mjs';
import { rankCandidates } from './lib/scout-engine.mjs';
import { verifyCandidateSources } from './lib/source-verify.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..', '..');
const newsRoot = path.join(projectRoot, 'news');

function execBird(args) {
  try {
    return execFileSync('bird', args, { cwd: projectRoot, encoding: 'utf8' });
  } catch (error) {
    if (isSkippableSourceError(error)) {
      return '[]';
    }
    throw error;
  }
}

function toCandidate(tweet, discoverySource, query) {
  const signalText = [
    tweet.text,
    tweet.quotedTweet?.text,
    tweet.noteTweet?.text,
  ].filter(Boolean).join('\n\n');

  return {
    id: tweet.id,
    title: tweet.text,
    signalText,
    url: tweet.url ?? `https://x.com/${tweet.author?.username ?? 'i'}/status/${tweet.id}`,
    createdAt: tweet.createdAt,
    replyCount: tweet.replyCount ?? 0,
    retweetCount: tweet.retweetCount ?? 0,
    likeCount: tweet.likeCount ?? 0,
    authorUsername: tweet.author?.username ?? '',
    authorName: tweet.author?.name ?? '',
    quotedAuthorUsername: tweet.quotedTweet?.author?.username ?? '',
    hasQuotedTweet: Boolean(tweet.quotedTweet),
    isTrustedAuthor: true,
    discoverySource,
    discoveryQuery: query,
    hasLink: hasUsefulMedia(tweet),
    hasVideo: /video/i.test(JSON.stringify(tweet)),
  };
}

function selectRotatingWindow(items, count) {
  if (items.length <= count) return [...items];

  const fourHourBucket = Math.floor(Date.now() / (4 * 60 * 60 * 1000));
  const start = fourHourBucket % items.length;
  const rotated = items.slice(start).concat(items.slice(0, start));
  return rotated.slice(0, count);
}

function fetchPriorityAccountCandidates() {
  const selected = selectRotatingWindow(PRIORITY_X_ACCOUNTS, SEARCH_LIMITS.accountsPerRun);
  const results = [];

  for (const username of selected) {
    const raw = execBird(['user-tweets', username, '-n', String(SEARCH_LIMITS.tweetsPerAccount), '--json']);
    const tweets = extractBirdJson(raw);
    for (const tweet of tweets) {
      if (isRetweet(tweet) || isReply(tweet)) continue;
      results.push(toCandidate(tweet, 'priority-account', username));
    }
  }

  return results;
}

function fetchSearchCandidates() {
  const selected = SEARCH_QUERIES.slice(0, SEARCH_LIMITS.searchQueriesPerRun);
  const results = [];

  for (const query of selected) {
    const raw = execBird(['search', query, '-n', String(SEARCH_LIMITS.tweetsPerQuery), '--json']);
    const tweets = extractBirdJson(raw);
    for (const tweet of tweets) {
      if (isRetweet(tweet) || isReply(tweet)) continue;
      const authorUsername = String(tweet.author?.username ?? '').toLowerCase();
      results.push({
        ...toCandidate(tweet, 'search', query),
        isTrustedAuthor: TRUSTED_USERNAMES.has(authorUsername),
      });
    }
  }

  return results;
}

async function main() {
  const articleIndex = [
    ...loadArticleIndex(newsRoot),
    ...loadDraftIndex(path.join(projectRoot, 'drafts')),
  ];
  const [githubCandidates, rssCandidates] = await Promise.all([
    fetchGitHubReleaseCandidates(GITHUB_RELEASE_REPOS).catch(() => []),
    fetchRssCandidates(RSS_FEEDS).catch(() => []),
  ]);
  const mediaCandidates = await fetchMediaSearchCandidates(JINA_MEDIA_SEARCHES).catch(() => []);
  const candidates = [
    ...fetchPriorityAccountCandidates(),
    ...fetchSearchCandidates(),
    ...githubCandidates,
    ...rssCandidates,
    ...mediaCandidates,
  ];

  const verifiedCandidates = await verifyCandidateSources(candidates);

  const ranked = rankCandidates(verifiedCandidates, articleIndex, SEARCH_LIMITS.maxCandidates);
  const payload = {
    generatedAt: new Date().toISOString(),
    maxCandidates: SEARCH_LIMITS.maxCandidates,
    scannedSources: {
      priorityAccounts: selectRotatingWindow(PRIORITY_X_ACCOUNTS, SEARCH_LIMITS.accountsPerRun),
      searchQueries: SEARCH_QUERIES.slice(0, SEARCH_LIMITS.searchQueriesPerRun),
      jinaSearches: JINA_MEDIA_SEARCHES.map((entry) => entry.name),
    },
    candidates: ranked,
  };

  if (process.argv.includes('--pretty')) {
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  console.log(JSON.stringify(payload));
}

await main();
