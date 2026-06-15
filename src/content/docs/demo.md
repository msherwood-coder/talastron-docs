---
title: Live Demo Guide
description: Step-by-step guide for running the Talastron Kinetic AI live demonstration — pre-flight smoke tests, presenter script, troubleshooting, and post-demo housekeeping.
---

Use this guide to prepare and run the Talastron Kinetic AI live demonstration. Complete the smoke tests no more than 2 hours before the session. All four demonstration steps are performed from a single Microsoft Teams window.

## Azure Backend — Pre-Demo Smoke Tests

Run the following checks in the order listed no more than **2 hours before the demonstration**. Record results in the table provided.

| Check | Expected | Record actual |
|---|---|---|
| Container App status | Running | |
| Service Bus active msgs | 0 | |
| Logic App last run | Succeeded | |
| OpenAI TPM headroom | >10,000 | |
| Knowledge base status | Ready | |
| Adaptive Card pre-test | Passed | |

### 1. Container App Health Check

1. Open **Azure Portal** > `rg-orion-toolkit-dev-uks` > `ca-orchestrator-dev-uks-001`.
2. Verify **Provisioning state = Succeeded** and **Running status = Running**.
3. Select **Log stream** and confirm logs show `Orchestrator ready — awaiting Service Bus trigger`.
4. If the Container App is stopped, select **Start** and wait 90 seconds before retesting.

### 2. Service Bus Queue Clear

1. Open **Azure Portal** > Service Bus namespace > **Queues** > `engagement-intake`.
2. Confirm **Active Message Count = 0** and **Dead-letter Message Count = 0**.
3. If dead-letter messages exist, open and delete them manually before the demonstration.

:::caution
Dead-letter messages from a previous run **WILL** cause the pipeline to behave unexpectedly. Always clear the queue before a new demonstration session.
:::

### 3. Logic App Connector Test

1. Open the Logic App connecting Teams to Service Bus.
2. Select **Run Trigger > Manual** and confirm execution succeeds (green ticks on all steps).
3. Verify the test message appears briefly in the Service Bus queue then is consumed by the Container App.
4. Check **Table Storage** - MinervaSessionMemory - for a new row corresponding to the test trigger.

### 4. Azure OpenAI Token Budget

1. Open **Azure Portal** > `OrionAILabSub` > **Azure OpenAI** > `gpt-4o` deployment.
2. Check **Tokens per minute quota remaining**. Minimum required for demo: **10,000 TPM headroom**.
3. If quota is near limit, wait for the quota window to reset (top of each minute).

---

## Live Demonstration - Step-by-Step Script

:::note
All four steps are performed from a single Microsoft Teams window. Do not switch applications mid-demonstration. Pre-open the Azure Portal log stream in a separate window on the second monitor if available.
:::

### Step 1 - The Raw Input
*Establishing the Business Spark*

**Presenter actions**

5. Switch to the Teams desktop client. Show the 1-on-1 chat window with **Minerva** - the chat must be empty.
6. Tell the audience: "What you're about to see is a completely unstructured, non-technical business request. This is how real requirements arrive in every organisation."
7. Type the following message **EXACTLY** into the Teams chat input field and press **Enter**:

**YOU**

> Mary, our field team needs a simple app to quickly report broken heavy equipment on-site and check if parts are in stock. It needs to be totally secure.

8. Pause. Do not type anything further.

**What the audience sees**

- The message sends into the chat. Minerva shows a typing indicator.
- Minerva's response appears within **5-10 seconds** (depending on Azure OpenAI latency).

**Presenter narrative while waiting**

> "A junior developer would take that request, build something for three weeks, and fail the IT security review. Talastron Kinetic AI does not accept loose requirements. Watch what happens."

---

### Step 2 - The Adversarial Interrogation
*Protecting the Baseline*

**Minerva's response - expected output in Teams chat**

**MINERVA**

> *Requirement received. Cross-referencing against our Corporate Data Standards and Azure WAF 2026 baselines. To achieve an acceptable readiness score, I must stress-test three immediate gaps in your request. Please clarify: 1. Where are field teams reporting from? If offshore or remote, do we require offline cache capabilities for data sync? 2. You specified 'totally secure.' Does this asset list contain protected infrastructure details that require UK Sovereign data residency isolation? 3. Where does the 'parts stock' data currently live? Is it a standard SharePoint list or an enterprise ERP database?*

**Presenter narrative**

> "Notice what just happened. Instead of proceeding, Minerva has instantly identified three critical gaps that would have caused this project to fail governance review. She is backed by our exact WAF 2026 guidelines and UK Corporate Data Standards. No junior developer was involved. No requirements workshop was booked. The protective shield fired automatically."

:::caution[If Minerva does not respond within 30 seconds]
- Check the Teams bot connectivity - right-click the Minerva chat and select **Open in browser**.
- If the bot is offline, open Azure Portal and restart the Container App (see Section 1).
- Re-send the message once the Container App shows Running status.
:::

---

### Step 3 - Scoring Answers Against Success Metrics
*Issuing the Readiness Passport*

**Presenter actions**

9. Type the following response into the Teams chat input field and press **Enter**:

**YOU**

> 1. Yes, they are offshore - need offline sync. 2. It's critical national infrastructure, so yes to UK sovereign isolation. 3. The parts are currently tracked in a legacy SQL server.

10. Minerva will process the answers. **Readiness Passport Adaptive Card** will appear within **10-20 seconds**.

**Expected Adaptive Card output - Readiness Passport**

The card must display the following fields with correct values:

