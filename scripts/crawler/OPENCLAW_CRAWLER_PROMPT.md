Open News crawler v2, budgeted workflow.

## Goal
Publish at most ONE article to news.800.works if a genuinely worthy topic exists.

## Workflow
1. Run the scout/brief pipeline first and trust its shortlist.
2. Pick the best candidate only if it clears the quality bar.
3. Verify the facts and primary sources.
4. Write, build, publish, log, and send Discord webhook.

## Hard constraints
- Do NOT do broad topic exploration yourself before checking the scout shortlist.
- Do NOT use browser or screenshots.
- Do NOT publish more than 1 article.
- If the shortlist is weak, you may stop with `No worthy topics found this hour.`
- Never invent reasons or claim a rule blocked a step unless this prompt explicitly says so.

## Step 1: Get shortlist
From `~/clawd/projects/news`, run:
- `node scripts/crawler/brief.mjs`

Use the generated shortlist as the primary candidate pool.

## Step 2: Choose topic or stop
Choose the strongest candidate that is:
- new, specific, and verifiable
- AI, agents, robotics, developer infra, Ethereum/Base, stablecoins, or notable Web3 infra
- not just marketing fluff, event promo, or generic partnership filler

If nothing clears the bar, output exactly:
- `No worthy topics found this hour.`

## Step 3: Duplicate + fact check
Before writing:
- check for overlap with existing stories in `news/`
- verify key claims from at least 2 sources when possible
- prefer primary sources
- if claims conflict, use the most conservative verified version

## Step 4: Write article
Follow `~/clawd/projects/news/CONTRIBUTING.md`.
Requirements:
- 200-300 words
- factual, not hypey
- frontmatter includes: title, date, author, tags, summary, thumbnail, sources
- sources stay in frontmatter only
- slug must be descriptive lowercase hyphenated

## Step 5: Build and publish
From `~/clawd/projects/news`:
- `git pull origin main`
- ensure thumbnail exists and is non-empty
- `npx @11ty/eleventy`
- `git add -A`
- `git commit -m "Add article: [slug]"`
- `git push origin main`

If build/publish fails, report the real failure and stop.

## Step 6: Log locally
After successful publish, ALWAYS log both:

### Daily memory log
- `mkdir -p ~/clawd/memory`
- `touch ~/clawd/memory/YYYY-MM-DD.md`
- append a one-line note about the published article

### Posts log
Append to `~/clawd/memory/posts-log.md`:
- `[YYYY-MM-DD HH:MM] NEWS | article | https://news.800.works/news/YYYY-MM-DD/slug/ | topic summary`

If local logging fails after publish, say so honestly in the report, but do not pretend publishing failed.

## Step 7: Discord webhook (Hunt Town #trends)
After successful publish, ALWAYS attempt the Discord webhook.

Use:
- `WEBHOOK_URL=$(grep DISCORD_WEBHOOK_URL ~/clawd/projects/news/.env | cut -d= -f2)`
- `ARTICLE_DIR=~/clawd/projects/news/news/YYYY-MM-DD/slug`

Attachment rules:
- if `video.mp4` exists, attach that
- otherwise attach `thumbnail.png`

Payload rules:
- content format: `# [title]` then summary then `[@author](https://x.com/author) | [Source](ARTICLE_URL)`
- set `flags: 4` to suppress embeds
- do not set custom username or avatar_url

If the Discord webhook fails, report:
- `Discord: ❌ <real reason>`

If it succeeds, report:
- `Discord: ✅`

Never say Discord was skipped due to a "task rule" unless this prompt explicitly says to skip it. It does not.

## Final report format
If published:
- `Published: [title]`
- `URL: https://news.800.works/news/YYYY-MM-DD/slug/`
- `Sources: [list primary sources]`
- `Discord: ✅` or `Discord: ❌ <real reason>`
- optionally add `Log: ❌ <real reason>` if publish succeeded but local logging failed

If nothing worthy:
- `No worthy topics found this hour.`
