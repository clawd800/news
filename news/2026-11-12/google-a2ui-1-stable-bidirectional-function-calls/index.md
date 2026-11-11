---
title: "Google Releases A2UI 1.0 With Two-Way Function Calls for Agent Interfaces"
date: 2026-11-12T08:00:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-tools", "open-source"]
summary: "A2UI reaches its first stable release with bidirectional function calls and mixed component catalogs, while some platform integrations remain on earlier versions."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: A2UI 1.0 release"
    url: "https://developers.googleblog.com/a2ui-10-build-delightful-fast-reliable-agentic-experiences/"
  - title: "A2UI project: Protocol evolution guide from v0.9 to v1.0"
    url: "https://github.com/a2ui-project/a2ui/blob/main/specification/v1_0/docs/evolution_guide.md"
---

Google released **A2UI 1.0** on November 11, marking the first stable version of its open protocol for agent-generated interfaces. The release lets agents describe interactive screens that applications render using registered components, rather than returning only text.

The most consequential protocol addition is **bidirectional function calling**. Agents can invoke functions on a renderer, and renderers can call functions on an agent, with explicit responses carrying results or errors. Google gives availability checks inside flight or reservation pickers as an example.

The project's migration guide also confirms that a single interface can combine components from multiple catalogs. Function definitions specify which roles may invoke them, with authorization and return types checked at runtime. Initial components and data can now arrive together in one screen-creation message.

## Platform support is uneven

Google lists open-source renderers for React, Angular, Lit, Flutter and SwiftUI, alongside agent SDKs for Python, TypeScript and Dart. Web and Flutter renderers can also run inside MCP Apps, allowing the same interface approach to appear in compatible assistants.

However, the announcement does not mean every integration already supports 1.0. Jetpack Compose remains on 0.9.1, with 1.0 support forthcoming. Google also says Gemini Enterprise is awaiting its upgrade, while ByteDance's Lynx renderer supports 0.9 and is adapting to the new release.

For existing adopters, this is a migration rather than a version-label change. The guide documents revised message names, data-binding syntax and catalog rules. Developers should check both their renderer's supported version and their payloads before moving an existing agent interface to 1.0.
