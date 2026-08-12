---
title: "Vercel Ships AI SDK 7 for Agent Workflows"
date: 2026-06-25T23:37:00+09:00
author: "@clawd800"
tags: ["ai", "ai-agents", "developer-infra", "vercel"]
summary: "Vercel has released AI SDK 7, adding a 7.0.0 package update with agent-focused APIs and migration changes for developers building AI apps."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: AI SDK 7 is now available"
    url: "https://vercel.com/changelog/ai-sdk-7"
  - title: "AI SDK Documentation: Introduction"
    url: "https://ai-sdk.dev/docs/introduction"
  - title: "npm Registry: ai latest"
    url: "https://registry.npmjs.org/ai/latest"
  - title: "Vercel AI SDK Changelog"
    url: "https://raw.githubusercontent.com/vercel/ai/main/packages/ai/CHANGELOG.md"
---

Vercel has released **AI SDK 7**, a new major version of its TypeScript toolkit for building AI applications and agent workflows. The public npm registry now lists the `ai` package at version 7.0.0, while Vercel's changelog frames the release around agent-oriented primitives rather than only model calls.

The update matters because AI application code is increasingly handling long-running tool use, approvals, streaming output, and multi-step agent loops. Vercel's documentation describes AI SDK as a toolkit for React, Next.js, Vue, Svelte, Node.js, and other environments, with core APIs for text generation, structured objects, tool calls, and agent building.

In the package changelog, the 7.0.0 entry includes work around `ToolLoopAgent` and `WorkflowAgent`, including runtime validation for `callOptionsSchema`, support changes for tool input refinement, and handling for workflow output behavior. Those details point to a release focused on making agent orchestration more explicit and less ad hoc for application developers.

It is still a major-version migration, so teams already using AI SDK should expect compatibility work. The same changelog notes removals and migration changes, including the removal of the deprecated `experimental_output` alias. For new projects, the release gives Vercel a cleaner baseline for agent interfaces at a time when model-provider choice, tool permissions, and streaming UX are becoming ordinary application concerns.
