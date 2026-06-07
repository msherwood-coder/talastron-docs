---
title: Step 7 — As-Built
description: Full post-deployment documentation suite generated from live Azure resource state.
---

## Purpose
Produce the as-built documentation suite from the deployed resource state.

## Agent
`08-As-Built` with seven parallel subagent substeps.

## Output Artifacts
All written to `outputs/{project}/`:

| File | Contents |
|---|---|
| `07-design-document.md` | Final architecture and design decisions |
| `07-operations-runbook.md` | Day-2 operations procedures |
| `07-ab-cost-estimate.md` | Actual vs planned cost comparison |
| `07-compliance-matrix.md` | Policy compliance attestation |
| `07-backup-dr-plan.md` | Backup and disaster recovery procedures |
| `07-resource-inventory.md` | Complete deployed resource inventory |
| `07-documentation-index.md` | Index linking all documentation |

## Parallelism
The seven substeps run in parallel via subagent fan-out, reducing total time from approximately 35 minutes sequential to approximately 8 minutes parallel.

## Drift Detection
The final sku-manifest mutation captures any drift between planned and deployed SKUs. Drift is bubbled into the lessons-learned file for the next project run.

## Lessons Learned
After Step 7, the Orchestrator follows the lesson-collection protocol to distil findings from challenger reviews, human rejections, and governance violations into `outputs/{project}/09-lessons-learned.json`. These feed into future project runs.

## Gate
No gate — the documentation suite is the terminal artifact. The project is complete.
