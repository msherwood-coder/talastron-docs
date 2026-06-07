---
title: Step 1 — Requirements
description: Capture structured project requirements and pin the SKU manifest.
---

## Purpose
Capture the project intent and pin the SKU manifest revision 1.

## Agent
`02-Requirements` — no subagents at this step.

## Skills Loaded
- `azure-defaults` — naming, regions, security baseline
- `azure-artifacts` — artifact H2 template

## Output Artifacts
- `outputs/{project}/01-requirements.md`
- `outputs/{project}/sku-manifest.json`
- `outputs/{project}/sku-manifest.md`

## What Gets Captured
- Workload name and description
- IaC tool selection (Bicep or Terraform) — no default, must be explicit
- Target region and environment
- Budget (monthly amount)
- Non-functional requirements (availability, RTO/RPO, compliance)
- Connectivity requirements (VNet mode, private endpoints)
- Identity model

## Challenger Review
Single-pass comprehensive review — mandatory. Common failures: under-specified non-functional requirements.

## Gate 1
Blocks until the human explicitly approves `01-requirements.md`.
