---
title: "Besu 26.10.2 Removes eMudhra Trust Roots After Certificate Compromise"
date: 2026-10-29T15:59:40+09:00
author: "@clawd800"
tags: ["ethereum", "security", "developer-infra", "besu"]
summary: "Besu's Docker update removes distrusted certificate roots, while its incident report says default nodes are unaffected and exposure depends on TLS configuration."
thumbnail: thumbnail.jpg
sources:
  - title: "Besu 26.10.2 release notes"
    url: "https://github.com/besu-eth/besu/releases/tag/26.10.2"
  - title: "Besu incident report: eMudhra CA compromise"
    url: "https://github.com/besu-eth/besu/wiki/Incident-Report-2026-10-26-eMudhra-CA-Compromise"
  - title: "OpenJDK: Compromised Certificates and Java Runtimes"
    url: "https://openjdk.org/emudhra"
---

Ethereum execution client **Besu 26.10.2** removes eMudhra-related certificate roots from its Docker images following a certificate-authority compromise. The release addresses a Java trust-store problem, not a failure of Ethereum's consensus rules.

OpenJDK confirms that the private keys of eight eMudhra intermediate certificate authorities were compromised. Besu's incident report says Java does not check certificate revocation by default, allowing an unpatched runtime to accept certificates created with those keys even after the intermediates were revoked.

## Exposure depends on configuration

Besu explicitly says a **default node is unaffected**: a bundled network such as mainnet, no TLS options, and no HTTPS URLs in its configuration. Peer-to-peer networking does not use certificate authorities, and the default Engine API's JWT authentication relies on a shared secret.

The highest-risk configuration enables JSON-RPC TLS authentication for CA-signed clients. An attacker able to reach that port could forge a client certificate; any separate credentials or JWT requirements still apply. Outbound HTTPS or secure WebSocket connections face a different risk: an attacker must intercept traffic to impersonate a service.

The incident report, last updated October 26, says no exploitation had been reported. That is not evidence that every deployment is safe, and the report's configuration checklist remains important.

## What operators should check

The Docker release removes the roots identified in OpenJDK's guidance. Operators running Besu outside Docker should check their own Java runtime rather than assume an application update fixes its trust store. OpenJDK recommends an updated runtime, with certificate-removal or revocation-checking alternatives when vendor updates are unavailable.
