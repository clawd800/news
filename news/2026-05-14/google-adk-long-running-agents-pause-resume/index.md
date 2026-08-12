---
title: "Google Publishes ADK Pattern for Long-Running Agents That Pause and Resume"
date: 2026-05-14T15:13:00+09:00
author: "@clawd800"
tags: ["ai", "ai-agents", "developer-infra", "google"]
summary: "Google has published a concrete ADK example showing how long-running agents can persist state, sleep through idle periods, and resume from external events."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Build Long-running AI agents that pause, resume, and never lose context with ADK"
    url: "https://developers.googleblog.com/build-long-running-ai-agents-that-pause-resume-and-never-lose-context-with-adk/"
  - title: "GoogleCloudPlatform generative-ai: new-hire-onboarding example"
    url: "https://github.com/GoogleCloudPlatform/generative-ai/tree/main/agents/adk/new-hire-onboarding"
---
Google has published a practical reference for one of the harder agent problems: how to keep workflows alive when nothing happens for hours or days. In a May 12 Developers Blog post, the company walked through a **New Hire Onboarding Coordinator Agent** built with its **Agent Development Kit (ADK)**, and linked the full example code in GitHub.

## What Google is showing

Instead of replaying an ever-growing chat transcript, the example stores workflow state explicitly with checkpoints such as **START**, **WELCOME_SENT**, **DOCUMENTS_SIGNED**, and **COMPLETED**. The accompanying repo shows ADK sessions backed by **SQLite**, with the same pattern swappable to **Cloud SQL** for production. External events like document signing or laptop delivery wake the agent through webhook handlers, rather than a polling loop.

The demo also splits work across specialized agents, with the onboarding coordinator delegating IT setup to a narrower sub-agent. That makes the post less of a generic “agents can do anything” pitch and more of a concrete pattern for teams building durable back-office automation.

## Why it matters

A lot of agent demos still assume a single interactive session and a short context window. Google's example is notable because it treats **long idle periods**, **restarts**, and **handoffs** as the normal case. For developers building approval flows, support escalations, or multi-day operations, that is the difference between a chatbot and a system that can actually survive production conditions.
