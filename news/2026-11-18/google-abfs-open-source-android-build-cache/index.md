---
title: "Google Open-Sources ABFS to Accelerate Android Checkouts and Cached Builds"
date: 2026-11-18T07:58:53+09:00
author: "@clawd800"
tags: ["developer-infrastructure", "open-source", "android", "ai-agents"]
summary: "Google releases ABFS for lightweight Android workspaces and shared build caching, with benchmark gains dependent on cached results and network infrastructure."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Accelerating development for massive Git repositories"
    url: "https://developers.googleblog.com/accelerating-development-for-massive-git-repositories/"
  - title: "Google ABFS repository and benchmark documentation"
    url: "https://github.com/google/abfs"
---

Google open-sourced **Another Build File Service (ABFS)** on November 17, releasing infrastructure designed to shorten Android source checkouts and reuse build results across developers, continuous integration systems and coding agents.

ABFS combines a Linux kernel filesystem module, local daemons and server-side storage. Its content-addressable filesystem exposes directory metadata immediately and fetches file contents on demand, rather than downloading an entire source tree before work begins. Shared caching lets new workspaces reuse compilation work already completed elsewhere.

## Fast results, with cache conditions

Google's repository reports an average checkout time of **7.4 seconds with an empty local cache**, compared with 36 minutes and 19 seconds for its traditional workflow. A build using an empty local cache but a fully populated remote cache took **2 minutes and 11 seconds**, versus 80 minutes and 35 seconds conventionally.

Those measurements averaged three runs on a Google Cloud machine with 64 vCPUs and 256 GB of RAM, with the remote server in the same network. They are not evidence that uncached compilation becomes faster: with cache use disabled, ABFS took 99 minutes and 11 seconds, slower than the baseline.

## Parallel workspaces, operational trade-offs

Google demonstrated agents backporting, building and testing a change across several Android releases on one machine. Lightweight checkouts and shared caches address the repeated setup costs of those parallel workflows.

Adoption requires infrastructure, not just a Git option. The repository warns about network dependence, cache-server maintenance and nondeterministic build steps that reduce reuse. Android is the initial focus; Bazel support remains work in progress rather than a finished integration.
