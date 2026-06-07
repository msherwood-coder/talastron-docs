---
title: Azure Setup
description: Prerequisites and authentication setup for Talastron Kinetic AI.
---

## Prerequisites

| Requirement | Version / Detail |
|---|---|
| Azure CLI | 2.60+ |
| VS Code | 1.90+ |
| GitHub Copilot extension | Latest |
| Azure subscription | Contributor rights |
| Node.js | 20+ (for validation scripts) |
| Python | 3.11+ (for Azure Pricing MCP server) |

## Azure authentication

```bash
# Login
az login

# Set target subscription
az account set --subscription OrionAILabSub

# Verify
az account show
```

## Required Azure permissions

The authenticated user or service principal needs:

| Scope | Role |
|---|---|
| Target subscription | Contributor |
| Target subscription | User Access Administrator (for role assignments in IaC) |
| Management group (read) | Reader (for governance discovery at Step 3.5) |
| Azure Policy (read) | Policy Reader |

## MCP server setup

### Azure MCP (VS Code extension)

Install via VS Code Extensions: `ms-azuretools.vscode-azure-mcp-server`

Authentication uses your active `az login` session — no additional setup needed.

### GitHub MCP

Automatic via your GitHub Copilot token. No setup required.

### Azure Pricing MCP

Configured in `.mcpjson` at repo root. Queries the public Azure Retail Prices API — no auth required for pricing queries.

## Verify setup

In VS Code Copilot Chat:

```
@01-orchestrator Show me the current session state
```

If the Orchestrator responds and lists available MCP tools, you're ready.
