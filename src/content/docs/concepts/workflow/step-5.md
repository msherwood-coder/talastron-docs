---
title: Step 5 — IaC Code
description: AVM-first Bicep or Terraform generated from the frozen implementation plan.
---

## Purpose
Emit ready-to-deploy Infrastructure as Code. Inputs are frozen (plan-lock) and read-only.

## Agents
- `06b-Bicep CodeGen` (Bicep track)
- `06t-Terraform CodeGen` (Terraform track)

## Output Artifacts
- `infra/bicep/{project}/` — Bicep templates and parameter files
- `infra/terraform/{project}/` — Terraform configurations
- `plans/{project}/05-iac-handoff.json`

## Code Standards Enforced
All generated code must comply with the iac-bicep-best-practices instruction:

- AVM-first — every resource uses `br/public:avm/res/...` where available
- Zero hardcoded values — all project-specific values in `.bicepparam` only
- `projectName` parameter with no default
- Private endpoints on all PaaS data-tier resources in production
- Budget resource with forecast alerts at 80, 100, and 120 percent
- Diagnostic settings on every resource
- Managed Identity — no service principals

## Validation Gate (Gate 4)
Automated — blocks until bicep build and bicep lint both pass cleanly.

Common failures: hallucinated AVM parameters; missing required properties; attempts to self-edit the frozen plan.
