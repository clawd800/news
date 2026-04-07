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
```

## Current status

- existing production crawler cron is disabled during development
- this refactor is designed to be wired into a smaller, version-controlled cron prompt
- do not re-enable the crawler until manual review is done

