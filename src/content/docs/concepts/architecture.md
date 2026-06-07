---
title: System Architecture
description: The 8-step workflow, Orchestrator pattern, dual IaC tracks, and model tier selection.
---

## The Multi-Step Workflow

APEX orchestrates a strict sequential workflow with mandatory human approval gates.

| Step | Phase | Agent | Output | Gate |
|---|---|---|---|---|
| 1 | Requirements | 02-Requirements | `01-requirements.md` | Human |
| 2 | Architecture | 03-Architect | `02-architecture-assessment.md` | Human |
| 3 | Design (opt) | 04-Design | `03-des-*.drawio` | — |
| 3.5 | Governance | 04g-Governance | `04-governance-constraints.md` | Human |
| 4 | IaC Plan | 05-IaC Planner | `04-implementation-plan.md` | Human |
| 5 | IaC Code | 06b/06t CodeGen | `infra/bicep/` or `infra/terraform/` | Validation |
| 6 | Deploy | 07b/07t Deploy | `06-deployment-summary.md` | Human |
| 7 | As-Built | 08-As-Built | `07-*.md` docs suite | — |

## The Orchestrator Pattern

The Orchestrator is the master controller. It does not generate infrastructure code. Instead it:

- Reads the workflow DAG from `workflow-graph.json`
- Delegates each step to the appropriate specialised agent
- Enforces approval gates between steps
- Maintains session state in `context/00-session-state.json`
- Writes human-readable handoff documents at every gate
- Recommends session breaks at Gates 2 and 3 to prevent context exhaustion

## Dual IaC Tracks

Steps 1 to 3.5 are shared. At Step 4 the workflow diverges based on `iac_tool` in the requirements.

- **Bicep Track:** Steps 4b then 5b then 6b then 7
- **Terraform Track:** Steps 4t then 5t then 6t then 7

## Model Tier Selection

| Tier | Purpose |
|---|---|
| Primary | Deep reasoning, architecture and code generation |
| Review | Adversarial critique, A/B validation |
| Heavy API | Long-context batch execution over external APIs |
| Utility | Fast, cheap, well-defined transforms |

## Session Break Protocol

Long sessions (3+ hours) experience forced context summarisation that loses critical decisions.
At Gates 2 and 3, the Orchestrator writes `context/00-handoff.md` and recommends starting a fresh chat session.
All state is preserved in `context/00-session-state.json` for seamless resume.
