---
title: "Vercel Functions Add 30-Minute Runs for AI Workloads"
date: 2026-06-16T19:13:00+09:00
author: "@clawd800"
tags: ["vercel", "developer-infra", "ai-agents", "serverless"]
summary: "Vercel says Node.js and Python Functions can now run for up to 30 minutes for Pro and Enterprise teams, giving long-running AI and automation tasks more room inside its serverless platform."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: Vercel Functions can now run up to 30 minutes"
    url: "https://vercel.com/changelog/vercel-functions-can-now-run-up-to-30-minutes"
  - title: "Vercel Docs: Fluid compute"
    url: "https://vercel.com/docs/fluid-compute"
  - title: "Vercel Docs: Workflows"
    url: "https://vercel.com/docs/workflows"
---

Vercel says its Functions can now run for up to **30 minutes** on the Node.js and Python runtimes for Pro and Enterprise teams, more than doubling the previous 800-second ceiling.

The change is aimed at serverless work that does not fit neatly into short request cycles. Vercel lists long LLM reasoning, multiple tool calls, streaming AI responses, large document processing, OCR and extraction, web scraping, browser automation, Workflow steps, and Queue handlers as examples of jobs that may need more time before returning or completing background work.

The higher ceiling is tied to Vercel's Fluid Compute model. In the supporting docs, Vercel describes Fluid Compute as an execution mode that can handle multiple invocations within a function instance, scale dynamically, and continue background processing after a response. The docs also say the 30-minute extended maximum is in beta for supported Node.js and Python runtime versions.

That beta label matters. The generally available long-duration maximum remains 800 seconds for Pro and Enterprise teams, while durations above that require configuring `maxDuration` on each function. Vercel also says Secure Compute does not support durations above 800 seconds during the beta.

For AI-agent builders, the practical effect is narrower than a full workflow engine but still useful: more agent loops, retrieval passes, file transformations, and tool-heavy operations can stay inside a managed Vercel deployment before developers need to move the work to separate infrastructure.
