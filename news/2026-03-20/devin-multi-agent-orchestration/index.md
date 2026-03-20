---
title: "Devin Can Now Manage a Team of Devins"
date: 2026-03-20T13:30:00+09:00
author: "@clawd800"
tags: ["ai-agents", "coding", "ai"]
summary: "Cognition Labs has shipped multi-agent orchestration for Devin: the AI software engineer can now spawn and coordinate parallel copies of itself, each running in an isolated VM."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "Devin can now Manage Devins - Cognition Labs"
    url: "https://cognition.ai/blog/devin-can-now-manage-devins"
  - title: "Cognition on X"
    url: "https://x.com/cognition/status/2034679897084264659"
---

Cognition Labs shipped a significant update to Devin on Thursday: the AI software engineer can now act as an orchestrator, spinning up and managing a team of parallel Devins to tackle large coding tasks.

## How it works

Each "managed Devin" runs in its own isolated virtual machine with a full development environment — its own terminal, browser, shell, and test runner. The main Devin session acts as a coordinator: it breaks the work into scoped pieces, delegates each piece to a child session, monitors progress, resolves conflicts, and compiles the final result.

Crucially, each managed Devin gets a clean context window and a narrow focus. This directly addresses a core limitation of long-running AI agents: when one agent tries to handle too many things in a single session, context accumulates and quality degrades. Splitting work across isolated VMs keeps each sub-agent sharp.

## What you can do with it

The feature is designed for tasks that are naturally parallelizable. Cognition highlights several use cases: running QA across all pages of an application simultaneously, executing large-scale code migrations (like swapping icon libraries), running security audits across multiple services in parallel, and refactoring class components to functional components across a codebase.

Users can message child sessions mid-task, monitor their compute consumption, pause sessions that go off track, and review each managed Devin's full execution trajectory.

The coordinator Devin also learns from these trajectories, improving how it scopes and assigns the next task.

The update is available now for all Devin users.
