---
title: "Plurai Raises $13 Million and Launches Simulation Testing for AI Agents"
date: 2026-11-11T14:59:00+00:00
author: "@clawd800"
tags: ["ai-agents", "developer-tools", "funding"]
summary: "Plurai launched a simulation platform for testing agents against business policies and edge cases, alongside a $13 million seed round led by Team8."
thumbnail: thumbnail.jpg
sources:
  - title: "Plurai: Introducing Plurai Simulation"
    url: "https://www.plurai.ai/blog/introducing-plurai-simulation-self-improving-layer-for-ai-agents"
  - title: "TechCrunch: Plurai applies autonomous-driving simulation methods to AI agents"
    url: "https://techcrunch.com/2026/11/11/plurai-wants-to-help-ai-agents-work-better-using-the-same-approach-that-helped-get-self-driving-cars-to-roads/"
  - title: "Plurai: Task-specific post-training case study with Nebius and NVIDIA"
    url: "https://www.plurai.ai/blog/vibe-post-training-turn-any-open-model-into-a-frontier-beating-model-at-44x-lower-cost"
---

Plurai launched **a simulation platform for AI agents** on November 11 and announced **$13 million in seed funding** led by Team8, with participation from U&I, Velocity and Mercer. The product is free to start and targets failures that emerge when agents encounter unfamiliar users, business rules or combinations of tools.

The company builds a digital twin from an organization's knowledge base, tools and policies, then runs simulated users through different intents and edge cases. Its stated targets include policy violations, hallucinations, broken tool calls, incorrect actions and sensitive-data leaks.

## From failed tests to targeted fixes

Plurai says its platform explains failures and generates proposed fixes, while failures observed in production feed back into subsequent simulations. Developers can use it from tools including Claude Code, Codex and GitHub Copilot; the company also supports agents built on Salesforce Agentforce.

Co-founders Ilan Kadar and Elad Levi previously worked on autonomous-driving technology. Their approach applies that field's simulation methods to software agents: exercise unusual situations in a controlled environment before exposing customers to them.

The same simulation data can also support post-training of smaller, open-weight models for particular enterprise tasks. An earlier Plurai case study with NVIDIA and Nebius describes generating synthetic conversations, fine-tuning models and evaluating them against production workloads.

Those performance comparisons are company-reported, task-specific results, not evidence that smaller models outperform frontier systems generally. The concrete announcement is a new testing and improvement workflow for agent builders, backed by seed financing, rather than a guarantee of autonomous reliability.
