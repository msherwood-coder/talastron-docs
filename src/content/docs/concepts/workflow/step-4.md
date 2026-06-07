---
title: Step 4 — IaC Plan
description: Machine-readable implementation plan with frozen inputs for code generation.
---

## Purpose
Produce a machine-readable implementation plan with frozen inputs for code generation. Mutates the SKU manifest.

## Agent
`05-IaC Planner` (branches Bicep vs Terraform via decisions.iac_tool)

## Output Artifacts
- `plans/{project}/04-implementation-plan.md`
- `plans/{project}/04-iac-contract.json`
- `plans/{project}/04-policy-property-map.json`
- `plans/{project}/04-environment-manifest.json`

## What the Plan Contains
- Resource list with AVM module references and versions
- Parameter definitions for every resource
- Governance Compliance Matrix (policy to resource to property mapping)
- Network topology (subnet allocation, private endpoint plan)
- Role assignment plan (least-privilege)
- Estimated monthly cost (confirmed from Step 2)

## Plan Lock
Once Gate 3 is approved, the plan is **frozen**. Step 5 reads it as read-only input. Agents cannot self-edit the frozen plan — findings route back to Step 4 via return edge.

## Challenger Review
Single-pass comprehensive (mandatory). Deep-depth opts into rotating lenses.

Common failures: AVM module lifecycle drift; missing private endpoint on data-tier resource; deny-policy conflict surfaced late.

## Gate 3
Two preconditions must be met: all challenger passes return APPROVED, and no finding requires Step 2 re-approval. Session break strongly recommended after this gate.
