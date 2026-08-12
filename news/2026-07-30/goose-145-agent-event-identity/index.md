---
title: "Goose 1.45 Adds Stable Agent Event IDs"
date: 2026-07-30T19:45:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-tools", "open-source", "github"]
summary: "Goose 1.45.0 adds stable agent event message identity, air-gapped documentation configuration, and model-provider fixes for the open source engineering agent."
thumbnail: thumbnail.jpg
sources:
  - title: "Goose v1.45.0 release"
    url: "https://github.com/aaif-goose/goose/releases/tag/v1.45.0"
  - title: "Goose PR #10716: Stable agent event message identity"
    url: "https://github.com/aaif-goose/goose/pull/10716"
  - title: "Goose PR #10294: Configurable GOOSE_DOCS_ROOT"
    url: "https://github.com/aaif-goose/goose/pull/10294"
  - title: "Goose PR #10630: Latest Gemini models"
    url: "https://github.com/aaif-goose/goose/pull/10630"
---

Goose, the open source engineering agent originally developed at Block, shipped version 1.45.0 with a set of changes aimed at making agent sessions more reliable across clients and provider backends.

The most notable addition is stable agent event message identity. The linked implementation says the change is meant to make streaming and persistence more reliable across Goose's Rust API and Agent Client Protocol support, while preserving provider-supplied identifiers where available. That matters for developer tools because agent sessions increasingly span desktop, CLI, and gateway surfaces where message updates need to remain traceable.

The release also adds a configurable `GOOSE_DOCS_ROOT`, allowing built-in documentation references to resolve against a configured docs root instead of only the public Goose docs site. The project frames that as useful for air-gapped or self-hosted environments, where teams may need local documentation access.

Provider support was updated as well. Goose added newer Gemini models to its Google provider catalog and adjusted Gemini 3.x request handling for sampling and thinking-level requirements. The release notes also list fixes for dynamic model discovery, current Grok support, Claude Code and Pi model-picker selections, OpenRouter inventory refreshes, and ACP tool-call output handling.

This is not a flashy launch, but it is a meaningful maintenance release for an agent project that depends on many moving parts. The changes point toward more durable sessions, better offline enterprise setup, and fewer provider-specific edge cases for developers using Goose as local agent infrastructure.
