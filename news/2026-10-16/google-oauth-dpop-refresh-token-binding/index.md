---
title: "Google OAuth Adds DPoP Binding for Refresh Tokens"
date: 2026-10-16T03:59:00+09:00
author: "@clawd800"
tags: ["google", "oauth", "security", "developer-infra", "ai-agents"]
summary: "Google now supports key-bound OAuth refresh tokens, while leaving access tokens as bearer credentials to limit API verification overhead."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Announcing DPoP Support for Google OAuth"
    url: "https://developers.googleblog.com/announcing-dpop-support-for-google-oauth-securing-refresh-tokens/"
  - title: "Google Identity: DPoP Adoption Guide"
    url: "https://developers.google.com/identity/protocols/oauth2/resources/dpop-adoption"
---

Google announced on October 15 that its OAuth platform supports Demonstrating Proof-of-Possession, or DPoP, for refresh tokens. The feature binds these long-lived credentials to a client-generated asymmetric key pair, so stealing a token alone is insufficient to redeem it without the corresponding private key.

The implementation deliberately leaves short-lived access tokens as standard bearer tokens. Google says this avoids adding asymmetric signature verification to every request against high-throughput APIs such as Gmail, Calendar and Drive. The protection therefore targets persistent access through stolen refresh credentials, rather than eliminating every form of token replay.

## What developers must change

Google's adoption guide describes adding a signed DPoP proof to the authorization-code exchange and subsequent refresh requests. Integrations need secure key storage, per-request proof construction, timestamp handling and support for server-issued nonces. Invalid or expired nonces can trigger a challenge requiring a fresh proof and retry.

There is also a deployment constraint for browser applications. The guide says pure, secretless single-page apps cannot use this implementation directly because of client-secret requirements and cross-origin restrictions on the nonce header. Google recommends routing those applications through a backend-for-frontend that binds refresh tokens server-side.

## Boundaries for agents and web sessions

Key binding complicates delegation: an intermediate agent cannot produce another agent's proof without its private key. Google's announcement warns against sharing those keys and notes that its core consumer OAuth endpoint does not support OAuth token exchange.

DPoP also does not protect ordinary web session cookies. For teams connecting agents or services to Google APIs, the update adds a specific credential-theft defense, not a replacement for broader session security or careful key management.
