---
title: Post-Demo Housekeeping
description: Cleanup checklist and cost management for the Talastron Kinetic AI demonstration environment.
---

## Immediate actions after every demonstration

- Clear the Teams 1-on-1 chat with Minerva (right-click > Delete conversation)
- Delete all messages in the **Minerva Intake - Demo** channel
- Clear the Service Bus `engagement-intake` and `architecture-intake` queues
- Delete the BMAD locked file from SharePoint to reset for next run
- Clear Azure Table Storage **MinervaSessionMemory** rows older than current session
- Stop the Container App if no further demos planned (cost saving)
- Record any issues encountered in the demonstration log (Teams > Notes tab)

## Cost management

The Talastron demo environment runs on `OrionAILabSub` with Azure Sponsorship credit. Monitor spend after each demo session:

| Resource | Cost |
|---|---|
| Container App | ~0.12 GBP/hour when running - stop after each session |
| Azure OpenAI (gpt-4o) | ~0.005 GBP per demo run - negligible |
| Service Bus | Standard tier, minimal cost |
| Logic App | Consumption plan, pay-per-run - review monthly |