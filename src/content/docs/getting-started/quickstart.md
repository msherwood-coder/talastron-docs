---
title: Quickstart
description: Get Talastron running in 15 minutes.
---

import { Steps } from '@astrojs/starlight/components';

## Prerequisites

- VS Code with the GitHub Copilot extension (Copilot Chat enabled)
- Azure CLI installed and authenticated (`az login`)
- Access to the `msherwood-coder/Development` repository
- A target Azure subscription with Contributor rights

## Setup

<Steps>

1. **Clone the repository**

   ```bash
   git clone https://github.com/msherwood-coder/Development.git
   cd Development
   ```

2. **Authenticate with Azure**

   ```bash
   az login
   az account set --subscription OrionAILabSub
   az account show   # verify correct subscription
   ```

3. **Verify MCP servers**

   Open VS Code. In Copilot Chat, confirm MCP tools are available:
   - Azure MCP (via `ms-azuretools.vscode-azure-mcp-server` extension)
   - GitHub MCP (automatic via Copilot token)

4. **Start your first project**

   In VS Code Copilot Chat:

   ```
   @01-orchestrator Start a new project called "my-first-workload" using Bicep
   ```

   The Orchestrator will:
   - Create `context/00-session-state.json`
   - Create `outputs/my-first-workload/`
   - Delegate to the Requirements agent

5. **Follow the approval gates**

   At each gate, review the artifact and type:

   ```
   Approved — proceed to the next step
   ```

   Or if you need changes:

   ```
   Revise: [your feedback here]
   ```

</Steps>

## Folder outputs

| Step | Artifact location |
|---|---|
| Requirements | `outputs/{project}/01-requirements.md` |
| Architecture | `outputs/{project}/02-architecture-assessment.md` |
| Governance | `outputs/{project}/04-governance-constraints.md` |
| IaC Plan | `plans/{project}/04-implementation-plan.md` |
| Bicep templates | `infra/bicep/{project}/` |
| Deployment summary | `outputs/{project}/06-deployment-summary.md` |
| As-built docs | `outputs/{project}/07-*.md` |

## Resuming a session

If you need to close VS Code and resume later:

```
@01-orchestrator Resume project "my-first-workload"
```

The Orchestrator reads `context/00-session-state.json` and continues from the last completed gate.
