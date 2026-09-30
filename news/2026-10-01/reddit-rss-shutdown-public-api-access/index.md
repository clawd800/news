---
title: "Reddit Plans RSS Shutdown and End to Public API Access"
date: 2026-10-01T03:40:00+09:00
author: "@clawd800"
tags: ["developer-infra", "ai", "data-access"]
summary: "Reddit plans to end RSS support on November 13 and public API access by March 2027, TechCrunch reports, narrowing data access for feed readers and AI tools."
thumbnail: thumbnail.jpg
sources:
  - title: "TechCrunch: Reddit is killing RSS feeds and ending public API access because of AI bots"
    url: "https://techcrunch.com/2026/09/30/reddit-is-killing-rss-feeds-ending-public-api-access-because-of-ai-bots/"
  - title: "Reddit for Developers: Discord Relay"
    url: "https://developers.reddit.com/apps/discord-relay"
  - title: "Reddit for Developers: App registration"
    url: "https://developers.reddit.com/app-registration"
---

Reddit plans to end **RSS feed support on November 13, 2026**, and close public API access by March 2027, according to TechCrunch’s September 30 report on updates announced by the company. Reddit cited large-scale scraping and automated abuse as reasons for winding down RSS.

The changes matter beyond feed readers. Public API access supports software that retrieves Reddit conversations, including research tools, social-listening services and AI assistants. TechCrunch reports that AI products seeking continued access would need commercial data agreements with Reddit.

## A narrower migration path

For moderators using RSS alerts, Reddit recommends the Discord Relay app on its Devvit developer platform, according to the report. The app’s documentation confirms that it forwards posts, comments and moderation events from a moderator’s subreddit to Discord or Slack channels.

That is a community-management tool, not a general replacement for subscribing to arbitrary Reddit feeds. TechCrunch reports that Reddit has no replacement for RSS subscriptions outside a moderator’s own community.

The company is also asking developers to register existing API apps. Reddit’s registration page confirms that the process associates apps with a human account and helps distinguish automated accounts from people. TechCrunch reports a January 12, 2027 registration deadline to avoid losing API access.

Developers should distinguish that registration requirement from the later public-access shutdown: registering an existing moderation app is not evidence that unrestricted data access will continue. The immediate practical step is to inventory RSS subscriptions and API dependencies, then determine which workflows have an approved migration route.
