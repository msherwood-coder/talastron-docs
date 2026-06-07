---
title: Workflow Engine
description: The DAG model, gates, session state, circuit breaker, and context compression.
---

## The DAG Model

The workflow is encoded as a machine-readable directed acyclic graph in `skills/workflow-engine/templates/workflow-graph.json`.

Each node has a type (agent-step, gate, subagent-fan-out, or validation), and each edge has a condition (on_complete, on_skip, or on_fail).

## The Five Gates

| Gate | After Step | Blocks Until |
|---|---|---|
| 1 | Requirements | Human approves requirements document |
| 2 | Architecture | Human approves assessment and cost estimate |
| 2.5 | Governance | Human approves governance constraints |
| 3 | IaC Plan | Human approves implementation plan |
| 4 | IaC Code | Automated validation passes (lint, build, review) |
| 5 | Deploy | Human approves deployment and verifies resources |

Never auto-advance past a gate. The Orchestrator always surfaces findings to the human first.

## Session State Schema

The `context/00-session-state.json` file tracks which step is active and all key decisions.

```json
{
  "schema_version": "1.0",
  "project": "my-workload",
  "current_step": 2,
  "iac_tool": "bicep",
  "decisions": {
    "region": "uksouth",
    "vnet_mode": "use-existing",
    "identity_model": "managed-identity"
  },
  "governance_trace": {
    "L0_discovered": true,
    "L1_plan": false,
    "L2_codegen": false,
    "L3_precheck": false
  }
}
```

## Circuit Breaker

Protects against runaway agent loops during deployment.

| Anomaly Pattern | Threshold | Action |
|---|---|---|
| Error repetition | 3 consecutive | Halt, write blocked finding |
| Empty response loop | 3 consecutive | Halt, escalate to human |
| Timeout cascade | 3 consecutive | Halt, check auth |
| Auth failure loop | 2 consecutive | Halt, prompt re-authentication |

## Context Compression Tiers

| Tier | Trigger | Strategy |
|---|---|---|
| full | Under 60% used | Load entire artifact |
| summarized | 60 to 80% used | Key H2 sections only |
| minimal | Over 80% used | Decision summaries only (under 500 chars) |

## Governance Attestation Chain

All four levels must be present before deployment executes.

| Level | Where Written | What It Records |
|---|---|---|
| L0 | Step 3.5 | Live policy discovery envelope |
| L1 | Step 4 | Governance Compliance Matrix in plan |
| L2 | Step 5 | Per-resource attestation in session state |
| L3 | Step 6 | Live policy pre-check before deployment |
