# Silindokuhle Mapiyeye Portfolio

Production portfolio for **Silindokuhle Mapiyeye**, a Full-Stack SaaS Engineer focused on Laravel, Next.js, REST APIs, RBAC, payments, AI workflows, queues, caching, and cloud deployment.

Live site:

```text
https://mapiyeyes-portfolio.vercel.app
```

Repository:

```text
https://github.com/silindokuhleL/mapiyeyes-portfolio
```

## Purpose

This portfolio is the public proof hub for my work. It is designed to help clients, recruiters, and engineering teams quickly understand:

- What I build.
- Which technologies I use.
- Which projects have proof behind them.
- How to contact me.
- How to download my CV.
- Where to inspect public GitHub evidence.

The site is not just a personal page. It is a living proof system that connects my CV, GitHub, LinkedIn, selected projects, case studies, screenshots, analytics events, and contact paths.

## Live Features

- Client-facing hero and positioning.
- Project proof section with selected case studies.
- Skills and stack visualization.
- Experience and engineering snapshot.
- CV download with visible loading/success feedback.
- WhatsApp contact path.
- Email contact path.
- LinkedIn and GitHub links.
- Vercel Analytics events for project clicks, CV downloads, and contact clicks.
- Open Graph/Twitter preview metadata.
- Generated social preview image.
- Favicon and Apple icon routes.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React icons
- Framer Motion
- GSAP
- Apache ECharts
- Vercel Analytics

## Featured Project Proof

### Beauty Salon Management Platform

Public proof repositories:

- Frontend: https://github.com/silindokuhleL/beauty-salon-management-frontend-public
- Backend: https://github.com/silindokuhleL/beauty-salon-management-backend-public

Proof included:

- Multi-tenant SaaS-style workflow.
- RBAC and permissions.
- Provider approval.
- Customer booking.
- Product sales/POS.
- Staff leave.
- Payment management.
- Browser-verified screenshots.
- Clean public proof repositories with sanitized history.

### Document Search Portal

Repository:

- https://github.com/silindokuhleL/document-search-portal

Proof included:

- Document upload/listing.
- Search flow.
- Local verification notes.
- Browser-tested screenshots.
- README and case-study documentation.

### Risk Management / RBAC Platform

Repositories:

- Frontend: https://github.com/silindokuhleL/risk-management-front-end-next
- Backend: https://github.com/silindokuhleL/rick-management-backend-api

Proof included:

- Laravel Sanctum auth.
- Spatie Permission.
- Seeded `admin` and `super admin` users.
- Different permission scopes.
- Browser-verified login for both roles.
- Screenshots showing role-aware navigation.

### Prosuite Chatbot Hackathon

Repository:

- https://github.com/silindokuhleL/prosuite-chatbot-hackathon

Proof included:

- Next.js GRC dashboard prototype.
- Mazwi AI assistant UI.
- OpenAI integration using `gpt-4o-mini` by default.
- Streaming chat route.
- Module-aware quick suggestions.
- Browser-verified dashboard and chat screenshots.

Current limitation:

- This is positioned as an AI prototype/hackathon proof item because lint and production build still need cleanup in that repo.

## Contact Paths

Primary contact methods on the site:

- Email: `slmapiyeye@gmail.com`
- LinkedIn: https://www.linkedin.com/in/silindokuhle-mapiyeye
- GitHub: https://github.com/silindokuhleL
- WhatsApp: linked through the portfolio contact actions

The contact form-style section opens an email draft to the primary email address. WhatsApp links open a direct chat path for fast project conversations.

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

Build:

```bash
pnpm build
```

Lint:

```bash
pnpm lint
```

## Important Files

```text
src/data/site.ts                         # Site metadata, nav, primary CTA, contact links
src/data/portfolio.ts                    # Project, skills, experience, architecture, contact content
src/lib/analytics.ts                     # Portfolio analytics event wrapper
src/components/sections/hero-section.tsx # First impression and primary CTA
src/components/sections/projects-section.tsx
src/components/sections/contact-section.tsx
src/components/ui/cv-download-link.tsx   # CV download loading/success behavior
public/cv/Silindokuhle-Mapiyeye-CV.pdf
public/projects/beauty-salon/*           # Beauty Salon screenshot proof
docs/projects/*                          # Future project planning docs and agent rules
```

## Project Planning Docs

The repository also contains project planning documents for future portfolio projects:

- `docs/projects/00-agent-rules`
- `docs/projects/01-launchbill-saas-subscription-billing-platform`
- `docs/projects/02-multitenant-helpdesk`
- `docs/projects/03-cloud-deployment-dashboard`
- `docs/projects/04-ai-document-intelligence`
- `docs/projects/05-booking-payments-marketplace`
- `docs/projects/06-risk-compliance-system`

These docs define backend/frontend expectations, API standards, testing rules, branching rules, and portfolio proof checklists for future work.

## Current Status

Live and deployed.

Completed:

- Production deployment on Vercel.
- CV PDF available from the portfolio.
- WhatsApp and email contact paths.
- Vercel Analytics installed.
- Open Graph/social image support.
- GitHub profile README aligned with portfolio positioning.
- Beauty Salon proof added.
- Document Search proof added.
- Risk Management/RBAC proof added.
- Prosuite Chatbot proof added.

Still improving:

- Add real metrics/outcomes for Document Search.
- Decide whether to record walkthrough videos for selected projects.
- Decide whether to build a new flagship project from scratch.
- Keep updating CV/LinkedIn/GitHub as project proof gets stronger.

## Positioning

I use this portfolio to show practical product engineering evidence:

- Laravel and Next.js SaaS systems.
- Auth, RBAC, admin portals, and tenant-aware workflows.
- REST APIs and frontend/backend integration.
- Payment workflows and operational dashboards.
- AI workflow experiments.
- Queues, caching, cloud deployment, and production support.

The long-term goal is simple: make every public claim inspectable through a project, screenshot, README, case study, or live workflow.
