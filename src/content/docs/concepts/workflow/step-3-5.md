---
title: Step 3.5 — Governance
description: Live Azure Policy discovery and architecture reconciliation.
---

## Purpose
Discover effective Azure Policy assignments (including management-group-inherited) for the target subscription and reconcile them with the approved architecture.

## Agent
`04g-Governance` invoking governance discovery scripts

## Output Artifacts
- `outputs/{project}/04-governance-constraints.md`
- `outputs/{project}/04-governance-constraints.json`

## Discovery Process
1. Query Azure Policy REST API for all assignments at subscription scope
2. Walk the management group hierarchy to find inherited assignments
3. Classify by effect: Deny, Audit, DeployIfNotExists, Modify
4. Reconcile each policy against the approved architecture
5. Flag conflicts as must_fix findings

## Fallback
When live discovery returns zero results, falls back to `governance-policy-baseline.json` as a documented baseline.

## Governance Attestation — L0
This step writes the L0 attestation record. The full L0 through L3 chain must be complete before deployment can execute at Step 6.

## Common Failures
- Deny-effect policy on a planned resource type
- Missing allowed-regions policy exemption
- Private DNS Zone creation denied (requires platform team provisioning)

## Gate 2.5
Blocks until the human approves the governance constraints document.
