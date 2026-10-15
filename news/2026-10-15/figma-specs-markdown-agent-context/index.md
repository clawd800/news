---
title: "Figma Specs Brings Shared Markdown Context to Design Agents"
date: 2026-10-15T16:00:00+09:00
author: "@clawd800"
tags: ["ai-agents", "design", "mcp", "developer-tools"]
summary: "Figma is rolling out Specs in open beta, connecting Markdown documents, canvas references, and coding agents through its MCP server."
thumbnail: thumbnail.jpg
sources:
  - title: "Figma: Build by design"
    url: "https://www.figma.com/blog/build-by-design/"
  - title: "TechCrunch: Figma announces new features to define how agents work on its platform"
    url: "https://techcrunch.com/2026/10/14/figma-announces-new-features-to-define-how-agents-work-on-its-platform/"
---

Figma has announced **Specs**, a Markdown-based workspace for sharing product and design context with teammates and AI agents. The feature is beginning an open-beta rollout on web, desktop, and mobile, with availability planned across paid plans.

Unlike a detached text file, a spec can reference work on the Figma canvas, including diagrams, designs, and code layers. Teams can develop requirements together, then pass that context to a coding agent through Figma’s Model Context Protocol server or use it to build a code layer inside Figma.

## Design rules become agent inputs

The announcement also expands the information teams can attach to design systems. Guidelines are entering open beta, while code sources are starting in closed beta; both are intended for paid plans. Code sources can come from a GitHub repository or an npm package, giving agents implementation context alongside visual components.

Figma is separately previewing centralized design-system management, including a map of dependencies and checks for gaps such as missing component descriptions or interactive states. Those previews should not be confused with generally available features.

## Code-backed prototypes move into open beta

Code layers, previously in private beta, are now rolling out in open beta on all plans. They bring working code onto the canvas so teams can review and refine interactive prototypes together.

For developers, the practical change is a more explicit handoff between design decisions and agent execution. Specs preserves shared requirements alongside the work they describe, while MCP carries that context between tools. Whether this produces more consistent implementations still depends on the quality of the supplied rules and human review.
