---
title: "Git 2.56 Adds Conflict-Only Staging and Faster Repository Operations"
date: 2026-09-29T15:42:00+09:00
author: "@clawd800"
tags: ["git", "developer-tools", "open-source"]
summary: "Git 2.56 introduces conflict-only staging, faster merge-base searches, and path-walk repacking compatible with server-side bitmap and delta-island features."
thumbnail: thumbnail.jpg
sources:
  - title: "GitHub Blog: Highlights from Git 2.56"
    url: "https://github.blog/open-source/git/highlights-from-git-2-56/"
  - title: "Git project: Git 2.56 release notes"
    url: "https://raw.githubusercontent.com/git/git/v2.56.0/Documentation/RelNotes/2.56.0.adoc"
---

Git 2.56 introduces a targeted way to stage resolved merge conflicts alongside performance changes for large repositories. GitHub detailed the release on September 28, and the upstream release notes confirm the additions.

The new **`git add --resolved`** command considers only paths currently marked as unmerged in the index. Before staging, it checks selected regular files for leftover conflict markers. If it finds any, it reports the affected paths and leaves the index unchanged.

That separates conflict resolution from unrelated work: a developer can stage repaired files without also staging other local edits. A pathspec can narrow the selection further. The check does not prove that a resolution is logically correct; it catches remaining textual markers, while resolved deletions and binary conflicts can be staged normally.

Git also shortens merge-base searches by stopping traversal once additional common ancestors cannot be found. These calculations underpin merges, pull-request comparisons and review ranges. GitHub reports one monorepo case falling from 0.68 seconds to 0.01 seconds, a workload-specific result rather than a universal speedup.

For repository hosts, **path-walk repacking now supports reachability bitmaps and delta islands**. Path-walk groups objects by their location in the tree to find efficient delta relationships. The added compatibility lets hosts evaluate smaller packs while retaining bitmap-assisted serving and constraints on which object groups may share delta bases.

Path-walk repacking remains opt-in. Together, the changes give developers a more selective staging workflow and operators additional options for reducing repository traversal and storage costs.
