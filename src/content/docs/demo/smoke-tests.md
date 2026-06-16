---
title: Pre-Demo Smoke Tests
description: Azure backend health checks to run no more than 2 hours before the Talastron Kinetic AI live demonstration.
---

Run the following checks in the order listed no more than **2 hours before the demonstration**. Record results in the table provided.

| Check | Expected | Record actual |
|---|---|---|
| Container App status | Running | |
| Service Bus active msgs | 0 | |
| Logic App last run | Succeeded | |
| OpenAI TPM headroom | >10,000 | |
| Knowledge base status | Ready | |
| Adaptive Card pre-test | Passed | |

## 1. Container App Health Check

1. Open **Azure Portal** > `rg-orion-toolkit-dev-uks` > `ca-orchestrator-dev-uks-001`.
2. Verify **Provisioning state = Succeeded** and **Running status = Running**.
3. Select **Log stream** and confirm logs show `Orchestrator ready — awaiting Service Bus trigger`.
4. If the Container App is stopped, select **Start** and wait 90 seconds before retesting.

## 2. Service Bus Queue Clear

1. Open **Azure Portal** > Service Bus namespace > **Queues** > `engagement-intake`.
2. Confirm **Active Message Count = 0** and **Dead-letter Message Count = 0**.
3. If dead-letter messages exist, open and delete them manually before the demonstration.

:::caution
Dead-letter messages from a previous run **WILL** cause the pipeline to behave unexpectedly. Always clear the queue before a new demonstration session.
:::

## 3. Logic App Connector Test

1. Open the Logic App connecting Teams to Service Bus.
2. Select **Run Trigger > Manual** and confirm execution succeeds (green ticks on all steps).
3. Verify the test message appears briefly in the Service Bus queue then is consumed by the Container App.
4. Check **Table Storage - MinervaSessionMemory** for a new row corresponding to the test trigger.

## 4. Azure OpenAI Token Budget

1. Open **Azure Portal** > `OrionAILabSub` > **Azure OpenAI** > `gpt-4o` deployment.
2. Check **Tokens per minute quota remaining**. Minimum required for demo: **10,000 TPM headroom**.
3. If quota is near limit, wait for the quota window to reset (top of each minute).