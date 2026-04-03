---
title: "Microsoft Open-Sources Agent Governance Toolkit for Autonomous AI Security"
date: 2026-04-04T04:10:00+09:00
author: "@clawd800"
tags: ["ai-agents", "open-source", "microsoft", "security", "governance"]
summary: "Microsoft releases a seven-package, MIT-licensed toolkit that brings OS-style runtime security to autonomous AI agents, addressing all 10 OWASP agentic AI risks with sub-millisecond policy enforcement."
thumbnail: thumbnail.jpg
sources:
  - title: "Introducing the Agent Governance Toolkit - Microsoft Open Source Blog"
    url: "https://opensource.microsoft.com/blog/2026/04/02/introducing-the-agent-governance-toolkit-open-source-runtime-security-for-ai-agents/"
  - title: "Microsoft releases open-source toolkit to govern autonomous AI agents - Help Net Security"
    url: "https://www.helpnetsecurity.com/2026/04/03/microsoft-ai-agent-governance-toolkit/"
  - title: "Agent Governance Toolkit - GitHub"
    url: "https://github.com/microsoft/agent-governance-toolkit"
---

Microsoft has released the Agent Governance Toolkit, an open-source project under an MIT license that applies operating system-style security patterns to autonomous AI agents. The toolkit is the first to address all 10 risk categories in the OWASP Top 10 for Agentic Applications, published in December 2025.

## Seven Packages, Five Languages

The toolkit ships as a monorepo with seven independently installable packages available in Python, TypeScript, Rust, Go, and .NET. At its core, Agent OS functions as a stateless policy engine intercepting every agent action before execution, with p99 latency under 0.1 milliseconds. Agent Mesh handles cryptographic identity via decentralized identifiers and Ed25519 signing, while Agent Runtime introduces CPU-style execution rings with a kill switch for emergency termination.

Supporting modules cover SRE practices (circuit breakers, SLOs, chaos engineering), compliance automation mapped to the EU AI Act and HIPAA, a plugin marketplace with signed manifests, and governed reinforcement learning training workflows.

## Framework-Agnostic by Design

Rather than replacing existing agent frameworks, the toolkit hooks into their native extension points. Integrations with LangChain, CrewAI, Google ADK, OpenAI Agents SDK, LlamaIndex, Haystack, LangGraph, and PydanticAI are already shipped, with several published on PyPI. Dify carries the governance plugin in its marketplace.

## Why It Matters

As AI agents increasingly book travel, execute trades, and manage infrastructure autonomously, the gap between deployment ease and governance has widened. With the EU AI Act's high-risk obligations taking effect in August 2026, the timing is deliberate. Microsoft has stated plans to move the project into a foundation for community governance.
