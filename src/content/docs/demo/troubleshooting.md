---
title: Troubleshooting Reference
description: Quick resolutions for common issues during the Talastron Kinetic AI live demonstration.
---

| Symptom | Resolution |
|---|---|
| Minerva does not respond after 30s | Restart Container App `ca-orchestrator-dev-uks-001`. Wait 90s. Resend message. |
| Adaptive Card renders as raw JSON | Restart Teams desktop client. Do not use Teams web client for demo. |
| DLP policy block on bot message | Verify `HTTP with Microsoft Entra ID` connector is in Business group in Power Platform DLP policy. |
| Service Bus dead-letter messages | Clear dead-letter queue in Azure Portal before demo. See [Pre-Demo Smoke Tests](/talastron-docs/demo/smoke-tests/). |
| SharePoint file does not appear in tab | Refresh the SharePoint tab manually (F5 inside the tab). If still absent, check Logic App run history. |
| OpenAI rate limit error in logs | Wait 60s for quota window reset. Reduce other OpenAI workloads on `OrionAILabSub` during demo window. |
| Minerva gives wrong interrogation questions | System prompt has drifted. Reload from `/agents/minerva/system-prompt.md`. Re-publish agent. |
| SSO pop-up appears mid-demo | Pre-authenticate Minerva in Teams before audience arrives. Send a test message and complete any auth flows. |