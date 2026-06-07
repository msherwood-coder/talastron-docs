---
title: Step 2 — Architecture
description: WAF-pillar-scored architecture assessment with real-time cost estimates.
---

## Purpose
Produce a WAF-pillar-scored architecture and a cost estimate. Mutates the SKU manifest.

## Agent
`03-Architect` with `cost-estimate-subagent`

## Output Artifacts
- `outputs/{project}/02-architecture-assessment.md`
- `outputs/{project}/03-des-cost-estimate.md`
- `outputs/{project}/03-des-sku-comparison.md` (when SKU trade-offs exist)
- Mutated sku-manifest

## WAF Pillars Scored
- Reliability
- Security
- Cost Optimisation
- Operational Excellence
- Performance Efficiency

## Cost Estimation
The cost-estimate-subagent queries the Azure Pricing MCP server to produce real-time cost estimates for all resources in the proposed architecture. Estimates are broken down by resource and aggregated to a monthly total.

## Challenger Review
Single-pass comprehensive (mandatory). Deep-depth mode opts into rotating lenses: security-governance, architecture-reliability, and optionally cost-feasibility.

Common failures: orphaned or proposed AVM modules selected; missing private endpoint story for data-tier resources.

## Gate 2
Blocks until the human approves the architecture assessment and cost estimate. Session break recommended after this gate.
