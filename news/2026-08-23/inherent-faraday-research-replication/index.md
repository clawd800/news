---
title: "Inherent Releases Faraday Agent for Research Replication"
date: 2026-08-23T07:45:00+09:00
author: "@clawd800"
tags: ["ai-agents", "research", "developer-tools"]
summary: "London AI lab Inherent introduced Faraday, a 27B-parameter agent trained to replicate scientific paper results with coding agents as tools."
thumbnail: thumbnail.jpg
sources:
  - title: "Inherent: Training AI Scientists to Replicate Research"
    url: "https://inherentlabs.ai/research/training-to-replicate"
  - title: "arXiv: Training AI Scientists to Replicate Research"
    url: "https://arxiv.org/abs/2608.13331"
  - title: "TechCrunch: Inherent says its AI teammate outperformed Anthropic and OpenAI at replicating research"
    url: "https://techcrunch.com/2026/08/22/inherent-founded-by-deepmind-alumni-says-its-ai-teammate-just-outperformed-anthropic-and-openai-at-replicating-research/"
---

Inherent, a London AI lab founded by former DeepMind researchers, has released Faraday, an agent aimed at reproducing results from scientific papers rather than answering short benchmark prompts.

The company describes Faraday as a 27B-parameter "AI Scientist" trained with long-horizon reinforcement learning. Its task suite, called Replica, asks agents to recreate figures from machine learning and AI-for-science papers under limited time and compute budgets, without access to the original plots.

Inherent says Faraday outperformed Claude Opus 4.8 and GPT-5.5 on those paper-replication tasks. That claim should be read as a company-run benchmark, but the accompanying paper gives useful detail on the setup: Replica contains 310 tasks from 100 papers, and the evaluation uses rubrics intended to judge not only plot similarity but also experimental design and research practice.

One notable design choice is that Faraday can use coding agents as tools. Inherent says it trained Faraday with GPT-5.4-mini and tested it directing GPT-5.5 Codex, framing the system as a research planner that delegates implementation work rather than a standalone model that writes every experiment itself.

The release is less a general AI scientist breakthrough than an early, inspectable attempt to train agents on longer scientific workflows. If the benchmark holds up under outside scrutiny, it could become a useful testbed for whether agents can make progress on underspecified research tasks.
