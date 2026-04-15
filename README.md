━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  AI SYSTEMS ARCHITECTURE
  Detailed backend workflows for every deployed agent and automation.
  by Hans Stewart · hansstewart.dev

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Live            →   hansstewart.github.io/ai-architecture
  Portfolio       →   hansstewart.dev
  GitHub          →   github.com/HansStewart/ai-architecture

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHAT IT IS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  A production architecture reference page showing the real backend
  workflows for every deployed AI agent and automation system. Not a
  marketing overview — a technical walkthrough of how each system
  operates internally.

  Each agent section documents: how requests enter the system,
  how data is preprocessed and validated, how GPT-4o and other tools
  are chained, what gets stored or passed forward between steps, what
  external integrations are triggered, how output is structured, and
  what is returned to the caller.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHAT IS DOCUMENTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Website Audit Agent         4-step scrape-evaluate-score-return workflow.
                              Stack: Python · BeautifulSoup4 · GPT-4o ·
                              Flask · Cloud Run

  AI Content Pipeline         Sequential CrewAI multi-agent workflow.
                              Stack: CrewAI · GPT-4o · Python · Flask

  Voice-to-CRM Agent          Whisper transcription to HubSpot writeback.
                              Stack: Whisper · GPT-4o · HubSpot API ·
                              Flask · Cloud Run

  Pipeline Intelligence Agent Live HubSpot data → pipeline report.
                              Stack: HubSpot CRM v3 API · GPT-4o ·
                              Python · Cloud Run

  AI Data Agent               Pandas transforms + GPT-4o interpretation.
                              Stack: Python · Pandas · GPT-4o · Flask

  RAG Document Intelligence   FAISS retrieval → grounded GPT-4o answers.
                              Stack: FAISS · OpenAI Embeddings · GPT-4o ·
                              Flask

  CRM Automation Agent        Lead scoring + HubSpot workflow automation.
                              Stack: HubSpot API · GPT-4o · Lead Scoring ·
                              Flask

  Multi-Agent BI System       CrewAI sequential pipeline → executive report.
                              Stack: CrewAI · GPT-4o · Flask


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SHARED PATTERNS ACROSS ALL AGENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  HTTP request or file input enters a Python service.
  Validation and normalization happen before model execution.
  GPT-4o handles reasoning, extraction, summarization, or generation.
  Results are returned as structured JSON or written into business
  systems.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CORE RUNTIME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Python backend services with API-first architecture
  GPT-4o reasoning and generation layers across all agents
  CrewAI orchestration where multi-step agent handoff is required
  Google Cloud Run deployment with health-checkable endpoints


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECH STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  HTML / CSS / JavaScript    Static page — no framework, no build step
  Fonts                      Space Grotesk, Space Mono (Google Fonts)
  Hosting                    GitHub Pages
  Deployment                 Auto-deploys on push to main


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LOCAL DEVELOPMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  git clone https://github.com/HansStewart/ai-architecture.git
  cd ai-architecture
  open index.html

  No build step. Pure static HTML/CSS/JS.
  Push to main — GitHub Pages deploys automatically.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ai-architecture/
  ├── index.html              Full architecture page
  ├── style.css               Page styles and section layout
  └── .github/
      └── workflows/
          └── deploy.yml      GitHub Pages auto-deploy on push to main


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FULL AGENT ECOSYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Website Audit Agent       →   github.com/HansStewart/website-audit-agent
  AI Content Pipeline       →   github.com/HansStewart/ai-content-pipeline
  Voice-to-CRM Agent        →   github.com/HansStewart/voice-to-crm
  Pipeline Intelligence     →   github.com/HansStewart/pipeline-intelligence-agent
  CRM Automation Agent      →   github.com/HansStewart/crm-agent
  Multi-Agent BI System     →   github.com/HansStewart/multi-agent
  AI Data Agent             →   github.com/HansStewart/ai-data-agent
  RAG Document Intelligence →   github.com/HansStewart/rag-agent

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Hans Stewart · Marketing Automation Engineer · hansstewart.dev
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━