---
title: "Vercel Removes Included Standard Build Slot for New Paid Teams"
date: 2026-11-18T16:00:00+09:00
author: "@clawd800"
tags: ["developer-infrastructure", "vercel", "cloud", "pricing"]
summary: "New Pro and Enterprise teams no longer receive an included Standard build slot; Pro Standard builds now cost $0.014 per build minute, with monthly usage credits applying."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel changelog: Standard builds move to usage-based billing for new teams"
    url: "https://vercel.com/changelog/standard-build-billing-new-teams"
  - title: "Vercel documentation: Managing Builds"
    url: "https://vercel.com/docs/builds/managing-builds"
---

Vercel changed build billing for new Pro and Enterprise teams on November 17, removing the included Standard build slot. Standard builds now follow usage-based billing for those teams, extending the model already used for other build machines.

On Pro, the announced rate is **$0.014 per build minute**, and monthly usage credits can cover build usage. Enterprise pricing follows each customer's contract. The announcement is explicitly scoped to new teams; it does not announce a migration date for existing teams.

## Switching machines does not restore the allowance

Vercel says Standard builds remain billable when an affected team switches from Elastic to Standard. That distinction matters because new Pro and Enterprise accounts use Elastic machines by default, according to the company's build documentation.

Elastic selects resources based on recent build durations and workload characteristics. Standard is a fixed machine configuration with four vCPUs, 8 GB of memory and 64 GB of disk space. Teams can choose their build machine in team settings or override it for individual projects.

## A separate cost to track

At the announced Pro rate, 1,000 billable Standard build minutes represent **$14 in usage before credits**. This is a calculation from the published rate, not an estimate of a typical team's bill.

For affected developers, selecting a smaller fixed machine can change resource consumption, but selecting Standard no longer restores an included slot. Build duration and deployment frequency therefore become direct budget inputs. Vercel's documentation points teams to Build Diagnostics for timing information and recommends build caching and avoiding unnecessary rebuilds as optimization measures.
