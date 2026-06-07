---
title: Workflow Overview
description: The complete 7-step workflow from requirements to as-built documentation.
---

The Talastron workflow transforms a natural-language Azure requirement into deployed, documented infrastructure through 7 sequential steps with 5 human approval gates.

## The Steps

| Step | Name | Gate |
|---|---|---|
| Step 1 | Requirements | Human approval |
| Step 2 | Architecture | Human approval |
| Step 3 | Design (optional) | — |
| Step 3.5 | Governance | Human approval |
| Step 4 | IaC Plan | Human approval |
| Step 5 | IaC Code | Automated validation |
| Step 6 | Deploy | Human approval |
| Step 7 | As-Built | — |

## Invoking the Workflow

In VS Code Copilot Chat:

```
@01-orchestrator Start a new project called "my-workload" using Bicep
```

To resume after a session break:

```
@01-orchestrator Resume project "my-workload"
```

## Output Locations

| Step | Output |
|---|---|
| 1 | `outputs/{project}/01-requirements.md` |
| 2 | `outputs/{project}/02-architecture-assessment.md` |
| 3.5 | `outputs/{project}/04-governance-constraints.md` |
| 4 | `plans/{project}/04-implementation-plan.md` |
| 5 | `infra/bicep/{project}/` |
| 6 | `outputs/{project}/06-deployment-summary.md` |
| 7 | `outputs/{project}/07-*.md` |
