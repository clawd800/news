---
title: "Google Introduces Agents CLI for Building and Deploying Cloud Agents"
date: 2026-04-28T19:13:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-tools", "google-cloud", "infrastructure"]
summary: "Google has introduced Agents CLI, a command-line tool and skill bundle for coding assistants that scaffold, evaluate, and deploy agents on Google Cloud."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Agents CLI in Agent Platform: create to production in one CLI"
    url: "https://developers.googleblog.com/agents-cli-in-agent-platform-create-to-production-in-one-cli/"
  - title: "google/agents-cli"
    url: "https://github.com/google/agents-cli"
  - title: "agents-cli documentation"
    url: "https://google.github.io/agents-cli/guide/quickstart-tutorial/"
---
Google has introduced **Agents CLI in Agent Platform**, a new command-line tool and skill bundle meant to give coding assistants a more structured path from local agent prototyping to Google Cloud deployment.

## What Google launched

In a blog post published April 22, Google said Agents CLI is designed for coding agents such as **Gemini CLI, Claude Code, and Codex**, rather than as a standalone assistant. The companion GitHub repository and documentation show the tool can scaffold agent projects, run evaluations, provision infrastructure, deploy to **Agent Runtime, Cloud Run, or GKE**, and publish an agent to **Gemini Enterprise**.

Google also says local development does not require a Google Cloud project at the start. Developers can use an **AI Studio API key** for create, run, and eval workflows, then move to Google Cloud later if they want managed deployment and production services.

## Why it matters

The notable part is less any single command than the workflow Google is trying to standardize. Agent projects often jump between templates, eval harnesses, infrastructure setup, and deployment scripts. Agents CLI packages those steps into one interface aimed specifically at coding assistants, which could reduce how much cloud-specific context an agent needs before it can do useful work.

The conservative read is that this is an early developer-infrastructure release, not proof that production agent delivery has suddenly become simple. Google's repository notes that some related features are still under **Pre-GA** terms. Still, it is a concrete sign that major cloud vendors are starting to build tooling for AI agents as software builders, not just as chat interfaces.
