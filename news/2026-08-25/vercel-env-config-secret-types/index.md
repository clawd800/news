---
title: "Vercel Splits Environment Variables Into Config and Secret Types"
date: 2026-08-25T11:37:00+09:00
author: "@clawd800"
tags: ["developer-infra", "security", "vercel", "secrets"]
summary: "Vercel replaced its Sensitive toggle for environment variables with explicit Config and Secret types, adding a policy for separate production secret values."
thumbnail: thumbnail.jpg
sources:
  - title: "Vercel Changelog: Environment variables now use Config and Secret types"
    url: "https://vercel.com/changelog/environment-variables-now-use-config-and-secret-types"
  - title: "Vercel Docs: Environment variables"
    url: "https://vercel.com/docs/environment-variables"
---

Vercel has changed how environment variables are classified, replacing its older **Sensitive** toggle with explicit **Config** and **Secret** types.

The update is a small interface change with practical security implications for teams that manage application settings through Vercel. Config values remain readable after saving for authorized members, making them suitable for non-sensitive settings such as public framework-prefixed variables or API endpoints. Secret values are still available to deployments and can be replaced, but Vercel says team members cannot view or retrieve the value after it is saved.

Existing environment variables that were marked Sensitive are automatically treated as Secrets, so projects do not need a migration for those values to keep working. Vercel's documentation now tells users to choose Config or Secret when adding variables from the dashboard or CLI.

The CLI path is also being updated. Developers can pass `--visibility config` or `--visibility secret` to `vercel env add` and `vercel env update`; the older `--no-sensitive` and `--sensitive` flags continue to map to the new types when visibility is omitted.

Vercel is also deprecating its Enforce Sensitive Environment Variables team policy, which previously required every team-created variable to be Sensitive. A new Separate Production Secret Values policy can require production Secret values to differ from the same key in Preview, Development, and custom environments.

For platform teams, the useful part is clearer intent: not every variable is a password, but secrets should stay write-only once stored.
