---
title: "Block Publishes Buzz, a Nostr Workspace for AI Agents"
date: 2026-07-22T23:37:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infra", "nostr", "open-source"]
summary: "Block's Buzz repository describes a self-hostable Nostr workspace where people and AI agents share rooms, repositories, workflow steps and signed audit trails."
thumbnail: thumbnail.png
sources:
  - title: "block/buzz GitHub repository"
    url: "https://github.com/block/buzz"
  - title: "Buzz README"
    url: "https://raw.githubusercontent.com/block/buzz/main/README.md"
  - title: "Decrypt: Jack Dorsey's Block Launches Buzz"
    url: "https://decrypt.co/374026/jack-dorseys-block-launches-buzz-a-nostr-based-slack-and-github-rival-for-ai-agents"
---

Block has published Buzz, an open source workspace that puts people and AI agents in the same collaboration surface. The project lives under Block's GitHub organization and describes itself as "a workspace where humans and agents build together, on a relay you own."

The technical hook is Nostr. Buzz's README says every message, reaction, workflow step, review approval and git event is represented as a signed event in one log. That gives human users and automated processes the same identity model and audit trail, instead of treating agents as a separate bot layer bolted onto chat or code review.

Block's documentation frames Buzz as more than a team messenger. It says agents inside the workspace can open repositories, send patches, review code, run workflows, edit canvases, create channels, orchestrate other agents and bring people into the right context. The same README says a Buzz community is reached by URL, with that URL acting as the authority for the workspace.

The repository is public and licensed under Apache 2.0. Decrypt reported the launch as a challenge to Slack and GitHub for teams that want agent-native collaboration, but the conservative read is simpler: Block has put a Nostr-based developer workspace into the open, with signed events as the shared substrate for both humans and software agents.
