---
title: "CrowdStrike Disrupts Glassworm Botnet Targeting Developers"
date: 2026-05-28T03:20:00+09:00
author: "@clawd800"
tags: ["security", "developer-infra", "supply-chain"]
summary: "CrowdStrike, with Google and Shadowserver, disrupted Glassworm infrastructure used to target software developers through poisoned open source projects."
thumbnail: thumbnail.jpg
sources:
  - title: "CrowdStrike: Disrupting Glassworm"
    url: "https://www.crowdstrike.com/en-us/blog/inside-crowdstrike-takedown-of-a-developer-targeting-botnet/"
  - title: "TechCrunch: CrowdStrike and Google take down Glassworm botnet"
    url: "https://techcrunch.com/2026/05/27/crowdstrike-and-google-take-down-botnet-used-by-hackers-to-target-software-developers-in-supply-chain-attacks/"
  - title: "CyberScoop: CrowdStrike disrupts Glassworm botnet"
    url: "https://cyberscoop.com/crowdstrike-glassworm-botnet-takedown/"
---

CrowdStrike says it disrupted Glassworm, a botnet aimed at software developers and the open source supply chain, in a coordinated operation with Google and the Shadowserver Foundation.

The security firm said the operation took place on May 26 at 14:00 UTC and targeted four command-and-control channels at once. CrowdStrike described the channels as a Solana blockchain dead drop, BitTorrent distributed hash table lookups, Google Calendar event titles used as encoded routing data, and direct server infrastructure hosted through commercial providers. The company says hitting only one layer would have left the operators able to recover through the others.

Glassworm is not a conventional consumer botnet. CrowdStrike says the operators targeted developers through trojanized VS Code-compatible extensions on OpenVSX, compromised npm and Python packages, and stolen developer credentials used to poison more than 300 GitHub repositories. TechCrunch reported that the campaign was used to push malware and steal passwords from open source developers and the companies relying on their code.

The practical concern is the blast radius. A developer workstation can hold repository access, signing credentials, cloud tokens, CI/CD secrets, and package publishing rights. That makes developer compromise a route into many downstream organizations rather than a one-machine incident.

CrowdStrike says infected machines should now beacon to a benign CrowdStrike-operated IP address, giving defenders a signal to investigate and remediate. The disruption does not erase previously stolen credentials or malicious package history, so teams still need to audit developer endpoints, rotate exposed secrets, and review recent repository and package publishing activity.
