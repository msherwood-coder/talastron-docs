---
title: Kinetic AI Concepts Reference
description: Full conceptual documentation for the Talastron Kinetic AI agentic infraops pattern.
---

This page contains the full conceptual reference for the Kinetic AI pattern that underpins
Talastron Kinetic AI.

:::note
The source pattern is the open-source [azure-agentic-infraops](https://github.com/jonathan-vella/azure-agentic-infraops)
project by Jonathan Vella, published under the MIT licence.
The full extracted reference is also available in the repository at
[`reference/APEX-concepts.md`](https://github.com/msherwood-coder/Development/blob/main/reference/APEX-concepts.md).
:::

## Key sections

- [Executive Summary](/reference/apex-concepts/#executive-summary)
- [Golden Principles](/reference/apex-concepts/#golden-principles)
- [System Architecture](/concepts/architecture/)
- [Agent Architecture](/concepts/agents/)
- [Skills and Instructions](/concepts/skills/)
- [Workflow Engine](/concepts/workflow-engine/)
- [MCP Integration](/concepts/mcp-integration/)
- [Azure Landing Zones Integration](/reference/apex-concepts/#azure-landing-zones)
- [Network Planning](/reference/apex-concepts/#network-planning)

## Golden Principles

| # | Principle | What it means |
|---|---|---|
| 1 | Repository Is the System of Record | All context lives in-repo — no knowledge in chat or docs |
| 2 | Map, Not Manual | Instructions point to deeper sources; no monolithic files |
| 3 | Enforce Invariants, Not Implementations | Set boundaries, allow autonomy within them |
| 4 | Parse at Boundaries | Validate inputs and outputs at module edges |
| 5 | AVM-First, Security Baseline Always | Azure Verified Modules and security defaults — no exceptions |
| 6 | Golden Path Pattern | Shared utilities over hand-rolled helpers |
| 7 | Human Taste Gets Encoded | Review feedback becomes rules, not one-off fixes |
| 8 | Context Is Scarce | Every token must earn its keep |
| 9 | Progressive Disclosure | Start small, drill deeper when needed |
| 10 | Mechanical Enforcement Over Documentation | Linters and validators over prose |

## Intellectual foundations

The Kinetic AI pattern synthesises two bodies of work:

**Harness Engineering (OpenAI, Feb 2026)** — building a product with zero manually-written code.
Key insights: repository as system of record, map not manual, enforce invariants not implementations,
human taste gets encoded, garbage collection through continuous enforcement.

**Ralph (Snarktank / Geoffrey Huntley)** — autonomous AI agent loop pattern.
Key insights: fresh-context iteration model, right-sized task decomposition,
`AGENTS.md` as compounding knowledge, feedback loops as mandatory infrastructure,
deterministic stop conditions.