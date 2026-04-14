Hans Stewart — AI Systems Architecture

Live page: https://hansstewart.github.io/ai-architecture/

A production-style architecture page that documents the backend workflows behind Hans Stewart’s deployed AI agents and automation systems. The page is built as a static GitHub Pages site and visually maps how each agent processes inputs, runs orchestration and model logic, integrates with external systems, and returns structured outputs.

Overview

This repository contains the architecture page for Hans Stewart’s AI systems portfolio. Instead of presenting the portfolio as a generic high-level network map, the page documents each agent individually with a detailed backend workflow layout.

Each section shows:
- Request or input intake
- Preprocessing and normalization
- Model, retrieval, or orchestration logic
- CRM or external system integrations
- Output formatting and delivery
- Runtime and operational context

Included systems

The page currently documents these public systems from the portfolio and GitHub repositories:
- Website Audit Agent
- AI Content Pipeline
- Voice-to-CRM Agent
- Pipeline Intelligence Agent
- AI Data Agent
- RAG Document Intelligence
- CRM Automation Agent
- Multi-Agent BI System

Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts: Space Grotesk and Space Mono
- Static hosting through GitHub Pages

Design direction

The architecture page is styled to align with the portfolio design system used on hansstewart.dev.

Applied design traits:
- Space Grotesk and Space Mono typography
- Dark brown and stone surfaces
- Copper accent system
- Technical but refined visual language
- Subtle animation and motion without generic AI aesthetics
- Detailed workflow cards for each agent

Files

- `index.html` — page structure and all workflow sections
- `style.css` — portfolio-aligned design system, layout, and motion
- `script.js` — section reveal and card interaction behavior

Local preview

Because this is a static site, you can preview it locally in several simple ways.

Option 1: Open directly
Open `index.html` in your browser.

Option 2: Run a local server
If you want a simple local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Deploying to GitHub Pages

This repository is designed to deploy directly from the root of the default branch using GitHub Pages.

GitHub Pages settings

In the GitHub repository:
1. Open **Settings**.
2. Open **Pages** in the left sidebar.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select your main branch.
5. Set the folder to **/(root)**.
6. Save the settings.

After the updated files are pushed, GitHub Pages will publish the site to:

```text
https://hansstewart.github.io/ai-architecture/
```

Update workflow

When you want to revise the page:
1. Edit `index.html`, `style.css`, `script.js`, or `README.md`.
2. Commit the changes.
3. Push to GitHub.
4. Wait for GitHub Pages to redeploy.

Suggested commit message

```text
Rebuild architecture page with detailed per-agent workflows
```

Notes

This repository is intentionally static and lightweight so the page loads quickly, is easy to maintain, and can be updated without a framework or build pipeline.