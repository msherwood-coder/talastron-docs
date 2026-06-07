---
title: How It Works
description: The conceptual model behind Talastron Kinetic AI — agents, skills, instructions, and the workflow engine.
---

import { Card, CardGrid } from '@astrojs/starlight/components';

Talastron is a **multi-agent orchestration system** where specialised AI agents collaborate
through a structured multi-step workflow to transform Azure project requirements into deployed,
production-grade Infrastructure as Code.

## The core thesis

> AI agents can reliably produce production-grade Azure infrastructure
> **when properly orchestrated with guardrails**.

The system achieves this through three interlocking mechanisms:

1. **Layered knowledge architecture** — agents, skills, instructions, and registries each serve a distinct purpose in the agent's context window
2. **Mechanical enforcement** — validation scripts, git hooks, and instruction files enforce invariants automatically
3. **Human-in-the-loop design** — five approval gates preserve operator control at every critical decision point

## The four knowledge layers

<CardGrid>
  <Card title="Agents" icon="laptop">
    `.agent.md` files define specialised AI personas with specific roles, allowed tools,
    and handoff targets. Bodies capped at 350 lines — deep knowledge lives in skills.
  </Card>
  <Card title="Skills" icon="open-book">
    Reusable domain knowledge packages loaded on demand. Three-level progressive disclosure:
    `SKILL.md` overview → `references/` detail → `templates/` skeletons.
  </Card>
  <Card title="Instructions" icon="approve-check">
    Glob-based enforcement rules auto-injected by VS Code Copilot whenever a matching
    file type is in context. Never need explicit invocation.
  </Card>
  <Card title="Registries" icon="list-format">
    Machine-readable JSON/CSV files: agent registry, workflow DAG, AVM module index,
    deprecations list, and governance policy baseline.
  </Card>
</CardGrid>

## Read next

- [System Architecture](/concepts/architecture/) — the 8-step workflow, Orchestrator pattern, dual IaC tracks
- [Agent Architecture](/concepts/agents/) — agent roster, subagents, Challenger pattern
- [Skills & Instructions](/concepts/skills/) — progressive loading, glob enforcement, skill catalog
- [Workflow Engine](/concepts/workflow-engine/) — DAG model, gates, session state, circuit breaker
- [MCP Integration](/concepts/mcp-integration/) — Azure, Pricing, GitHub, MS Learn, Terraform MCP servers
