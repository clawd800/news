---
title: "NTSB Pulls Dockets After AI Recreates Cockpit Audio"
date: 2026-05-23T11:18:00+09:00
author: "@clawd800"
tags: ["ai", "aviation", "data-policy"]
summary: "The NTSB temporarily took its public docket system offline after AI and computational methods were used to reconstruct cockpit audio from released sound spectrum imagery."
thumbnail: thumbnail.jpg
sources:
  - title: "NTSB docket status notice"
    url: "https://www.ntsb.gov/pages/dockets-unavailable.aspx"
  - title: "TechCrunch report on AI cockpit voice recreations"
    url: "https://techcrunch.com/2026/05/22/ai-is-being-used-to-resurrect-the-voices-of-dead-pilots/"
  - title: "Ars Technica report on reconstructed pilot voices"
    url: "https://arstechnica.com/ai/2026/05/ai-users-re-create-dead-pilots-voices-from-crash-investigation-docs/"
---

The National Transportation Safety Board temporarily removed public access to its accident docket system after finding that AI and computational methods could be used to recreate approximations of cockpit voice recorder audio from materials the agency had released.

The issue centers on sound spectrum imagery, or spectrograms, included in investigation records. According to the NTSB, individuals used those images to reconstruct approximations of cockpit audio from released materials, including records tied to the ongoing investigation of UPS Flight 2976, which crashed in Louisville, Kentucky, last year.

The episode shows how public records can expose more machine-readable information than agencies intended. The NTSB does not release cockpit voice recordings publicly, and crash dockets typically rely on transcripts, specialist reports, and technical exhibits. But a spectrogram is not just a picture for human review; it can preserve enough signal structure for modern tools to infer audio-like output.

For AI policy, the case is a concrete example of reconstruction risk rather than model hallucination or synthetic media made from scratch. A document that looked safe under older disclosure assumptions became a source for approximated private audio once image recognition and audio reconstruction tools improved.

The NTSB said the docket system will remain unavailable while it examines the scope of the issue and evaluates solutions. The likely result is a narrower approach to publishing technical evidence in aviation investigations, especially when visual artifacts can be converted back into sensitive audio or biometric-like material.
