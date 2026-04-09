🗺️ Hans Stewart — AI Agent Portfolio Architecture

> Live Page: [hansstewart.github.io/ai-architecture](https://hansstewart.github.io/ai-architecture/)

A production-grade visual architecture diagram showcasing 4 live autonomous AI agents — built with Python 3.11, GPT-4o, CrewAI, FAISS, HubSpot API, and deployed on Google Cloud Run.



📌 Overview

This repository hosts the system architecture diagram for my AI engineering portfolio. The page visualizes the full data flow across 4 live agents — from data inputs through agent processing layers, shared intelligence infrastructure, cloud deployment, and final system outputs.

Every agent in this diagram is **live, deployed, and callable via REST API** — this is not a mock or prototype visualization.



🤖 The 4 Agents

| # | Agent | Core Tech | Live API |
|---|---|---|---|
| 01 | **AI Data Agent** | Python · Pandas · GPT-4o · Flask · Tableau | `ai-data-agent-559169459241.us-east1.run.app` |
| 02 | **RAG Document Intelligence** | FAISS · OpenAI Embeddings · GPT-4o · Flask | `rag-agent-559169459241.us-east1.run.app` |
| 03 | **CRM Automation Agent** | HubSpot API · Lead Scoring · GPT-4o · Flask | `crm-agent-559169459241.us-east1.run.app` |
| 04 | **Multi-Agent BI System** | CrewAI 0.80 · GPT-4o · Sequential Pipeline · Flask | `multi-agent-559169459241.us-east1.run.app` |



🏗️ Architecture Layers

The diagram is organized across 7 layers that mirror the real data flow of the system:

```
┌─────────────────────────────────────────────────────────┐
│  LAYER 01 — Data Inputs                                 │
│  CSV Datasets · Text Documents · HubSpot CRM · Topics  │
└──────────────────────┬──────────────────────────────────┘
                       │  (animated particle flow)
┌──────────────────────▼──────────────────────────────────┐
│  LAYER 02 — AI Agent Systems (4 Live Agents)            │
│  AI Data Agent · RAG Agent · CRM Agent · Multi-Agent   │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│  LAYER 03 — Multi-Agent Pipeline Detail (Agent 04)      │
│  Research Analyst → BI Analyst → Report Writer → QA    │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│  LAYER 04 — Shared Intelligence                         │
│  OpenAI GPT-4o · text-embedding-ada-002 · FAISS         │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│  LAYER 05 — Cloud Infrastructure                        │
│  Google Cloud Run · Docker · Cloud Build · GitHub       │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│  LAYER 06 — System Outputs                              │
│  Tableau Dashboard · Cited Reports · Email Sequences   │
│  6-Section Executive BI Reports                         │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│  LAYER 07 — Role Alignment Table                        │
│  Agent → Skills → Target Roles → Match %               │
└─────────────────────────────────────────────────────────┘
```



🔗 Agent Repositories

Each agent is open source and independently deployable:

- 📊 [`ai-data-agent`](https://github.com/HansStewart/ai-data-agent) — CSV analytics agent with GPT-4o insights + Tableau export
- 📄 [`rag-agent`](https://github.com/HansStewart/rag-agent) — RAG pipeline with FAISS vector search + cited answers
- 🎯 [`crm-agent`](https://github.com/HansStewart/crm-agent) — Live HubSpot CRM agent with lead scoring + email generation
- 🧠 [`multi-agent`](https://github.com/HansStewart/multi-agent) — 4-agent CrewAI sequential pipeline producing executive BI reports


⚙️ Tech Stack

AI & Intelligence
| Technology | Role |
|---|---|
| OpenAI GPT-4o | Core LLM — powers all 4 agents |
| OpenAI `text-embedding-ada-002` | Document embeddings for RAG agent |
| FAISS (in-memory) | Vector similarity search · top-K retrieval |
| CrewAI 0.80 | Multi-agent orchestration framework |

Backend & APIs
| Technology | Role |
|---|---|
| Python 3.11 | Runtime for all agents |
| Flask 3.0 + Gunicorn | REST API framework |
| Pandas | Structured data analysis (Agent 01) |
| HubSpot Private Apps API | Live CRM integration (Agent 03) |

Cloud & Infrastructure
| Technology | Role |
|---|---|
| Google Cloud Run | Serverless container hosting · us-east1 |
| Docker (`python:3.11-slim`) | Container packaging for all agents |
| Google Cloud Build | CI/CD container build pipeline |
| GitHub | Source control · 4 public repos |
| GCP Secret Manager / `.env` | API key management |

Visualization
| Technology | Role |
|---|---|
| Tableau Public | Live dashboard for Agent 01 data outputs |
| GitHub Pages | Hosts this architecture diagram |



📐 Page Design

The architecture page is built as a single static HTML file with:

- Dark terminal aesthetic — `#03040a` background with hex-grid SVG pattern
- Animated particle flow — CSS keyframe particles traveling between layers
- Rotating conic-gradient borders** on agent cards using CSS Houdini `@property`
- Color-coded system — teal (Agent 01), blue (Agent 02), purple (Agent 03), orange (Agent 04)
- Fully responsive — 3 breakpoints: 1200px, 900px, 600px
- OG/Twitter meta tags — LinkedIn preview card enabled
- Fonts — JetBrains Mono (code/labels) + Space Grotesk (UI/body)



📊 Portfolio Stats

| Metric | Value |
|---|---|
| Live Agents | 4 |
| GCP Cloud Run Services | 4 |
| Total REST API Endpoints | 14 |
| Core LLM | GPT-4o |
| Vector Store | FAISS (in-memory) |
| Agent Framework | CrewAI 0.80 |
| Deployment Region | GCP us-east1 |



🎯 Role Alignment

| Agent | Target Roles |
|---|---|
| AI Data Agent | Data Analyst · AI Marketing Ops Lead · Marketing Data & Tech Manager |
| RAG Document Intelligence | Senior AI Engineer · Agentic Systems Engineer · Lead AI Systems & Automation |
| CRM Automation Agent | HubSpot Automation Pro · Senior HubSpot Consultant · AI Marketing Ops Lead |
| Multi-Agent BI System | Agentic Systems Engineer · Senior AI Engineer · Lead AI Systems & Automation |


🚀 Deployment

This page is deployed via GitHub Pages from the `main` branch root.

```
Repository:   github.com/HansStewart/ai-architecture
Branch:       main
Source:       / (root)
Live URL:     https://hansstewart.github.io/ai-architecture/
```

No build process required — the single `index.html` file is served directly.



👤 About

Hans Stewart — AI Automation & Systems Architect

Building production-grade AI agents, agentic workflows, and marketing automation systems that convert AI operations into measurable business outcomes.

- 🐙 [GitHub](https://github.com/HansStewart)
- 🗺️ [Architecture Diagram](https://hansstewart.github.io/ai-architecture/)

***

*GCP Project: ai-data-agent-hans · All agents deployed and live*
