# AI Systems Architecture

> A production architecture reference page showing the real backend workflows for every deployed AI agent and automation system.

**by Hans Stewart &nbsp;·&nbsp; [hansstewart.dev](https://hansstewart.dev)**

[Live Page](https://hansstewart.github.io/ai-architecture) &nbsp;·&nbsp; [Portfolio](https://hansstewart.dev) &nbsp;·&nbsp; [GitHub](https://github.com/HansStewart/ai-architecture)

---

## What It Is

A technical architecture reference — not a marketing overview. Each agent section documents how requests enter the system, how data is preprocessed and validated, how GPT-4o and other tools are chained, what gets stored or passed forward between steps, what external integrations are triggered, how output is structured, and what is returned to the caller.

---

## Agents Documented

| Agent | Stack |
|---|---|
| Website Audit Agent | Python · BeautifulSoup4 · GPT-4o · Flask · Cloud Run |
| AI Content Pipeline | CrewAI · GPT-4o · Python · Flask |
| Voice-to-CRM Agent | Whisper · GPT-4o · HubSpot API · Flask · Cloud Run |
| Pipeline Intelligence Agent | HubSpot CRM v3 API · GPT-4o · Python · Cloud Run |
| AI Data Agent | Python · Pandas · GPT-4o · Flask |
| RAG Document Intelligence | FAISS · OpenAI Embeddings · GPT-4o · Flask |
| CRM Automation Agent | HubSpot API · GPT-4o · Lead Scoring · Flask |
| Multi-Agent BI System | CrewAI · GPT-4o · Sequential Pipeline · Flask |

---

## Shared Patterns Across All Agents

- HTTP request or file input enters a Python service
- Validation and normalization happen before model execution
- GPT-4o handles reasoning, extraction, summarization, or generation
- Results are returned as structured JSON or written into business systems

---

## Core Runtime

- Python backend services with API-first architecture
- GPT-4o reasoning and generation layers across all agents
- CrewAI orchestration where multi-step agent handoff is required
- Google Cloud Run deployment with health-checkable endpoints

---

## Tech Stack

| Layer | Technology |
|---|---|
| Language | HTML / CSS / JavaScript |
| Fonts | Space Grotesk, Space Mono (Google Fonts) |
| Hosting | GitHub Pages |
| Deployment | Auto-deploys on push to main |

---

## Local Development

```bash
git clone https://github.com/HansStewart/ai-architecture.git
cd ai-architecture
open index.html
```

No build step. Pure static HTML/CSS/JS. Push to main — GitHub Pages deploys automatically.

---

## Project Structure

```
ai-architecture/
├── index.html              Full architecture page
├── style.css               Page styles and section layout
└── .github/
    └── workflows/
        └── deploy.yml      GitHub Pages auto-deploy on push to main
```

---

## Full Agent Ecosystem

| Agent | Repository |
|---|---|
| Website Audit Agent | [github.com/HansStewart/website-audit-agent](https://github.com/HansStewart/website-audit-agent) |
| AI Content Pipeline | [github.com/HansStewart/ai-content-pipeline](https://github.com/HansStewart/ai-content-pipeline) |
| Voice-to-CRM Agent | [github.com/HansStewart/voice-to-crm](https://github.com/HansStewart/voice-to-crm) |
| Pipeline Intelligence Agent | [github.com/HansStewart/pipeline-intelligence-agent](https://github.com/HansStewart/pipeline-intelligence-agent) |
| CRM Automation Agent | [github.com/HansStewart/crm-agent](https://github.com/HansStewart/crm-agent) |
| Multi-Agent BI System | [github.com/HansStewart/multi-agent](https://github.com/HansStewart/multi-agent) |
| AI Data Agent | [github.com/HansStewart/ai-data-agent](https://github.com/HansStewart/ai-data-agent) |
| RAG Document Intelligence | [github.com/HansStewart/rag-agent](https://github.com/HansStewart/rag-agent) |

---

**Hans Stewart &nbsp;·&nbsp; Marketing Automation Engineer &nbsp;·&nbsp; [hansstewart.dev](https://hansstewart.dev)**
