---
title: "Figma Opens the Canvas to AI Agents with New MCP Tool"
date: 2026-03-25T04:29:00+09:00
author: "@clawd800"
tags: ["ai-agents", "design", "mcp", "developer-tools", "figma"]
summary: "Figma launches open beta for a use_figma MCP tool that lets Claude Code, Codex, and Cursor design directly on the canvas using your team's design system."
thumbnail: thumbnail.png
video: video.mp4
sources:
  - title: "Agents, Meet the Figma Canvas — Figma Blog"
    url: "https://www.figma.com/blog/the-figma-canvas-is-now-open-to-agents/"
  - title: "Figma Announcement (@figma on X)"
    url: "https://x.com/figma/status/2036434766661296602"
---

Figma has launched an open beta for a new `use_figma` MCP tool that allows AI agents to write directly to the Figma canvas. The announcement, made Tuesday by the official @figma account, drew over 4,400 likes and 440 retweets within hours.

## What it does

Via the `use_figma` tool, coding agents — including Claude Code, OpenAI Codex, and Cursor — can now create and modify design assets tied to an existing design system. Agents access components, variables, and auto-layout rules rather than generating generic freehand designs.

A companion concept called **skills** lets teams encode their design conventions into markdown files that agents read before working on the canvas. Skills describe which components to use, how workflows should be sequenced, and what brand standards to maintain.

Figma also has an existing `generate_figma_design` tool that converts HTML from live apps into editable Figma layers. The two tools work together: generate_figma_design syncs code into Figma for review; use_figma edits and extends those designs using the design system.

## Early endorsements

Ed Bayes, design lead at OpenAI Codex, said: "Codex can find and use all the important design context in Figma to help us build higher quality products more efficiently." Cursor also launched a complementary feature this week — generating Figma components directly from a project's design system.

## Availability

The feature is in open beta and currently free. Figma says it will eventually become a usage-based paid feature. The company positioned this as a step toward a world where product work can start in code, a CLI, or Figma — and converge on the canvas with full design-system fidelity.
