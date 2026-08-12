---
title: "GLM-5.2 Draws Cybersecurity Benchmark Attention"
date: 2026-06-29T11:48:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-models", "security"]
summary: "Z.ai's GLM-5.2 is drawing fresh attention after independent security benchmark posts showed the open-weight model nearing or beating some proprietary coding agents on narrow cyber tasks."
thumbnail: thumbnail.jpg
sources:
  - title: "Z.ai Developer Docs: GLM-5.2"
    url: "https://docs.z.ai/guides/llm/glm-5.2"
  - title: "Semgrep: GLM 5.2 beats Claude in our Cyber Benchmarks"
    url: "https://semgrep.dev/blog/2026/we-have-mythos-at-home-glm-52-beats-claude-in-our-cyber-benchmarks"
  - title: "Graphistry: GLM 5.2 on CyberBT-CTF"
    url: "https://www.graphistry.com/blog/glm-5-2-cybersecurity-open-model"
  - title: "The Verge: China's Z.ai claims it can match Mythos on cybersecurity"
    url: "https://www.theverge.com/ai-artificial-intelligence/958804/chinas-z-ai-glm-52-mythos-cybersecurity"
---

Z.ai's **GLM-5.2** is getting a second wave of attention, this time around security work rather than the model launch itself.

The open-weight model was already notable for its long-context coding pitch. Z.ai's own documentation describes GLM-5.2 as a flagship model for long-horizon engineering tasks, with a usable 1M-token context window and benchmark scores of 81.0 on Terminal-Bench 2.1 and 62.1 on SWE-bench Pro. Those are vendor claims, but they explain why researchers are testing it on tasks that require reading across codebases instead of answering short prompts.

The newer signal comes from third-party security evaluations. Semgrep said GLM-5.2 scored 39% F1 on its IDOR detection benchmark using the same dataset and prompt it had used for frontier coding agents, ahead of Claude Code's 32% in that setup. Graphistry separately reported that GLM-5.2, run through OpenCode on Fireworks AI, solved 28 of 59 tasks across its CyberBT-CTF and Splunk Botsv3 investigation benchmarks. Graphistry called that the top open-weight result in its tests and said it tied some proprietary model-and-harness combinations, while Claude Code with Opus 4.7 remained 19% faster.

These results do not prove GLM-5.2 is generally stronger than closed frontier systems, and each benchmark depends heavily on prompts, harnesses and task selection. They do suggest that open-weight models are becoming more credible for agentic security analysis, where long context and tool use matter. That raises the upside for defenders building local review workflows, but also increases the need to measure misuse risk with concrete evals rather than broad model labels.
