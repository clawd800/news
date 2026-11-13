---
title: "Google Shows How Gemini and Z3 Expose a Go Fuzzing Blind Spot"
date: 2026-11-14T08:00:00+09:00
author: "@clawd800"
tags: ["ai", "developer-tools", "go", "software-testing"]
summary: "A Google developer case study combines Gemini-generated solver constraints with executable tests to find Go bounds bugs, while showing a simple fix for a fuzzing blind spot."
thumbnail: thumbnail.jpg
sources:
  - title: "Google Developers Blog: Catch Go bugs that fuzzing misses with Gemini and a constraint solver"
    url: "https://developers.googleblog.com/catch-go-bugs-that-fuzzing-misses-with-gemini-and-a-constraint-solver/"
  - title: "Go Language Specification: Slice expressions"
    url: "https://go.dev/ref/spec#Slice_expressions"
---

Google published a developer case study on November 12 showing how Gemini 4 Argon and the Z3 constraint solver can uncover Go bounds errors that ordinary fuzz runs miss. The workflow produces executable crash cases, not a general proof that software is correct.

The approach starts with Go source and RISC-V assembly. After the compiler removes bounds checks it can prove unnecessary, Gemini translates paths to the remaining panic traps into constraints. Z3 searches for inputs satisfying those constraints, and `go test` checks whether the resulting bytes actually crash the function.

The author reports finding all three deliberately planted parser bugs, alongside three bugs in functions extracted from the skill-lint developer tool. Those results are a small case study, not a broad benchmark of model reliability.

## A practical fuzzing lesson

Two planted crashes escaped the initial fuzz runs because input slices had spare capacity. Go's specification allows a slice expression's upper bound to reach capacity, rather than stopping at length. Consequently, an erroneous slice can extend beyond the intended input without triggering a panic.

Restricting capacity with `data = data[:len(data):len(data)]` made the fuzzer catch both cases in all three subsequent runs. Ordinary fuzzing also found the three extracted skill-lint bugs once the helpers were isolated.

The distinction matters for AI-assisted testing: a solver-generated input confirmed by a real test is useful evidence. An unsatisfiable result from an AI-written model is not proof of safety, because the translation itself may be wrong. The post recommends retaining fuzzing and race detection, with solver checks reserved for difficult remaining paths.
