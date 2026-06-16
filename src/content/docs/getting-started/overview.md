---
title: Overview
description: What Talastron Kinetic AI is and how it fits into your Azure delivery practice.
---

Talastron Kinetic AI is an **Azure-native agentic software factory** built on the Kinetic AI pattern.
It uses GitHub Copilot agents to transform natural-language requirements into reviewed,
deploy-ready Azure infrastructure — with human approval gates at every critical decision point.

## What it does

A single prompt like:

> *"I need Azure infrastructure for a container-based API with Key Vault, Service Bus,
> and a private SQL backend. UK South. Budget £2,000/month."*

...triggers a multi-agent pipeline that:

1. Captures structured requirements and pins a SKU manifest
2. Produces a WAF-pillar-scored architecture with real-time cost estimates
3. Discovers your live Azure Policy assignments and reconciles them with the design
4. Generates an AVM-first Bicep implementation plan — reviewed adversarially
5. Emits validated, deploy-ready Bicep templates with zero hardcoded values
6. Executes a what-if preview, then deploys on your approval
7. Produces a full as-built documentation suite: runbook, compliance matrix, cost report

## Who it's for

- **Azure Architects** who want to accelerate delivery without sacrificing governance
- **Platform engineering teams** delivering Landing Zone workloads at scale
- **Defence and regulated-sector teams** who need a full governance and audit trail
- **ISVs and product teams** building repeatable, multi-tenant Azure deployments

## Core principles

| Principle | What it means in practice |
|---|---|
| Repository is the system of record | All decisions, plans, and artifacts are versioned in git |
| Map, not manual | `AGENTS.md` points to skills — no monolithic instruction files |
| Enforce invariants, not implementations | Validators and linters enforce rules; agents choose how to implement |
| AVM-first, security baseline always | Azure Verified Modules and non-negotiable security defaults |
| Human taste gets encoded | Reviewer feedback becomes linter rules, not one-off patches |
| Context is scarce | Every token must earn its keep — progressive skill loading |
| Mechanical enforcement over documentation | If it can be a check, it is a check |

## Next steps

- [Quickstart](/getting-started/quickstart/) — get running in 15 minutes
- [Azure Setup](/getting-started/azure-setup/) — prerequisites and authentication
- [How It Works](/concepts/how-it-works/) — the full conceptual model