| Field | Expected value |
|---|---|
| Engagement ID | Auto-generated (e.g. `TKA-2026-0042`) |
| Offline sync required | YES - highlighted amber |
| UK Sovereign residency | YES - NCSC flag badge, green confirmed |
| Data source | Legacy SQL Server - classification: Regulated |
| Readiness score | Progress bar rendering 78% or above |
| Gate status | CONDITIONAL - amber - offline cache architecture required |
| Next action | Handing command to Vitruvius - Architecture Gate |

**Presenter narrative**

> "Minerva has not just answered our questions - she has scored them against a readiness rubric, classified the data residency requirement under NCSC Critical National Infrastructure, and issued a formal Readiness Passport. This card is the audit trail. It proves we met the intake gate before a single line of code was written."

:::caution
If the Adaptive Card does not render correctly (appears as raw JSON text), the Teams client rendering engine is likely in a degraded state. Restart the Teams desktop client and re-send the user message from Step 1.
:::

---

### Step 4 - The Automated Multi-Agent Handoff
*Pipeline Gate Frozen - Awaiting Engineering Clearance*

**What happens automatically**

Following the Readiness Passport card, Minerva sends a final text notification into the Teams chat:

**MINERVA**

> *Readiness metrics achieved. Locking BMAD Specification file to secure repository directory. Handing over command chain to Talastron Architect Agent. Pipeline safely frozen at the design gate awaiting engineering resource clearance.*

**Simultaneous backend actions** *(visible on second monitor)*

- **Azure Service Bus:** new message appears on the `architecture-intake` queue addressed to Vitruvius.
- **Azure Table Storage:** MinervaSessionMemory row updated with `status = HANDED_OFF`.
- **SharePoint BMAD Repository tab:** new locked file `BMAD-TKA-2026-0042-LOCKED.md` appears.

**Presenter narrative - closing statement**

> "The entire intake pipeline - from a messy business request to a formally scored, sovereign-compliant specification locked in a secure repository - completed in under two minutes, entirely within Microsoft Teams. No email chains. No requirements workshops. No missed security controls. Vitruvius, the Talastron Architect Agent, is now standing by at the design gate, waiting for engineering resource clearance to proceed."

> "This is Talastron Kinetic AI. An agentic software factory built on Microsoft Azure, operating at the speed of thought."

---

## Troubleshooting Reference

| Symptom | Resolution |
|---|---|
| Minerva does not respond after 30s | Restart Container App `ca-orchestrator-dev-uks-001`. Wait 90s. Resend message. |
| Adaptive Card renders as raw JSON | Restart Teams desktop client. Do not use Teams web client for demo. |
| DLP policy block on bot message | Verify `HTTP with Microsoft Entra ID` connector is in Business group in Power Platform DLP policy. |
| Service Bus dead-letter messages | Clear dead-letter queue in Azure Portal before demo. See Section 2. |
| SharePoint file does not appear in tab | Refresh the SharePoint tab manually (F5 inside the tab). If still absent, check Logic App run history. |
| OpenAI rate limit error in logs | Wait 60s for quota window reset. Reduce other OpenAI workloads on `OrionAILabSub` during demo window. |
| Minerva gives wrong interrogation questions | System prompt has drifted. Reload from `/agents/minerva/system-prompt.md`. Re-publish agent. |
| SSO pop-up appears mid-demo | Pre-authenticate Minerva in Teams before audience arrives. Send a test message and complete any auth flows. |

---

## Post-Demonstration Housekeeping

### Immediate actions after every demonstration

- Clear the Teams 1-on-1 chat with Minerva (right-click > Delete conversation)
- Delete all messages in the **Minerva Intake - Demo** channel
- Clear the Service Bus `engagement-intake` and `architecture-intake` queues
- Delete the BMAD locked file from SharePoint to reset for next run
- Clear Azure Table Storage **MinervaSessionMemory** rows older than current session
- Stop the Container App if no further demos planned (cost saving)
- Record any issues encountered in the demonstration log (Teams > Notes tab)

### Cost management

The Talastron demo environment runs on `OrionAILabSub` with Azure Sponsorship credit. Monitor spend after each demo session:

| Resource | Cost |
|---|---|
| Container App | ~0.12 GBP/hour when running - stop after each session |
| Azure OpenAI (gpt-4o) | ~0.005 GBP per demo run - negligible |
| Service Bus | Standard tier, minimal cost |
| Logic App | Consumption plan, pay-per-run - review monthly |

---

## Appendix A - Quick Reference Card

| | |
|---|---|
| Teams team | Talastron Kinetic AI - Live Demo |
| Demo channel | Minerva Intake - Demo |
| Bot name in Teams | Minerva - Talastron Intake Agent |
| Azure subscription | `OrionAILabSub` |
| Resource group | `rg-orion-toolkit-dev-uks` |
| Container App | `ca-orchestrator-dev-uks-001` |
| Service Bus queue | `engagement-intake` |
| AI region | Sweden Central (Azure OpenAI gpt-4o) |
| SharePoint site | Talastron-BMAD |
| Copilot Studio env | Production (not default) |
| Adaptive Card JSON | `/agents/minerva/readiness-passport-card.json` |
| System prompt | `/agents/minerva/system-prompt.md` |

---

## Appendix B - Exact Chat Scripts for Copy-Paste

Copy these strings verbatim to avoid Minerva's NLP matching on unexpected phrasing and producing a different interrogation flow than rehearsed.

### Step 1 - User message

```
Mary, our field team needs a simple app to quickly report broken heavy equipment on-site and check if parts are in stock. It needs to be totally secure.
```

### Step 3 - User answers

```
1. Yes, they are offshore - need offline sync.  2. It's critical national infrastructure, so yes to UK sovereign isolation.  3. The parts are currently tracked in a legacy SQL server.
```