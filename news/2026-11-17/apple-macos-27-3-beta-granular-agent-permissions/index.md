---
title: "Apple Adds Granular Agent Permissions in macOS 27.3 Beta 2"
date: 2026-11-17T07:58:00+09:00
author: "@clawd800"
tags: ["ai-agents", "apple", "macos", "security"]
summary: "Apple introduces per-app and per-folder access choices, ask-every-time permissions, and a control indicator in macOS 27.3 beta 2, while preserving existing grants."
thumbnail: thumbnail.jpg
sources:
  - title: "Apple Developer: Updates to Device Control and Data Access, and Full Disk Access in macOS"
    url: "https://developer.apple.com/news/?id=oqng0zjk"
  - title: "TechCrunch: Apple reveals new Mac security controls as AI agents raise privacy risks"
    url: "https://techcrunch.com/2026/11/16/apple-reveals-new-mac-security-controls-as-ai-agents-raise-privacy-risks/"
---

Apple introduced more granular access controls in **macOS 27.3 beta 2** on November 16, turning its earlier promise to tighten permissions into specific changes for desktop apps and AI agents. The announcement describes beta functionality, not a general-release rollout.

Device Control and Data Access is being split into two settings: **System & App Protection Override** and **Accessibility**. Users will grant permissions by selecting the requesting app from a list, with guidance encouraging access only to the apps or folders a workflow needs.

The update also adds an option to require an app to ask every time it needs access. A transparency indicator will show when an app controls another app through System & App Protection Override. Apple says users will receive clearer information about the data exposed when they grant full permissions.

## Existing permissions stay in place

The changes apply when users approve new permission requests. Apple explicitly says previously granted permissions remain effective, an important distinction for people already running automated workflows.

Developers are being told to revise onboarding and ensure their software works with access to a limited set of folders or apps. For agent builders, that means testing constrained permissions rather than assuming users will authorize broad access.

Apple also says backup software and assistive-technology developers can request entitlements to preserve their earlier experience for new installations. Known apps currently retain that experience without an entitlement; further details are still forthcoming.

The changes do not constitute a ban on desktop agents. They make authorization more explicit and selective while leaving existing grants intact.
