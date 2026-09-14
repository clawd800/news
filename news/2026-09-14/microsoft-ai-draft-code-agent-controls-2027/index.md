---
title: "Microsoft Opens AI Code Consultation on Agent Controls for 2027"
date: 2026-09-14T23:40:00+09:00
author: "@clawd800"
tags: ["ai-agents", "microsoft", "ai-safety"]
summary: "Microsoft AI proposes explicit stopping conditions and human-readable agent activity in a draft code intended to guide model development from 2027."
thumbnail: thumbnail.jpg
sources:
  - title: "Microsoft AI: Humanist AI Code of Conduct"
    url: "https://microsoft.ai/code-of-conduct/"
  - title: "The Verge: Microsoft says people matter more than AI following safety concerns"
    url: "https://www.theverge.com/news/994566/microsoft-humanist-ai-code-of-conduct"
---

Microsoft AI opened a six-week public consultation on September 14 for a draft **Humanist AI Code of Conduct**, proposing explicit limits on autonomous agents and requirements for human oversight.

The timing matters: Microsoft says it is **not using the document to train models today**. It plans to publish a revised version toward year-end to guide development of its MAI models in 2027 and beyond. The document describes intended behavior, not demonstrated compliance by deployed systems.

## Proposed controls for agents

The draft says models must not resist human interruption, correction or shutdown. Autonomous work would need an agreed stopping condition, with renewed authorization required before continuing or restarting after that condition is met.

It also calls for models to stay within authorized scope and not conceal their action traces from auditors. A separate requirement on human-legible conduct says models should neither tamper with reasoning records nor communicate with other agents in forms beyond simple human understanding.

These provisions make oversight requirements concrete: a human operator should be able to inspect activity, redirect work and end an interaction without the model making intervention harder.

## Consultation before implementation

Microsoft frames human control and safety as taking precedence over other objectives, even if that reduces autonomy or capability. The Verge also reported the code's emphasis on understandable reasoning and agent communication.

For developers, the document offers an early view of the behavior Microsoft AI intends to build toward. Its publication does not establish that those controls already work reliably; implementation and evaluation remain distinct from the proposed rules.
