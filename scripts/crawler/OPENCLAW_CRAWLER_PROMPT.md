Open News crawler v8, budgeted workflow.

## Goal
Publish at most ONE article to news.800.works if a genuinely worthy topic exists.

## Critical Repo Path
Use exactly this repository for every repo command:
- `/Users/clawd/Projects/news-repo`

Do not use `/Users/clawd/Projects/news`.
Do not use `/Users/clawd/clawd/projects/news`.
The active repo already has `.env` linked for Discord.

## Cron Failure Discipline
OpenClaw cron marks the whole run failed if any tool call fails, even if you later recover and publish successfully.

Avoid exploratory commands that can exit nonzero. In particular:
- Do not use `curl -f` or `curl --fail` for optional source checks.
- Do not use raw `grep` or `rg` for optional keyword checks unless the command is made non-failing.
- Do not fetch guessed URLs with a command that will exit nonzero on 404.
- Do not run raw `ffmpeg`, ImageMagick, `sips`, browser screenshots, or SVG-to-PNG conversion commands for thumbnails.
- If an article has a video, use `node scripts/crawler/video-thumbnail.mjs` instead of calling `ffmpeg` directly. It reports optional video extraction failures as JSON with exit 0.
- Do not hand-roll shell wrappers for optional failures. In zsh, names like `status` are special/read-only and can make the wrapper itself fail.

For ad hoc source URL checks and keyword matching, use the safe helper:
- `node scripts/crawler/safe-fetch.mjs "https://example.com/post" --match "keyword|phrase"`

That helper reports HTTP status, network errors, and regex matches as JSON while exiting 0. Treat `httpOk: false` or `matched: false` as data, discard that source, and continue with another verified source. Only let commands fail when the failure should genuinely stop the publish, such as build, commit, or push failure.

## Workflow
1. Run the scout/brief pipeline first and trust its shortlist.
2. Pick the best candidate only if it clears the quality bar.
3. Verify facts and primary sources using non-failing probes for optional sources.
4. Write, build, publish, log, and send Discord webhook.

## Hard Constraints
- Do NOT do broad topic exploration yourself before checking the scout shortlist.
- Do NOT use browser or screenshots.
- Do NOT publish more than 1 article.
- If the shortlist is weak, you may stop with `No worthy topics found this hour.`
- Never invent reasons or claim a rule blocked a step unless this prompt explicitly says so.

## Step 1: Get Shortlist
From `/Users/clawd/Projects/news-repo`, run:
- `node scripts/crawler/brief.mjs`

Use the generated shortlist as the primary candidate pool.

## Step 2: Choose Topic Or Stop
Choose the strongest candidate that is:
- new, specific, and verifiable
- AI, agents, robotics, developer infra, Ethereum/Base, stablecoins, or notable Web3 infra
- not just marketing fluff, event promo, or generic partnership filler

If nothing clears the bar, output exactly:
- `No worthy topics found this hour.`

## Step 3: Duplicate And Fact Check
Before writing:
- run `git pull origin main`
- check for overlap with existing stories in `news/`
- verify key claims from at least 2 sources when possible
- prefer primary sources
- use `safe-fetch.mjs` for guessed or optional URLs
- if claims conflict, use the most conservative verified version

## Step 4: Write Article
Follow `/Users/clawd/Projects/news-repo/CONTRIBUTING.md`.
Requirements:
- 200-300 words
- factual, not hypey
- frontmatter includes: title, date, author, tags, summary, thumbnail, sources
- sources stay in frontmatter only
- slug must be descriptive lowercase hyphenated

## Step 4.5: Real Thumbnail
Every article needs a real `thumbnail.png` for the site and Discord helper.

Create the thumbnail before publishing:
- If the article includes a relevant `video.mp4`, create `thumbnail.png` from the video first:
  - `node scripts/crawler/video-thumbnail.mjs --article-dir news/YYYY-MM-DD/slug`
  - If it reports `ok: true`, use that `thumbnail.png`.
  - If it reports `ok: false`, continue to generated imagery. Do not treat optional video extraction failure as a publish failure by itself.
- Otherwise, or if video extraction fails, use the image generation tool to create an original news-style editorial image for the specific article topic, then save it to `news/YYYY-MM-DD/slug/thumbnail.png`.
- Do not fetch, copy, or reuse official/source-provided/static web images.
- Do not publish abstract color gradients, striped placeholders, screenshots, or unrelated stock-like images.

After the real thumbnail is in place, validate it with:
- `node scripts/crawler/ensure-thumbnail.mjs --article-dir news/YYYY-MM-DD/slug --title "Article title"`

Do not attempt media conversion yourself except through `video-thumbnail.mjs` for real videos. Do not run raw `ffmpeg`, ImageMagick, `sips`, screenshot tooling, or SVG conversion. `ensure-thumbnail.mjs` only validates that a thumbnail exists; it cannot generate placeholder art. If a real thumbnail cannot be created or generated, stop before publishing and report the thumbnail failure.

## Step 5: Build And Publish
From `/Users/clawd/Projects/news-repo`:
- ensure thumbnail exists and is non-empty
- `npx @11ty/eleventy`
- inspect `git status --short` and only add the intended new article files
- `git commit -m "Add article: [slug]"`
- `git push origin main`

If build/publish fails, report the real failure and stop.

## Step 6: Log Locally
After successful publish, ALWAYS log both:

### Daily memory log
- `mkdir -p ~/clawd/memory`
- `touch ~/clawd/memory/YYYY-MM-DD.md`
- append a one-line note about the published article

### Posts log
Append to `~/clawd/memory/posts-log.md`:
- `[YYYY-MM-DD HH:MM] NEWS | article | https://news.800.works/news/YYYY-MM-DD/slug/ | topic summary`

If local logging fails after publish, say so honestly in the report, but do not pretend publishing failed.

## Step 7: Discord Webhook
After successful publish, ALWAYS attempt the Discord webhook.

Use the helper script from `/Users/clawd/Projects/news-repo` with only date and slug:
- `node scripts/crawler/post-discord-safe.mjs --date YYYY-MM-DD --slug slug`

The safe helper reads title, summary, and author from article frontmatter, auto-loads `DISCORD_WEBHOOK_URL` from `.env`, prints `Discord: ✅` or `Discord: ❌ <real reason>`, and always exits 0 so webhook trouble can be reported without marking the whole cron run failed. Do not pass title or summary as inline shell arguments, especially if they contain dollar amounts such as `$816K`; shell expansion can mangle public Discord text.

If the Discord webhook fails, report:
- `Discord: ❌ <real reason>`

If it succeeds, report:
- `Discord: ✅`

Never say Discord was skipped due to a "task rule" unless this prompt explicitly says to skip it. It does not.

## Final Report Format
If published:
- `Published: [title]`
- `URL: https://news.800.works/news/YYYY-MM-DD/slug/`
- `Sources: [list primary sources]`
- `Discord: ✅` or `Discord: ❌ <real reason>`
- optionally add `Log: ❌ <real reason>` if publish succeeded but local logging failed

If nothing worthy:
- `No worthy topics found this hour.`
