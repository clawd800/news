---
title: "Vercel Adds Custom Audiences for OIDC Tokens"
date: 2026-06-24T19:37:00+09:00
author: "@clawd800"
tags: ["developer-infra", "security", "vercel", "oidc"]
summary: "Vercel deployments can now exchange OIDC tokens for provider-specific audience claims, tightening service-to-service authentication without adding long-lived secrets."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: Custom OIDC Token Audiences"
    url: "https://vercel.com/changelog/custom-oidc-token-audiences"
  - title: "Vercel Docs: OIDC Federation Reference"
    url: "https://vercel.com/docs/oidc/reference"
  - title: "Vercel Docs: Connect to Amazon Web Services (AWS)"
    url: "https://vercel.com/docs/oidc/aws"
---

Vercel has added custom audience support to its OIDC issuer, giving deployments a more precise way to authenticate with downstream cloud services.

The change lets a Vercel deployment request an OIDC token with a specific `aud` claim instead of relying only on the default audience tied to a Vercel owner or team. In practice, a function or build can exchange its existing Vercel-signed token for another token signed by the same issuer but targeted at a provider such as AWS STS.

That matters because the audience claim is one of the main checks a receiving service uses before trusting a token. If every backend accepts the same broad audience value, a token intended for one integration may be easier to replay elsewhere after a compromise. Provider-specific audiences narrow that path: a service can reject tokens whose `aud` value does not exactly match what it expects.

Vercel says the exchanged token keeps the original project, environment, owner, and expiration claims while updating the audience and adding an actor claim that records the delegation chain. Its OIDC docs now show helper-library support for an optional `audience` setting, including AWS examples where the trust policy must match the custom audience value.

The feature is not a new identity system. It is a smaller hardening layer for teams already using Vercel OIDC federation to avoid static cloud credentials. The useful test will be whether teams consistently configure strict audience checks in their cloud trust policies and internal APIs.
