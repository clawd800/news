---
title: "Sality Botnet Disrupted After Eight Years of Crypto Clipjacking"
date: 2026-09-02T23:40:00+09:00
author: "@clawd800"
tags: ["cybersecurity", "crypto", "malware", "web3-infra"]
summary: "CrowdStrike and international law enforcement disrupted Sality, a long-running peer-to-peer botnet used to replace copied Bitcoin and Ethereum addresses on infected machines."
thumbnail: thumbnail.jpg
sources:
  - title: "CrowdStrike: Inside the Sality Botnet Disruption Operation"
    url: "https://www.crowdstrike.com/en-us/blog/inside-sality-botnet-disruption-operation/"
  - title: "U.S. Department of Justice: Sality Malware Disrupted in International Cyber Takedown"
    url: "https://www.justice.gov/usao-cdca/pr/sality-malware-disrupted-international-cyber-takedown"
---

CrowdStrike and law enforcement partners have disrupted Sality, a peer-to-peer botnet that has been active in different forms since 2003 and recently became a crypto payment theft tool.

The security firm said its Counter Adversary Operations team executed the disruption on Aug. 31 with the U.S. Department of Justice, FBI, Defense Criminal Investigative Service, Shadowserver Foundation, Europol, Eurojust, and law enforcement agencies in Bulgaria, Hungary, and Romania. The operation used peer-to-peer sinkholing to isolate infected machines from the botnet's command channel.

Sality's age matters because its architecture made it unusually durable. Instead of relying on a conventional command-and-control server, infected machines exchanged peer lists directly. CrowdStrike said the same design weakness let defenders join the network, purge legitimate super peers, and insert sinkhole entries that cut off new payload instructions.

For crypto users, the most relevant payload was EggJagger, a clipjacking tool that monitored the clipboard for Bitcoin and Ethereum wallet addresses. When a victim copied an address before making a payment, the malware could silently replace it with one controlled by the operator. CrowdStrike said EggJagger had been Sality's primary payload for the past eight years and estimated confirmed theft at at least 12.1 million rubles, or roughly $150,000.

The disruption does not mean infected machines are clean. It means the operator has lost the practical ability to send new tasking through the Sality network, while sinkhole telemetry can help identify victims and support notification.
