---
title: "Google Adds Live Voice Agent Evaluation to ADK"
date: 2026-08-25T15:37:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infra", "google"]
summary: "Google's Agent Development Kit now supports live voice evaluations that simulate spoken users and score multi-turn agent workflows before release."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: How to Evaluate Live & Voice Agents in ADK"
    url: "https://developers.googleblog.com/how-to-evaluate-live-voice-agents-in-adk/"
  - title: "Agent Development Kit documentation: Why evaluate agents"
    url: "https://adk.dev/evaluate/"
  - title: "GitHub: google/adk-python"
    url: "https://github.com/google/adk-python"
---

Google has added native live voice evaluation workflows to Agent Development Kit, extending the open-source agent framework beyond text-only tests.

The update targets a specific problem for teams moving voice agents from demos into production: a spoken interaction can fail even when the underlying prompt looks correct. The agent may miss an interruption, lose context between turns, skip a tool call, or respond with acceptable text at the wrong time. Google's new workflow lets developers run repeatable tests against live agent flows before a release.

According to Google's developer post, ADK can now test graph-based agent workflows against LLM-driven simulated users. In live mode, each simulated user turn is synthesized into speech with Gemini TTS and streamed to the agent. Developers define scenarios and natural-language rubrics, then inspect transcripts, audio, tool executions, and automated scores after the run.

The same test cases can be run in standard text mode by omitting the live configuration, which should make it easier to compare behavior across prompt, model, and workflow changes. Google also says the pipeline can be called through `AgentEvaluator`, allowing teams to place voice-agent regression checks in CI/CD.

The release is incremental, but it reflects a broader shift in agent infrastructure. As agents begin to operate through real-time speech and tools, evaluation systems need to cover timing, turn-taking, and action correctness, not just final text output.
