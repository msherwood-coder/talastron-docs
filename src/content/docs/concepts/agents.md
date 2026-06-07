---
title: Agent Architecture
description: The full agent roster, subagent table, Challenger pattern, and handoff design.
---

## Top-Level Agents

| Agent | Role | Primary Skills |
|---|---|---|
| 01-Orchestrator | Master orchestrator — delegates, never generates IaC | workflow-engine, session-resume |
| 02-Requirements | Captures project requirements | azure-defaults, azure-artifacts |
| 03-Architect | WAF assessment and cost estimation | azure-defaults, azure-pricing |
| 04-Governance | Azure Policy discovery and reconciliation | azure-governance, azure-defaults |
| 05-IaC Planner | Bicep/Terraform implementation planning | azure-bicep-patterns, azure-defaults |
| 06b-Bicep CodeGen | Bicep template generation | azure-bicep-patterns, azure-defaults |
| 07b-Bicep Deploy | Bicep deployment execution | azure-validate, azure-defaults |
| 08-As-Built | Post-deployment documentation | azure-artifacts, azure-diagrams |
| 09-Diagnose | Azure resource troubleshooting | azure-diagnostics |
| 10-Challenger | Standalone adversarial review | — |

## Subagents

Subagents are not user-invocable. They are delegated to by parent agents for isolated tasks.

| Subagent | Purpose | Invoked By |
|---|---|---|
| challenger-review-subagent | Adversarial review (1-pass or 3-pass rotating lenses) | Steps 1, 2, 4, 5, 6 |
| cost-estimate-subagent | Azure Pricing MCP queries | Steps 2, 8 |
| governance-discovery-subagent | Azure Policy discovery via REST API | Step 4 |
| bicep-lint-subagent | bicep build and bicep lint | Step 5 (Bicep) |
| bicep-whatif-subagent | az deployment what-if preview | Step 6 (Bicep) |

## The Challenger Pattern

The challenger-review-subagent implements adversarial review at critical workflow steps.

**1-pass review (comprehensive):** Single review covering all dimensions. Used at Steps 1 and 6.

**3-pass review (rotating lenses):** Three separate reviews each focused on a specific dimension — security, reliability, cost. Used at Steps 2, 4, and 5.

Findings are classified as:
- `must_fix` — blocking, prevents workflow progression
- `should_fix` — advisory only

**Conditional Pass 3:** Pass 3 only runs if Pass 2 returned at least one must_fix finding, saving approximately 4 minutes per review cycle when quality is already high.

## Handoffs and Delegation

Agents communicate through artifact files, not direct message passing.

1. Orchestrator delegates to a step agent
2. Agent produces output files in `outputs/{project}/`
3. Next agent reads those files as input

This design eliminates context leakage between agents, enables resume from any point, and allows human review at every gate.

## Agent Body Limit

Agent definition files are capped at **350 lines**. Heavy domain knowledge belongs in skills, not in the agent body.
