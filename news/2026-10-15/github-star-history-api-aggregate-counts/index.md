---
title: "GitHub Adds Star-History API Without Exposing User Identities"
date: 2026-10-15T12:00:00+09:00
author: "@clawd800"
tags: ["github", "developer-infra", "api", "privacy"]
summary: "GitHub's aggregate star-history endpoint returns up to 30 weeks of daily counts per request, replacing identity-heavy pagination for repository trend tools."
thumbnail: thumbnail.jpg
sources:
  - title: "GitHub Engineering: Rebuilding star history without the stargazers"
    url: "https://github.blog/engineering/architecture-optimization/from-2500-requests-to-24-rebuilding-star-history-without-the-stargazers/"
  - title: "GitHub REST API: Get repository star history"
    url: "https://docs.github.com/en/rest/activity/starring#get-repository-star-history"
  - title: "GitHub Changelog: Access restrictions to public endpoints and views"
    url: "https://github.blog/changelog/2026-06-30-upcoming-access-restrictions-to-public-api-endpoints-and-ui-views/"
---

GitHub detailed a new **repository star-history API** on October 14 that returns daily counts without exposing individual stargazers. The endpoint gives maintainers and analytics tools a way to track project interest after restrictions on public stargazer lists disrupted existing services.

The REST endpoint, `GET /repos/{owner}/{repo}/stargazers/history`, groups results into calendar weeks, with up to **30 weeks per request**. Pages move backward through a repository's history, and each weekly record includes daily counts and a total. Weeks without stars return zeros.

## Fewer requests, less database work

Previously, tools reconstructed trends by downloading pages of individual stargazer records and discarding the identities. GitHub says its React example, with roughly 251,000 stars, required about 2,511 requests under that approach. The aggregate endpoint reduces the example to about 24 requests.

The engineering change goes beyond smaller responses. GitHub filters records by an indexed date range before grouping them, avoiding repeated aggregation of the repository's entire current star set. Across the full history, each star is examined about once, according to the company.

The redesign follows restrictions limiting stargazer and watcher lists to repository administrators and collaborators. GitHub said those lists were being harvested for spam; aggregate counts preserve trend analysis without returning usernames.

## History has limits

The endpoint is not an immutable record of every star ever added. Removed stars disappear from the underlying model, and unusually dense weeks can still generate expensive queries. GitHub's documentation also warns that week and day boundaries are not guaranteed to align with UTC.

For maintainers, the result is a more efficient interest signal, not a complete historical audit trail.
