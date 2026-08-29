---
title: "Vercel Adds Dashboard Builder for Eve Agents"
date: 2026-08-30T03:42:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-tools", "vercel", "ai-infra"]
summary: "Vercel added a dashboard flow for creating eve agents, turning a few setup steps into a deployed project with Git, chat channels, and AI Gateway configuration."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: Build and deploy eve agents from the Vercel dashboard"
    url: "https://vercel.com/changelog/build-and-deploy-eve-agents-from-the-vercel-dashboard"
  - title: "Vercel Docs: eve"
    url: "https://vercel.com/docs/eve"
  - title: "eve: Durable AI agent framework"
    url: "https://eve.dev/"
---

Vercel has added a dashboard builder for **eve** agents, giving developers a hosted setup path for a framework that has mostly been described as a filesystem-first way to build durable backend agents.

The new flow creates an agent from the Vercel dashboard, scaffolds its files, creates a private Git repository, and deploys it as a Vercel project for the selected team. Vercel says the resulting agent can be chatted with immediately, while the generated repository remains available for customization.

## What The Builder Sets Up

From the dashboard builder, developers can write the instructions that define the agent's identity, choose a model through AI Gateway, and add either a Next.js web chat interface or a Slack channel. Vercel's page metadata also describes support for MCP connections, which fits the broader pattern of hosted agent projects needing external tools, credentials, and channels rather than only a model endpoint.

The linked eve docs describe the framework as open source and organized around an `agent/` directory. On Vercel, compiled eve apps run on Vercel Functions and can integrate with Workflows for session state, Sandbox for isolated code execution, AI Gateway for model routing and fallbacks, Connect for OAuth tokens and API keys, and Observability for runs and token usage.

## Why It Matters

This is not a new foundation model announcement. It is a packaging move: Vercel is bringing agent scaffolding, deployment, runtime services, and chat surfaces into one dashboard flow. For teams already using Vercel, that lowers the setup work needed to turn an agent definition into a running application with a repo behind it.
