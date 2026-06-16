---
title: Demonstration Script
description: Step-by-step presenter script for the four-step Talastron Kinetic AI live demonstration.
---

:::note
All four steps are performed from a single Microsoft Teams window. Do not switch applications mid-demonstration. Pre-open the Azure Portal log stream in a separate window on the second monitor if available.
:::

## Step 1 - The Raw Input
*Establishing the Business Spark*

**Presenter actions**

5. Switch to the Teams desktop client. Show the 1-on-1 chat window with **Minerva** - the chat must be empty.
6. Tell the audience: "What you are about to see is a completely unstructured, non-technical business request. This is how real requirements arrive in every organisation."
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

## Step 2 - The Adversarial Interrogation
*Protecting the Baseline*

**Minerva's response - expected output in Teams chat**

**MINERVA**

> *Requirement received. Cross-referencing against our Corporate Data Standards and Azure WAF 2026 baselines. To achieve an acceptable readiness score, I must stress-test three immediate gaps in your request. Please clarify: 1. Where are field teams reporting from? If offshore or remote, do we require offline cache capabilities for data sync? 2. You specified 'totally secure.' Does this asset list contain protected infrastructure details that require UK Sovereign data residency isolation? 3. Where does the 'parts stock' data currently live? Is it a standard SharePoint list or an enterprise ERP database?*

**Presenter narrative**

> "Notice what just happened. Instead of proceeding, Minerva has instantly identified three critical gaps that would have caused this project to fail governance review. She is backed by our exact WAF 2026 guidelines and UK Corporate Data Standards. No junior developer was involved. No requirements workshop was booked. The protective shield fired automatically."

:::caution[If Minerva does not respond within 30 seconds]
- Check the Teams bot connectivity - right-click the Minerva chat and select **Open in browser**.
- If the bot is offline, open Azure Portal and restart the Container App (see [Pre-Demo Smoke Tests](/talastron-docs/demo/smoke-tests/)).
- Re-send the message once the Container App shows Running status.
:::

---

## Step 3 - Scoring Answers Against Success Metrics
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

## Step 4 - The Automated Multi-Agent Handoff
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