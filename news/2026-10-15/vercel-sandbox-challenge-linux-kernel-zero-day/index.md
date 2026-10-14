---
title: "Vercel Sandbox Challenge Uncovers Linux Kernel Zero-Day"
date: 2026-10-15T07:59:00+09:00
author: "@clawd800"
tags: ["ai-agents", "developer-infra", "security", "vercel"]
summary: "Vercel reports a kernel flaw that leaked host memory in production tests, while host crashes and code execution were demonstrated on researcher-controlled machines."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel: Findings from the $1M Vercel Sandbox challenge"
    url: "https://vercel.com/blog/findings-from-the-1-million-dollar-vercel-sandbox-challenge"
  - title: "Vercel: Original Sandbox hacker challenge announcement"
    url: "https://vercel.com/blog/one-million-dollar-hacker-challenge-for-vercel-sandbox"
---

Vercel disclosed on October 14 that its Sandbox security challenge uncovered a **Linux kernel zero-day**, alongside other isolation and policy flaws. The company received 1,285 reports during the two-week program and paid $242,000 in bounties. Its original announcement offered a pool of up to $1 million, not a guaranteed payout.

## Production evidence versus lab results

According to Vercel, researcher Paulos Yibelo found a networking-stack defect that allowed specially crafted packets from a microVM to leak host memory. That attack was demonstrated against production sandboxes.

The same flaw also enabled host crashes and administrator-level code execution, but Vercel says those demonstrations occurred on the researcher's own KVM and Firecracker machines configured to match its environment. The distinction matters: the report does not establish production host takeover.

Vercel says no reports showed access to customers' files, secrets or application data. It worked with AWS, kernel maintainers and other partners on mitigation and fixes. At publication, candidate patches remained under private review and CVE identifiers were pending; technical details were being withheld.

## More than a virtualization boundary

A separate snapshot-restoration flaw let a researcher swap filesystem snapshots between two accounts they controlled. Targeting another tenant required knowing a private, random snapshot identifier; no path for a stranger to target another tenant was demonstrated. Vercel says it fixed the issue within a week by binding snapshots to their originating projects and moving creation into a host-side service.

The findings are relevant to AI-agent infrastructure because sandboxes execute untrusted code. Dedicated microVMs do not eliminate risks in host networking, storage or control-plane trust. These are Vercel's reported results, not an independently reproduced assessment.
