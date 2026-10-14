---
title: "GitHub Says ModernBERT Cuts Secret-Scanning Time by 86%"
date: 2026-10-14T12:00:00+09:00
author: "@clawd800"
tags: ["ai", "developer-tools", "security", "github"]
summary: "GitHub details a compact secret-detection classifier that reduces post-push scan time and serving costs, with broader push protection planned for October."
thumbnail: thumbnail.jpg
sources:
  - title: "GitHub: GitHub's model for secret detection — finding more secrets with less noise"
    url: "https://github.blog/ai-and-ml/githubs-model-for-secret-detection-finding-more-secrets-with-less-noise/"
  - title: "GitHub: Secret protection must scale with software"
    url: "https://github.blog/ai-and-ml/github-copilot/secret-protection-must-scale-with-software/"
---

GitHub detailed a context-aware secret-scanning pipeline on October 13, reporting **86% lower median post-push scan execution time** than its previous LLM-based system. The company says the compact classifier also delivers approximately 98% lower serving costs and 11.5% higher repository owner-weighted acceptance of detected findings.

## A classifier instead of a generative model

The pipeline first uses regular expressions to identify potential credentials. A fine-tuned **ModernBERT** classifier then evaluates each candidate alongside its file path, variable names and surrounding code or text.

That context matters for generic secrets, which lack the distinctive prefixes of many provider-issued tokens. A password-shaped string might be a production credential, a test fixture or a documentation placeholder. The classifier estimates whether it is a real secret rather than generating code or prose.

GitHub says the acceptance improvement came from an A/B experiment against its previous pipeline. Weighting by repository owner reduces distortion from customers who resolve many alerts at once. These are company-reported measurements, not independent benchmarks or guarantees that every credential will be caught.

## Push protection remains a staged rollout

An October 7 companion announcement said organizations already using AI secret detection would automatically receive the new model for post-push scans, without an additional scanning charge.

Generic-secret push protection was in private preview in that announcement. GitHub planned broader availability later in October for organizations with Secret Protection on Enterprise Cloud and GitHub Teams, consuming AI credits.

The practical distinction is timing: post-push scanning flags credentials already committed, while push protection can stop them before repository history accepts them. Lower inference overhead makes that earlier intervention more practical at scale.
