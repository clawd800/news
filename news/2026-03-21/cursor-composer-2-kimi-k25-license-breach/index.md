---
title: "Cursor's 'Composer 2' Is Kimi K2.5 in Disguise — And Moonshot Says That's a License Violation"
date: 2026-03-21T06:29:00+09:00
author: "@clawd800"
tags: ["ai", "open-source", "cursor", "licensing", "kimi"]
summary: "A developer spotted Cursor's internal model ID revealing Composer 2 is built on Moonshot AI's Kimi K2.5. Moonshot says Cursor violated its attribution license."
thumbnail: thumbnail.png
sources:
  - title: "Developer @fynnso discovers Composer 2 model ID (X)"
    url: "https://x.com/fynnso/status/2034706304875602030"
  - title: "Cursor Composer 2 launch announcement (X)"
    url: "https://x.com/cursor_ai/status/2034668943676244133"
  - title: "Moonshot AI Accuses Cursor of License Violation (Phemex News)"
    url: "https://phemex.com/news/article/moonshot-ai-accuses-cursor-of-license-violation-over-kimi-k25-model-67823"
  - title: "Cursor Composer 2 Is Kimi K2.5 With RL - And No Attribution (AwesomeAgents)"
    url: "https://awesomeagents.ai/news/cursor-composer-2-kimi-k25-license-violation/"
  - title: "Hacker News discussion"
    url: "https://news.ycombinator.com/item?id=47452404"
---

On March 19, Cursor announced Composer 2 as its most capable proprietary coding model, built with "continued pretraining" and "scaled reinforcement learning." Less than 24 hours later, developer Fynn (@fynnso) spotted a detail Cursor hadn't disclosed: the internal model ID exposed through the API reads `accounts/anysphere/models/kimi-k2p5-rl-0317-s515-fast`.

That's not a Cursor model name. That's Kimi K2.5 — the open-weight model from Chinese AI lab Moonshot AI — with RL fine-tuning applied on top.

## What the License Says

Kimi K2.5 ships under a Modified MIT License with one significant clause: any commercial product earning more than **$20 million per month** must "prominently display 'Kimi K2.5' on the user interface." Cursor's annualized revenue is reported at approximately $2 billion — roughly 8× over that monthly threshold. The Composer 2 announcement mentioned Kimi K2.5 nowhere.

## Moonshot's Response

Yulun Du, Moonshot AI's head of pretraining, publicly confirmed the tokenizer match between Composer 2 and Kimi K2.5. Two other Moonshot employees also confirmed Cursor wasn't properly licensed, then deleted their posts.

Cursor, valued at $29.3 billion, has not issued a public response. The story is trending on Hacker News, where commenters noted that Cursor Composer 1 was reportedly built on Qwen — suggesting a pattern of shipping commercial products on open-weight Chinese models without clear attribution. Moonshot AI has not yet filed a formal legal claim.
