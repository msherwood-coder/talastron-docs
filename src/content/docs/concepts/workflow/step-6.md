---
title: Step 6 — Deploy
description: Safe deployment execution with what-if preview and circuit breaker protection.
---

## Purpose
Execute the deployment with safety nets. Mutates the SKU manifest on quota or region substitution.

## Agents
- `07b-Bicep Deploy` (preferring azd provision)
- `07t-Terraform Deploy`

## Precondition
decisions.governance_trace must contain the full L0 through L3 attestation chain before deployment execution begins.

## Deployment Sequence
1. Run L3 governance pre-check
2. Execute az deployment sub what-if and review output
3. Present what-if results for human approval
4. Execute az deployment sub create on approval
5. Verify deployed resources match plan
6. Write deployment summary

## Output Artifacts
- `outputs/{project}/06-deployment-summary.md`
- `outputs/{project}/06-policy-precheck.json`

## Circuit Breaker
- 3 consecutive errors — halt and write blocked finding
- 2 consecutive auth failures — halt and prompt re-authentication
- What-if oscillation across 2 cycles — halt and flag resource conflict

## Common Failures
- **Quota exhaustion** — handled via SKU substitution and sku-manifest mutation
- **Policy Deny at apply time** — routes back to Governance (Step 3.5)
- **Transient ARM 5xx** — handled by circuit breaker retry logic

## Gate 5
Blocks until the human verifies deployed resources in the Azure portal and confirms all resources are healthy.
