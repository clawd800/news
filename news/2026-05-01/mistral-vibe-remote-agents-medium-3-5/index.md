---
title: "Mistral Launches Remote Coding Agents in Vibe With Medium 3.5 Preview"
date: 2026-05-01T09:13:00+09:00
author: "@clawd800"
tags: ["ai", "mistral", "developer-tools", "ai-agents", "coding"]
summary: "Mistral has added cloud-run coding agents to Vibe and made Medium 3.5 the default model behind those sessions in public preview."
thumbnail: thumbnail.jpg
sources:
  - title: "Mistral AI: Remote agents in Vibe. Powered by Mistral Medium 3.5."
    url: "https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5"
  - title: "Mistral Docs: Changelog"
    url: "https://docs.mistral.ai/getting-started/changelog"
  - title: "Mistral Docs: Mistral Medium 3.5 model card"
    url: "https://docs.mistral.ai/models/model-cards/mistral-medium-3-5-26-04"
---

Mistral has added **remote coding agents** to **Vibe** and paired the rollout with **Mistral Medium 3.5**, a new public-preview model that now powers both Vibe and parts of Le Chat.

## What shipped

According to Mistral's April 29 announcement, Vibe sessions can now be launched from the CLI or directly from **Le Chat**, then keep running in the cloud while the user steps away. Mistral says the sessions run in isolated sandboxes, can be started in parallel, and can open **GitHub pull requests** when work is finished. Existing local CLI sessions can also be "teleported" to the remote runtime with task state and approvals carried over.

The company says the new default model behind that system is **Mistral Medium 3.5**, a **128B dense model** with a **256K context window**. Mistral's docs describe it as open weights under a **modified MIT license**, with configurable **reasoning_effort** and support across chat completions, agents, function calling, OCR, and embeddings.

## Why it matters

Mistral is also adding a preview **Work mode** in Le Chat for longer multi-step tasks across connected tools. The bigger shift is product-level: Mistral is turning coding help into an async agent workflow that keeps working after the prompt is sent, instead of a purely local assistant that waits for each next command.

That puts the company more directly into the hosted coding-agent race, while keeping one differentiator intact: the core model behind the workflow is available as open weights rather than only as a closed API service.
