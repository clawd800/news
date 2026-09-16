---
title: "Salesforce Announces Koa, a CRM Reasoning Model Built on Nemotron"
date: 2026-09-16T11:40:00+09:00
author: "@clawd800"
tags: ["ai-agents", "enterprise-ai", "salesforce", "nvidia"]
summary: "Salesforce's Koa specializes NVIDIA Nemotron 3 Super for CRM workflows, with limited customer pilots and U.S. general availability expected in winter 2026."
thumbnail: thumbnail.jpg
sources:
  - title: "Salesforce: Announcing Koa, Salesforce's First CRM Reasoning Model"
    url: "https://www.salesforce.com/news/press-releases/2026/09/15/koa-reasoning-model/"
  - title: "NVIDIA: Jensen Huang at Dreamforce"
    url: "https://blogs.nvidia.com/blog/jensen-huang-dreamforce/"
---

Salesforce and NVIDIA announced **Koa** on September 15, a reasoning model designed to help Agentforce agents carry out multistep customer relationship management workflows. Built by post-training NVIDIA Nemotron 3 Super, it targets actions such as updating sales opportunities, routing service cases, and scheduling follow-ups.

Salesforce says the training corpus consists entirely of synthetic scenarios modeled on knowledge from nearly three decades of CRM deployments, with no customer data used to train Koa. The scenarios cover more than 14 industries and map the sequences of actions and tool calls needed to complete enterprise tasks.

The company used supervised fine-tuning and reinforcement learning with NVIDIA's NeMo tools. Salesforce controls Koa's weights and performs both post-training and inference within its own infrastructure. That makes the model a Salesforce-hosted option for Agentforce, rather than an announcement of publicly downloadable Koa weights.

## Limited rollout, vendor-reported results

Koa already powers an internal Salesforce employee agent in Slack. The companies name Formula 1, UChicago Medicine, Baxter Credit Union, 1-800Accountant, Engine, and Xero among customer pilots. Broad availability has not arrived: U.S. general availability is expected in winter 2026.

Salesforce reports that Koa matches or exceeds leading models on CRM actions in its own benchmark, with what it describes as three times fewer errors. Those are vendor-reported results, not independent confirmation of production reliability.

The practical development is a specialized model for selecting tools and executing business workflows, with deployment controlled by the application provider. Customer pilots will test how those benchmark claims translate into everyday agent work.
