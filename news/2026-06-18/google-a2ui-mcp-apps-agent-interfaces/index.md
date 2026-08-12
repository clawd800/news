---
title: "Google Outlines A2UI Patterns for MCP App Interfaces"
date: 2026-06-18T07:37:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-tools", "mcp", "google"]
summary: "Google's A2UI team published three integration patterns for combining declarative agent interfaces with MCP Apps' iframe-based app model."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: A2UI + MCP Apps"
    url: "https://developers.googleblog.com/a2ui-and-mcp-apps/"
  - title: "A2UI: A2UI over MCP"
    url: "https://a2ui.org/guides/a2ui_over_mcp/"
  - title: "Model Context Protocol: MCP Apps Overview"
    url: "https://modelcontextprotocol.io/extensions/apps/overview"
---

Google's A2UI team has published a new guide for combining **Agent-to-User Interface** patterns with MCP Apps, aiming to give agent builders a middle path between plain chat responses and fully custom embedded applications.

The post frames the problem as a tradeoff. MCP Apps can return interactive HTML interfaces that run in a sandboxed iframe controlled by the host application, giving server authors room to build rich tools. A2UI, by contrast, focuses on declarative agent-driven interfaces that can feel more native to the host surface. Google's guidance describes three architectural patterns for mixing the two approaches rather than choosing one.

The first pattern serves native-feeling A2UI surfaces directly through MCP servers. The second embeds more complex, stateful iframe apps inside declarative views. The third injects generative UI components into existing applications, which could matter for teams that want agentic interfaces without rebuilding a whole product shell.

Google also points developers to an A2UI-over-MCP quick start built around a Recipe Studio demo. The documentation describes static A2UI content loaded from an MCP resource and dynamic A2UI served from an MCP tool, which makes the proposal more concrete than a design essay.

The significance is practical rather than flashy. As MCP spreads across agent clients, the next bottleneck is likely to be interface quality: agents need forms, previews, controls, and review surfaces that users can trust. Google's patterns suggest that agent UI work is moving from one-off demos toward reusable interface contracts between servers, hosts, and apps.
