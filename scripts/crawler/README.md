# Open News crawler utilities

This directory contains optional local utilities for finding article candidates,
checking duplicate risk, and validating article media. These tools are not
required for normal article contributions; the public contribution workflow is
documented in `CONTRIBUTING.md`.

## Why

Manual topic exploration can be noisy and repetitive. These scripts make the
repeatable parts easier to run locally:

- high token usage
- long runtimes
- timeout risk
- noisy search loops

- source collection from curated X accounts and constrained search
- duplicate detection against existing articles
- heuristic ranking and filtering

## Commands

```bash
npm test
npm run crawler:scout
node scripts/crawler/brief.mjs
node scripts/crawler/safe-fetch.mjs "https://example.com/post" --match "keyword|phrase"
node scripts/crawler/video-thumbnail.mjs --article-dir news/YYYY-MM-DD/slug
node scripts/crawler/ensure-thumbnail.mjs --article-dir news/YYYY-MM-DD/slug
```

`npm run crawler:scout` uses local source integrations, including an X search
CLI named `bird` when available. Optional API credentials, such as `JINA_API_KEY`,
should be provided through environment variables or an ignored local `.env` file.
Never commit local credentials.

Use `safe-fetch.mjs` for ad hoc source probing. It reports 404s, network errors,
and missing keyword matches as JSON and exits with status 0, so a bad guessed URL
can be treated as data instead of interrupting a broader review.

For thumbnails, use video frames first when the article has `video.mp4`.
Otherwise, create an original article-specific image with your preferred image
generation or design workflow. `ensure-thumbnail.mjs` is validation only. It must
not create gradients, stripes, stock images, or other fallback art.

## Private Automation

Machine-specific prompts, local memory loggers, webhook posters, and deployment
credentials are intentionally excluded from this repository. Keep them in ignored
local files or in a separate private automation repository.
