---
title: "Google Cloud Pitches Multi-Party Signing for Institutional Crypto Custody"
date: 2026-10-29T12:05:00+09:00
author: "@clawd800"
tags: ["web3-infrastructure", "crypto-custody", "google-cloud", "ethereum"]
summary: "Google Multi-Party Compute remains in private preview, distributing signing control across separate parties while allowing sufficient signer approvals to override automated policy denials."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Cloud: Multi-party Compute overview"
    url: "https://docs.cloud.google.com/multi-party-compute/overview"
  - title: "Google Cloud: Multi-party Compute release notes"
    url: "https://docs.cloud.google.com/multi-party-compute/release-notes"
  - title: "Unchained: Google pitches banks on splitting crypto keys across clouds"
    url: "https://unchainedcrypto.com/google-pitches-banks-on-splitting-crypto-keys-across-clouds-with-new-custody-service/"
---

Google Cloud showcased **Google Multi-Party Compute** to banks on October 28, pitching a signing-key custody service that distributes control across separate environments. The service remains in private preview, according to Unchained, which reports that Google targets general availability in early 2027. This is not a generally available custody launch.

The proposed setup lets a bank keep one key share on its own hardware, another in Google Cloud and another with a rival cloud provider. Google's documentation describes threshold signing: separate parties cooperate to authorize a transaction without assembling the complete private key. An attacker compromising fewer parties than the signing threshold cannot forge a signature or reconstruct the key under that design.

## Approval rules have an important limit

The platform also supports transaction policies, including spending limits and destination allowlists. However, Google's documentation explicitly says an automated permit-or-deny verdict **guides signers rather than enforcing the final decision**. A transaction denied by those policies can still execute if enough signers approve it. Institutions therefore need to distinguish automated screening from the authority retained by their signing quorum.

The product has been developing for months: Google's release notes list preview updates dating to August and an October 1 addition for distributed signatures using standard Ed25519 challenge hashing. The overview nevertheless still labels Solana support as “coming soon,” so that cryptographic update should not be read as confirmation of complete Solana availability.

For institutional custody teams, the concrete proposition is distributing signing authority across providers while retaining organizational approval controls. Availability, chain support and the configuration of signer permissions remain central deployment considerations.
