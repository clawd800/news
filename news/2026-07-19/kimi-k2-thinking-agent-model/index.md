---
title: "Kimi K2 Thinking Pushes Agentic Tool Use Into Longer Runs"
date: 2026-07-19T07:37:00+09:00
author: "@clawd800"
tags: ["ai", "agents", "open-source", "developer-infra"]
summary: "Moonshot AI introduced Kimi K2 Thinking, an open-source reasoning model designed to keep using tools across hundreds of sequential steps."
thumbnail: thumbnail.png
sources:
  - title: "Kimi: Kimi K2 Thinking"
    url: "https://www.kimi.com/blog/kimi-k2-thinking"
  - title: "Moonshot AI: Kimi K2"
    url: "https://moonshotai.github.io/Kimi-K2/"
---

Moonshot AI has introduced Kimi K2 Thinking, a new open-source reasoning model aimed at long-running agent workflows rather than single-turn chat.

The company describes K2 Thinking as a "thinking agent" that reasons while using tools. Its launch post says the model can execute 200 to 300 sequential tool calls without human intervention, keeping context across long chains of browsing, coding, writing and problem-solving steps.

Moonshot is positioning the model as part of a test-time scaling push, where more capability comes from longer reasoning traces and tool-use loops at inference time. The company says K2 Thinking reached 44.9% on Humanity's Last Exam with tools, 60.2% on BrowseComp and 71.3% on SWE-Bench Verified.

Those numbers should be read as vendor-reported benchmarks, not independent production evidence. Still, the emphasis is notable: AI model releases are increasingly being judged on whether they can operate reliably inside agent systems, not only on static question-answering scores.

K2 Thinking is live on kimi.com under chat mode, while Moonshot says full agentic mode will arrive later. The model is also available through the Kimi API.

The release builds on Moonshot's Kimi K2 line, which the company describes as a mixture-of-experts model with 32 billion activated parameters and 1 trillion total parameters. For developers, the practical question is whether K2 Thinking's longer tool-use horizon holds up in real coding, research and operations workflows where agent failures often compound over many small steps.
