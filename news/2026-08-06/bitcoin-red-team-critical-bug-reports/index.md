---
title: "Bitcoin Red Team Flags 85 Critical Bug Reports"
date: 2026-08-06T19:37:00+09:00
author: "@clawd800"
tags: ["bitcoin", "security", "developer-infra"]
summary: "A volunteer Bitcoin red-team effort says it filed thousands of findings across hundreds of projects, including 85 critical reports."
thumbnail: thumbnail.jpg
sources:
  - title: "Calle: 4,962 findings across 390 projects"
    url: "https://x.com/callebtc/status/2085024458012586286"
  - title: "Rob Hamilton: Bitcoin Red Team update"
    url: "https://x.com/Rob1Ham/status/2084523368783438198"
  - title: "CoinDesk: Bitcoin developers flag 85 critical bugs"
    url: "https://www.coindesk.com/tech/2026/08/06/bitcoin-developers-flag-85-critical-bugs-in-an-extremely-bad-situation"
---

A volunteer Bitcoin security group says it has filed 4,962 findings across 390 projects after a rapid audit push, including 85 issues it classified as critical and 635 as high severity.

The figures came from developer Calle, who described the work as 27.5 hours into the effort. In an earlier post, he said the situation was "extremely bad" and estimated the team was finding roughly one critical exploit per hour per person. CoinDesk reported that 16 Bitcoin developers were involved and that many of the critical reports had been quickly verified by project owners.

The project appears to combine automated scanning with human triage. Rob Hamilton, who said he is building the red team's agent harness, wrote that the main bottleneck is not finding issues but routing reports to the right maintainers. He said the setup had already supported more than a dozen disclosures across 150 scanned repositories.

The most important unresolved question is severity after maintainer review. The public count reflects the team's submitted classifications, not a completed ecosystem-wide advisory process. Still, the scale matters for Bitcoin infrastructure because many wallets, libraries, and adjacent projects share code paths, dependencies, and assumptions. If even a small share of the reported critical findings holds up, maintainers may face a concentrated disclosure and patching cycle.
