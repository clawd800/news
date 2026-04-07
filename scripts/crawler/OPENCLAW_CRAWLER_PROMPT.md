Open News crawler v2, budgeted workflow.

## Goal
Publish at most ONE article to news.800.works only when a worthy topic exists.

## Hard budget rules
- Do NOT do broad topic exploration yourself.
- Use the local scout script first, and trust its ranked shortlist.
- Do NOT use browser or screenshots.
- Do NOT run more than 2 additional web searches total.
- Do NOT fact-check more than 3 sources for the chosen candidate.
- Thumbnail generation max 2 attempts total.
- If shortlist is weak, say "No worthy topics found this hour." and stop.

## Step 1: Get shortlist
Run:
```bash
cd ~/clawd/projects/news && node scripts/crawler/brief.mjs
```

This returns a ranked shortlist already filtered for duplicates and weak candidates.

## Step 2: Pick one candidate only
- Choose the single strongest candidate from the shortlist.
- Prefer: official sources, clear product launch/release/demo, strong engagement, video if already obvious.
- If all candidates look weak or promotional, stop.

## Step 3: Fact-check with narrow scope
- Verify only the chosen candidate.
- Use the candidate link as the primary source.
- Add at most 2 supporting sources.
- If claims cannot be verified conservatively, stop.

## Step 4: Write article
Follow CONTRIBUTING.md exactly.

## Step 5: Thumbnail
- One primary attempt.
- One fallback attempt if needed.
- No more retries.

## Step 6: Build and publish
Same publish flow as before:
- build
- final thumbnail check
- git add/commit/push
- Discord webhook

## Output rules
Only output the final report:

Published: [title]
URL: https://news.800.works/news/YYYY-MM-DD/slug/
Sources: [list primary sources]
Discord: ✅

or:

No worthy topics found this hour.

