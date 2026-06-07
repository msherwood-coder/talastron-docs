---
title: MCP Integration
description: All six MCP servers — Azure, Pricing, GitHub, MS Learn, Draw.io, and Terraform.
---

## What Is MCP?

The Model Context Protocol (MCP) is an open standard that allows AI agents to discover and invoke external tools through a uniform JSON-RPC interface.

Agents never call cloud APIs directly. They call MCP tools, which handle authentication, caching, pagination, retries, and response formatting.

## Azure MCP Server

| Property | Value |
|---|---|
| Transport | VS Code Extension |
| Auth | Azure CLI (az login) or managed identity |
| Purpose | RBAC-aware Azure Resource Manager queries |

Provides agents with direct access to query subscriptions, resource groups, resources, deployments, and policy assignments. Used across the entire workflow from governance discovery through deployment to as-built documentation.

## Azure Pricing MCP Server

A custom server querying the Azure Retail Prices API with 19 tools including:

| Tool | Purpose |
|---|---|
| `azure_price_search` | Search retail prices with filters |
| `azure_cost_estimate` | Estimate costs based on usage |
| `azure_bulk_estimate` | Multi-resource estimate in one call |
| `azure_ri_pricing` | Reserved Instance pricing and savings |
| `azure_region_recommend` | Find cheapest regions for a workload |
| `spot_eviction_rates` | Spot VM eviction rates |
| `find_orphaned_resources` | Detect unused resources with cost analysis |
| `azure_ptu_sizing` | Estimate PTUs for Azure OpenAI deployments |

:::caution
Cached prices may not reflect real-time promotional discounts or reserved instance pricing. Always validate final estimates in the Azure Pricing Calculator before committing budget.
:::

## GitHub MCP Server

| Property | Value |
|---|---|
| Transport | HTTP via Copilot API |
| Auth | Automatic via GitHub Copilot token |
| Purpose | Issues, PRs, code search, file content, branches |

Scoped as a default server — every agent has access.

## MS Learn MCP Server

| Property | Value |
|---|---|
| Transport | HTTP — public API |
| Auth | None required |
| Purpose | Search and fetch official Microsoft documentation |

| Tool | Purpose |
|---|---|
| `microsoft_docs_search` | Search docs, return concise content chunks |
| `microsoft_docs_fetch` | Fetch full page content as markdown |
| `microsoft_code_sample_search` | Search for code examples in Microsoft docs |

## Draw.io MCP Server

Provides batch diagram creation tools for generating Azure architecture diagrams as `.drawio` files. Includes 700+ built-in Azure service icons and handles group containment and edge routing automatically.

## Terraform MCP Server

Provides registry integration for the Terraform IaC track. Agents use it to discover the latest provider and module versions before generating Terraform configurations.

Scoped exclusively to the IaC Planner (Step 4), Terraform CodeGen (Step 5t), and the terraform-validate subagent.
