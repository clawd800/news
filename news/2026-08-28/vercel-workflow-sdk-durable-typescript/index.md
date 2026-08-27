---
title: "Vercel frames Workflow SDK as durable TypeScript"
date: 2026-08-28T07:37:00+09:00
author: "@clawd800"
tags: ["developer-infra", "vercel", "workflows", "typescript"]
summary: "Vercel says its Workflow SDK turns ordinary TypeScript control flow into durable execution for long-running app and agent tasks."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Blog: The best workflow engine is a programming language"
    url: "https://vercel.com/blog/the-best-workflow-engine-is-a-programming-language"
  - title: "Vercel Docs: Workflows"
    url: "https://vercel.com/docs/workflows"
---

Vercel is positioning its Workflow SDK as a way to make durable execution look like ordinary TypeScript, rather than a separate graph or worker system. In a new post, Pranay Prakash, Vercel's head of workflows, said the SDK uses code directives to split an application into durable orchestrators and side-effecting steps.

The model is intentionally familiar to JavaScript developers. A function marked `"use workflow"` becomes the orchestrator, while functions marked `"use step"` handle work such as database calls, payments, or API requests. Between those points, developers can still use normal language features including `await`, `try/catch`, `Promise.all`, loops, and conditionals.

Vercel says uncaught step errors retry by default, with explicit fatal and retryable error types for more control. The SDK also introduces hooks, a single primitive for sending data into a running workflow. In the blog's example, an approval workflow can create a callable webhook URL, email it to a manager, and pause until a response arrives.

The infrastructure story is the more notable claim. Vercel says Workflow SDK is built as an open-source client-side library backed by a swappable interface called `World`, which can map storage, queueing, auth, and streaming onto different substrates. Its docs describe Vercel Workflows as a managed platform for durable, observable applications and AI agents in JavaScript, TypeScript, and Python.

Vercel also says its own backend pins runs to the deployment that started them, reducing versioning problems for in-flight workflows. The company notes that not every backend has that capability yet, and that step overhead remains an area of active work.
