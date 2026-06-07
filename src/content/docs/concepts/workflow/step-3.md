---
title: Step 3 — Design (Optional)
description: Architecture diagrams and Architecture Decision Records.
---

## Purpose
Produce architecture diagrams and ADRs. This step is optional — users can skip directly to Step 3.5.

## Agent
`04-Design`

## Output Artifacts
- `.drawio` source file and exported PNG
- One ADR markdown file per material architectural decision

## Diagram Generation
The Draw.io MCP server generates editable `.drawio` files with Azure service icons. Diagrams include resource groupings, network topology, and data flow annotations.

## Architecture Decision Records
Each material decision (SKU selection, network topology, identity model, etc.) is captured as a structured ADR with context, decision, consequences, and alternatives considered.

## Challenger Review
Opt-in only — not mandatory at this step.

## Gate
No gate — flows directly to Step 3.5 (Governance).
