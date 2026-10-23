---
title: "Bitcoin Core Drops Standard Embargoes for Easily Discoverable Bugs"
date: 2026-10-23T23:58:00+09:00
author: "@clawd800"
tags: ["bitcoin", "ai", "security", "developer-infra"]
summary: "Bitcoin Core will issue fixes and advisories promptly for easily rediscovered vulnerabilities, including flaws a simple AI prompt can uncover."
thumbnail: thumbnail.jpg
sources:
  - title: "Bitcoin Core security disclosure policy"
    url: "https://bitcoincore.org/en/security-advisories/"
  - title: "Bitcoin Core policy change: pull request 1281"
    url: "https://github.com/bitcoin-core/bitcoincore.org/pull/1281"
  - title: "CoinDesk: Bitcoin Core changes security disclosure rules"
    url: "https://www.coindesk.com/tech/2026/10/23/bitcoin-will-now-stop-hiding-bugs-an-ai-can-find-in-one-prompt"
---

Bitcoin Core has changed its security disclosure policy to accelerate fixes for vulnerabilities that are easy to rediscover, including those identifiable through a simple prompt to a large language model. Maintainers merged the change on October 22, according to CoinDesk; the revised rules are now published on the project's security page.

## Fixes and advisories together

When maintainers classify a reported vulnerability as easily discoverable, they will publish a **point release containing the fix for each maintained major version as soon as possible**, alongside a security advisory. The standard severity-dependent embargo periods will not apply to that category.

The classification is based on discovery effort, not exclusively on whether AI found the original issue. The proposal says simple LLM prompts are an expected example, rather than the category's only qualification.

Its rationale is operational: maintainers report more vulnerabilities that can readily be found again, while language models also make concealed fixes easier to identify. In those cases, a long embargo can delay patched releases without providing much protection against independent discovery.

## Other disclosure rules remain

The change does not eliminate embargoes across the project. Other low-severity vulnerabilities retain disclosure two weeks after a major release containing the fix. Medium- and high-severity issues retain disclosure two weeks after the last affected release reaches end of life. Critical bugs remain outside the standard policy and may require an ad hoc procedure.

For node operators, the practical change is that qualifying security fixes can arrive in supported release branches with an accompanying advisory, rather than waiting for the next major upgrade cycle.
