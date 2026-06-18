---
title: "Vercel Frames Agent Stack Around SDKs, Sandboxes and Workflows"
date: 2026-06-18T11:37:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infra", "vercel"]
summary: "Vercel's Agent Stack post bundles its AI SDK, Gateway, Sandbox and Workflow pieces into a deployment path for production agent applications."
thumbnail: thumbnail.png
sources:
  - title: "Vercel Blog: The Agent Stack"
    url: "https://vercel.com/blog/agent-stack"
  - title: "Vercel Docs: Build with AI on Vercel"
    url: "https://vercel.com/docs/agent-resources/integrations-for-models"
  - title: "Vercel Docs: Fluid Compute"
    url: "https://vercel.com/docs/fluid-compute"
---

Vercel has published **The Agent Stack**, a new framing of its developer platform around the pieces needed to build and deploy AI agent applications.

The post does not introduce a single new model or agent product. Instead, it packages several existing or emerging Vercel surfaces into one architecture: AI SDK for building model and tool loops, AI Gateway for model routing, Vercel Sandbox for isolated execution, Workflow SDK for durable multi-step jobs, and the platform's compute and observability layers for deployment.

The most important shift is the deployment angle. Many agent demos run as scripts or short-lived chat flows, but production agents often need retries, state, tool calls, code execution, background work, and model switching. Vercel argues that those concerns should sit close to the web application stack rather than in separate orchestration infrastructure.

Its supporting docs describe the AI section of Vercel as a way to integrate AI services and models into Vercel projects. The Fluid Compute docs separately describe an execution model with dynamic scaling, background processing after a response, and error isolation across concurrent requests.

That makes the Agent Stack more of a platform thesis than a standalone launch. It is Vercel saying that agent apps are becoming a normal deployment target, not just an SDK use case. For developers already building on Next.js or Vercel, the practical question is whether these pieces reduce enough operational work to keep long-running agent behavior inside the same platform as the app.
