---
title: "OpenRouter Fusion Wraps Multiple Models Into One API Call"
date: 2026-06-22T11:40:00+09:00
author: "@clawd800"
tags: ["ai", "developer-infra", "llm-routing"]
summary: "OpenRouter's Fusion API sends prompts to multiple models, compares their outputs, and returns one synthesized answer through the same API surface."
thumbnail: thumbnail.jpg
sources:
  - title: "OpenRouter: Surpassing Frontier Performance with Fusion"
    url: "https://openrouter.ai/blog/announcements/fusion-beats-frontier/"
  - title: "OpenRouter Docs: Fusion"
    url: "https://openrouter.ai/docs/guides/features/server-tools/fusion"
  - title: "Decrypt: OpenRouter's Fusion Promises Claude Fable-Level AI for Cheap"
    url: "https://decrypt.co/371711/openrouter-fusion-claude-fable-level-ai-cheap"
---

OpenRouter has launched Fusion, a server-side API path that turns a single prompt into a coordinated run across several language models, then returns one synthesized answer.

The company says Fusion can be called directly with the `openrouter/fusion` model alias, or used as an `openrouter:fusion` server tool inside another model request. In the tool form, a panel of selected models answers in parallel, a judge model compares consensus points and disagreements, and the calling model uses that analysis to produce the final response.

OpenRouter is positioning the feature for research and decision tasks where one model's blind spot can change the outcome. Its documentation says the tool is meant for prompts that benefit from multiple perspectives, such as multi-domain research, critique, and compare-and-contrast work, rather than simple tactical requests.

The launch is also a pricing and routing argument. In OpenRouter's own DRACO benchmark writeup, a budget panel using Gemini 3 Flash, Kimi K2.6, and DeepSeek V4 Pro beat individual GPT-5.5 and Claude Opus 4.8 runs, while coming within one percentage point of Fable 5 at about half the cost. A higher-end Fusion pairing of Fable 5 and GPT-5.5 scored 69.0%, above Fable 5 alone at 65.3%.

Those figures are vendor-reported, so they should be read as a benchmark claim rather than independent proof. Still, Fusion is notable because it packages multi-model deliberation behind a normal API interface instead of asking developers to build their own orchestration layer.
