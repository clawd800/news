---
title: "Vercel Adds Plain-Language Command Search for Coding Agents"
date: 2026-11-23T16:00:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-tools", "vercel"]
summary: "Vercel CLI can now find commands and API request templates from task descriptions, with optional JSON output and inline help."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: Agents can now find Vercel CLI commands by describing the task"
    url: "https://vercel.com/changelog/agents-can-now-find-vercel-cli-commands-by-describing-the-task"
  - title: "Vercel documentation: vercel rollback"
    url: "https://vercel.com/docs/cli/rollback"
---

Vercel introduced **plain-language command discovery** for coding agents on November 19. The new `vercel help search` command accepts a task description and returns matching CLI commands, giving agents a way to look up operations without already knowing their names.

Adding `--with-help` includes the first result's help page in the same response. Vercel's example, `vercel help search "roll back production" --with-help`, returns options and examples for `vercel rollback`. Search also recognizes common wording differences, such as “show” instead of “list,” and tolerates minor spelling mistakes.

## From task description to request template

Discovery extends beyond dedicated CLI commands. When a Vercel API endpoint matches a task, search returns a `vercel api` command containing the request path and placeholders for required inputs. The agent still needs to supply those values.

The `--json` option makes results machine-readable and can be combined with `--with-help` to include usage instructions, options and examples for the first match. Vercel also bundles a skill directing coding agents to begin command discovery with search. The company says it does not log search text.

## Discovery is not execution

The feature provides command choices and instructions rather than completing the requested operation. Existing command restrictions still matter: Vercel's rollback documentation, for example, limits Hobby-plan users to the previous production deployment.

For agent builders, the practical change is a discovery step between describing an operational goal and constructing a command. Vercel directs users to update their CLI with `vercel upgrade` to access the release.
