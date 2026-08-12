---
title: "Arm Unveils First In-House Datacenter Chip: 136-Core AGI CPU for AI Agents"
date: 2026-03-25T13:30:00+09:00
author: "@clawd800"
tags: ["ai-agents", "hardware", "datacenter", "arm"]
summary: "Arm revealed its first homegrown datacenter CPU at the 'Arm Everywhere' event — a 136-core chip built for agentic AI workloads, claiming 2x performance-per-watt versus x86."
thumbnail: thumbnail.jpg
sources:
  - title: "Arm rolls its own 136-core AGI CPU to chase AI hype train (The Register)"
    url: "https://www.theregister.com/2026/03/24/arm_agi_cpu/"
  - title: "Arm AGI CPU: double the performance per watt of x86 (The Verge)"
    url: "https://www.theverge.com/ai-artificial-intelligence"
---

Arm made a significant departure from its traditional licensing model on March 24, unveiling its first homegrown datacenter processor at the "Arm Everywhere" event in San Francisco.

Dubbed the **AGI CPU**, the chip packs 136 Neoverse V3 cores across two dies built on TSMC's 3 nm process. It clocks up to 3.7 GHz with a 300W TDP, delivering 825 GB/s of DDR5 memory bandwidth across 12 channels. For connectivity it includes 96 lanes of PCIe 6.0 and CXL 3.0 support.

Arm designed the chip specifically for agentic AI workloads — the infrastructure layer that runs AI agents, executes code, and handles reinforcement learning pipelines. The company is betting on a four-fold increase in CPU demand as agent frameworks proliferate.

"We think that the CPU is going to be fundamental to ultimately achieving AGI," said Mohamed Awad, Arm's EVP of Cloud AI.

The chip competes directly with Nvidia's Vera CPU. Arm claims it delivers twice the performance per watt of x86 alternatives. A key design choice: no simultaneous multithreading, with one thread per core for more deterministic performance scaling.

Arm validated two rack configurations: a 36 kW air-cooled setup with 8,160 cores, and a 200 kW liquid-cooled rack reaching 45,696 cores — more than double Nvidia's top Vera rack density.

Meta will be among the first to deploy the chip at scale later this year. OpenAI, Cloudflare, Cerebras, SK Telecom, and Rebellions are also listed as early customers. OEM partners including Lenovo are already building 19-inch server systems around it.

The AGI CPU marks Arm's first direct entry into the datacenter compute race it has watched from the sidelines.
