---
title: Skills and Instructions
description: Progressive loading, glob-based enforcement, and the full skill catalog.
---

## What Are Skills?

Skills are reusable domain knowledge packages that agents load on demand.
They live in `skills/{name}/SKILL.md` with optional `references/` and `templates/` subdirectories.

## Three Levels of Progressive Loading

| Level | Location | When Loaded |
|---|---|---|
| 1 — Overview | `SKILL.md` | Always, when skill is invoked |
| 2 — Detail | `references/` | Only when sub-task requires deep knowledge |
| 3 — Templates | `templates/` | Only during artifact generation phase |

## Skill Catalog

| Skill | Purpose |
|---|---|
| `azure-defaults` | Regions, tags, naming conventions, security baseline |
| `azure-artifacts` | Artifact H2 templates and output contracts |
| `azure-bicep-patterns` | AVM-first module selection and Bicep conventions |
| `azure-governance` | Azure Policy discovery and constraint mapping |
| `azure-diagrams` | Draw.io architecture diagram conventions |
| `azure-diagnostics` | Azure resource troubleshooting patterns |
| `azure-pricing` | Cost estimation via Azure Pricing MCP |
| `session-resume` | Session state, handoff, and resume protocol |
| `workflow-engine` | DAG, gates, approval protocol, circuit breaker |
| `iac-common` | Shared IaC patterns, circuit breaker, drift routing |

## What Are Instructions?

Instructions are glob-based enforcement rules auto-injected by VS Code Copilot whenever a matching file type is in context. Unlike skills, they never need explicit invocation.

They live in `.github/instructions/` with YAML frontmatter specifying an `applyTo` glob pattern.

## Instruction Catalog

| Instruction | applyTo | Enforces |
|---|---|---|
| `iac-bicep-best-practices` | `**/*.bicep` | AVM-first, security baseline, naming |
| `iac-cost-repeatability` | `**/*.bicep` and `**/*.tf` | Budget alerts, zero hardcoded values |
| `azure-artifacts` | `**/outputs/**/*.md` | H2 template compliance for agent artifacts |
| `agent-definitions` | `**/*.agent.md` | Frontmatter standards for agents |
| `governance-discovery` | `**/04-governance-constraints.*` | Azure Policy discovery requirements |
| `no-heredoc` | `**` | Prevents terminal heredoc corruption |

## Instruction Precedence

1. Azure Policy compliance — always wins
2. Domain IaC rules
3. Cross-cutting cost rules
4. General code quality

## The Golden Rule

**Skills are loaded explicitly. Instructions are injected automatically.**
