# Open News crawler refactor

This directory contains the deterministic scouting layer for the Open News cron.

## Why

The original cron prompt let the agent do broad topic exploration itself. That produced:

- high token usage
- long runtimes
- timeout risk
- noisy search loops

This refactor moves the cheap, repeatable parts into local scripts:

- source collection from curated X accounts and constrained search
- duplicate detection against existing articles
- heuristic ranking and filtering

The LLM should then spend tokens only on:

- picking from the shortlist
- fact-checking one candidate
- writing the article
- publishing

## Commands

```bash
npm test
npm run crawler:scout
node scripts/crawler/brief.mjs
node scripts/crawler/safe-fetch.mjs "https://example.com/post" --match "keyword|phrase"
node scripts/crawler/video-thumbnail.mjs --article-dir news/YYYY-MM-DD/slug
node scripts/crawler/ensure-thumbnail.mjs --article-dir news/YYYY-MM-DD/slug
```

Use `safe-fetch.mjs` for ad hoc source probing inside OpenClaw cron runs. It reports
404s, network errors, and missing keyword matches as JSON and exits with status 0, so
a bad guessed URL does not poison an otherwise successful publish run.

For thumbnails, use video frames first when the article has `video.mp4`; otherwise
generate an original article-specific image with Codex's built-in image generation
tool. Do not use any separate external image API path. `ensure-thumbnail.mjs`
is validation only. It must not create gradients, stripes, stock images, or other
fallback art.

## Current status

- existing production crawler cron is disabled during development
- this refactor is designed to be wired into a smaller, version-controlled cron prompt
- do not re-enable the crawler until manual review is done
