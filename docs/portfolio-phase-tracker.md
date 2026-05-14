# Portfolio Phase Tracker

## Project
- Name: `mapiyeyes-portfolio`
- Active app root: `/Users/mapiyeyes/Documents/programming/mapiyeyes-programming`
- Production URL: `https://mapiyeyes-portfolio.vercel.app`
- Candidate: `Silindokuhle Lammack Mapiyeye`
- Brand title: `Full-Stack SaaS Engineer`

## Status Legend
- `pending`
- `in_progress`
- `completed`
- `blocked`

## Phase Status Board

| Phase | Name | Status | Goal | Commit Message |
| --- | --- | --- | --- | --- |
| 1 | Planning & Design System | completed | Define structure, strategy, and tracking artifacts | `docs: define portfolio execution plan and phase tracker` |
| 2 | Layout & Navigation | completed | Build shell, metadata, theme foundation, and nav | `feat: establish portfolio layout shell and navigation` |
| 3 | Core Sections | completed | Build hero, about, skills, projects, architecture, and contact | `feat: build core portfolio sections and skills analytics` |
| 4 | Experience & Case Studies | completed | Turn roles into high-signal engineering case studies | `feat: add experience case studies with impact metrics` |
| 5 | DevOps Section | completed | Showcase CI/CD, Docker, AWS, and deployment strategy | `feat: add dedicated DevOps and infrastructure showcase` |
| 6 | Motion & Advanced Visuals | completed | Add Framer Motion and GSAP hero polish | `feat: polish portfolio with motion system and hero animation` |
| 7 | Optimization | completed | Improve loading strategy, metadata, and bundle behavior | `perf: optimize rendering, lazy loading, and metadata` |
| 8 | Final QA & Deployment | completed | Validate production readiness and deployment | `chore: finalize QA and deployment readiness` |

## Phase 1 Completion Notes
- Confirmed the top-level Next.js app is the intended root.
- Removed the duplicated nested starter app and moved the deployable Next.js app to the repository root.
- Audited current dependencies and verified required portfolio libraries are not yet installed.
- Captured the candidate positioning, IA, design direction, architecture plan, and phased execution path.

## Phase 2 Completion Notes
- Added branded metadata and a dark-mode-default root layout.
- Added shared site data, reusable section shell, header, footer, and panel primitives.
- Replaced the starter homepage with a one-page portfolio shell and anchor-based navigation.
- Restored the top-level dependency install and fixed ESLint ignores so lint targets the intended app only.

## Phase 3 Completion Notes
- Replaced the placeholder homepage content with dedicated section components for hero, about, skills, projects, architecture, and contact.
- Added typed portfolio data models and a reusable button utility for cleaner composition.
- Integrated Apache ECharts for the skills radar visualization with lazy client-side loading.
- Kept the core section implementation reusable and lint-clean in the top-level app root.

## Phase 4 Completion Notes
- Reworked the experience section into four case studies covering Promilezi, Worldwide Advisory Services, Invoke Solutions, and ICEP.
- Added challenge, execution, outcomes, stack, and impact framing for each role.
- Used credibility-safe metric language without inventing unsupported numeric claims.
- Validated the case-study implementation with lint after the section upgrade.

## Phase 5 Completion Notes
- Replaced the DevOps preview with a full showcase using capabilities, workflow stages, and platform metrics.
- Added structured data for CI/CD, containers, cloud, and operations pillars.
- Validated the section with lint after upgrade.

## Phase 6 Completion Notes
- Installed framer-motion and gsap.
- Created reusable FadeIn, StaggerChildren, and HeroEntrance motion primitives.
- Integrated Framer Motion scroll-triggered animations into SectionShell (all sections benefit automatically).
- Added GSAP staggered entrance to hero section via data-hero-animate attributes.

## Phase 7 Completion Notes
- Removed dead exports (devopsPreviewCards, experiencePreviewCards) from portfolio.ts.
- Cleaned all Tailwind arbitrary opacity values to v4 shorthand.
- Added responsive mobile hamburger nav to SiteHeader.
- Fixed build-breaking ssr:false in server component (skills-section.tsx).
- ECharts radar chart remains lazy-loaded via next/dynamic with ssr:false.

## Phase 8 Completion Notes
- Lint passes cleanly.
- Production build succeeds with static prerendering.
- Dev server confirmed running from the correct top-level app root.
- Mobile nav, scroll animations, and section layout verified.
- Contact section uses confirmed email, GitHub, and LinkedIn values.
- Browser Use profile scan confirmed the correct app at `http://127.0.0.1:3100`.
- Browser Use profile scan verified the hero, mobile navigation menu, and case-study CTA anchor.
- Browser console shows only ECharts radar readability warnings; no runtime errors were found.
- Standing rule: everything developed for this portfolio must be 100% mobile responsive across mobile, tablet, and desktop before it is considered done.
- Current follow-up: re-check the `#experience` view and every major section for real responsive behavior, not only code-level responsive classes.
- Responsive follow-up completed: `#experience` and `#architecture` now land correctly after lazy content settles.
- Mobile width QA completed at `390px`: document width stays `390px`, horizontal scroll stays `0`, and overflow scan found `0` visible offenders.
- Mobile menu QA completed: the Architecture menu link scrolls to the correct section.
- Added a public profile snapshot section with the provided profile image.
- Added CV request links while the final downloadable CV PDF remains pending.
- Profile section QA completed at `390px`: image loads, section anchor lands correctly, and horizontal scroll stays `0`.
- Added the first featured project proof block for Document Search Portal.
- Document Search Portal case-study block includes role, stack, features, technical decisions, GitHub link, and honest pending-proof items.
- Projects section QA completed at `390px`: section anchor lands correctly, featured proof renders, and overflow scan found `0` visible offenders.
- Added the second proof block for Risk Management / RBAC Platform with frontend and backend repository links.
- Risk/RBAC block keeps unconfirmed items honest: auth flow, Spatie Permission usage, screenshots, README replacement, and repo typo cleanup remain pending.
- Projects section QA repeated at `390px`: Document Search and Risk/RBAC proof blocks render, section anchor lands correctly, and overflow scan found `0` visible offenders.
- Added the third proof block for Prosuite Chatbot Hackathon with the public repository link.
- Prosuite block stays evidence-safe: AI provider, model, integration details, README replacement, screenshots, and hackathon context remain pending.
- Projects section QA repeated at `390px`: Prosuite renders, the AI provider caveat is visible, section anchor lands at `88px`, and overflow scan found `0` visible offenders.
- Added the fourth proof block for the Personal Developer Portfolio with the public repository link.
- Portfolio proof block frames this site as a living proof system and keeps future information/new flagship-project work out of the public page until it is real.
- Projects section QA repeated at `390px`: Personal Developer Portfolio renders, future-proof wording and deploy caveat are visible, section anchor lands at `88px`, and overflow scan found `0` visible offenders.
- Promoted Beauty Salon Management Platform to the first featured project based on confirmed SaaS/payment/RBAC/multi-tenancy scope from Silindokuhle.
- Initial public GitHub checks returned `404` for `beauty-salon-management-frontend`, so local project inspection was needed before tightening the proof copy.
- Projects section QA repeated at `390px`: Beauty Salon renders before Document Search, payment copy and repo-access caveat are visible, section anchor lands at `88px`, and overflow scan found `0` visible offenders.
- Located Beauty Salon frontend locally at `/Users/mapiyeyes/Documents/programming/salon-management/breeze-next` and backend locally at `/Users/mapiyeyes/Documents/programming/salon-management/beauty-salon-management`.
- Confirmed local Git remotes map to `beauty-salon-management-frontend.git` and `beauty-salon-management-backend.git`.
- Upgraded Beauty Salon portfolio copy with verified local-code evidence: Next.js 14, React, TypeScript, Laravel 12, Sanctum, Spatie Permission, Paystack, tenant-aware models, booking/payment/product/reporting/provider/staff modules, and admin/customer/staff/super-admin frontend routes.
- Remaining Beauty Salon proof gaps at this point: repositories need share/public access strategy, screenshots/live walkthrough still need to be captured, and READMEs need to keep evolving with proof assets.
- Projects section QA repeated at `390px`: verified Beauty Salon wording renders with Paystack, Spatie Permission, backend repo link, README follow-up note, and `0` visible overflow offenders.
- Replaced Beauty Salon frontend and backend starter READMEs with project-specific setup, module, stack, API, and portfolio-proof documentation.
- Remaining Beauty Salon proof gaps: repositories need share/public access strategy, screenshots/live walkthrough still need to be captured, and READMEs should keep evolving with proof assets.
- Projects section QA repeated at `390px`: Beauty Salon renders with Paystack and README maintenance wording, old README replacement wording is gone, and overflow scan found `0` visible offenders.
- Beauty Salon backend proof check: local migrations are applied and `php artisan route:list --path=api` reports 143 API routes.
- Beauty Salon local proof environment started: backend on `http://127.0.0.1:8011`, frontend on `http://127.0.0.1:3200`.
- Captured proof screenshots for Super Admin dashboard, Owner dashboard, and Payment Management under `/Users/mapiyeyes/Documents/me-against-the-world/docs/proof-assets/beauty-salon/`.
- Created Beauty Salon proof index at `/Users/mapiyeyes/Documents/me-against-the-world/docs/19-beauty-salon-proof-index.md`.
- Current Beauty Salon proof blocker: customer services marketplace route blanks with client-side errors and should be fixed before screenshot use.
- Fixed Beauty Salon services marketplace blank page by allowing `http://127.0.0.1:8011/storage/**` image URLs in the frontend Next image config.
- Captured Services Marketplace proof screenshot showing promotions, discounted pricing, service imagery, favorites, and booking CTAs.
- Copied the four captured Beauty Salon screenshots into the portfolio public assets folder.
- Added a responsive screenshot proof gallery to the Beauty Salon case-study block covering Super Admin, Owner Dashboard, Payment Management, and Services Marketplace.
- Updated the Beauty Salon proof-needed copy so it no longer asks for screenshots that have already been captured.
- Portfolio lint and production build pass after the screenshot gallery update.
- Playwright screenshot QA captured the updated Projects section at `390px` mobile and `1440px` desktop.
- Hardened page background stacking so the fixed texture layer cannot sit above app content.
- Removed fresh ECharts radar console warnings by using explicit 25-point radar indicator intervals.
- Browser Use DOM check confirms the Projects section and Beauty Salon proof gallery are present at `http://127.0.0.1:3100/#projects`; fresh console logs are clean after reload.
- Created final CV DOCX and PDF from the structured CV source.
- Added the final CV PDF to `public/cv/Silindokuhle-Mapiyeye-CV.pdf`.
- Replaced portfolio CV request buttons with direct CV download links in the Profile and Contact sections.
- Portfolio lint and production build pass after adding the CV download.
- Browser Use QA completed for the local portfolio at `http://127.0.0.1:3100`: page loads, mobile menu is available, Profile and Contact each expose one CV download link, the CV PDF route opens, and console errors are `0`.
- Cleaned the Skills radar chart configuration during Browser QA so the portfolio no longer depends on stale ECharts tick overrides.
- Added lightweight portfolio analytics tracking without a vendor dependency. Events currently covered: `cv_download`, `contact_click`, and `project_repo_click`.
- Browser Use verified a real `contact_click` event from the visible hero contact button. CV/project analytics are wired through the same helper and validated by lint/build.
- Moved the application to the repository root so Vercel can deploy from `./` without a Root Directory override.
- Production deployment is live at `https://mapiyeyes-portfolio-jq9s.vercel.app`.
- Browser Use verified the live production site: title is `Silindokuhle Lammack Mapiyeye | Full-Stack SaaS Engineer`, H1 is `Full-Stack SaaS Engineer`, no 404 text is present, and two CV download links are available.

## Next Priority Queue

## Branch Workflow Rule

- Work on exactly one priority item at a time.
- Create one branch per priority item using `task/<short-item-name>`.
- Make small commits inside that branch.
- Run code checks that match the change, usually `pnpm run build` for portfolio code/content changes.
- Use Browser to verify the changed behavior or live page before marking the branch done.
- Merge the branch back into `master` before starting the next priority item.
- Do not start another priority branch while the current priority branch is unmerged or blocked.
- If a priority item requires manual action outside the repo, mark it `blocked` with the exact user action needed.

## Branch Plan

| Priority | Item | Branch | Status | Browser Test Required |
| --- | --- | --- | --- | --- |
| P0 | Public Profile Distribution | `task/public-profile-distribution` | blocked | Verify live portfolio URL and any public profile pages we can access |
| P1 | CV Refresh | `task/cv-refresh` | completed | Verify the live CV PDF download after deploy |
| P2 | Analytics Decision | `task/analytics-decision` | completed | Verify tracked interactions in Browser or document decision if deferred |
| P3 | Local Repository Cleanup | `task/local-repo-cleanup` | completed | Repo status check only; no browser-facing change |
| P4 | Optional Portfolio Polish | `task/portfolio-polish` | completed | Verify visual/meta changes in Browser |
| P5 | Deferred Project-Proof Work | `task/project-proof-deferred` | deferred | Browser test after future project proof changes |

### P0: Public Profile Distribution
- Status: `blocked`
- Live URL to distribute: `https://mapiyeyes-portfolio.vercel.app`.
- Completed: GitHub profile README was updated in `silindokuhleL/silindokuhleL` on branch `task/public-profile-distribution`, merged to `main`, and pushed.
- Browser verified the public GitHub profile shows the portfolio URL, `Full-Stack SaaS Engineer`, and `slmapiyeye@gmail.com`.
- Added a GitHub README fix checklist to `docs/public-profile-distribution.md` so the profile README can be tightened before P0 is fully complete.
- Completed the GitHub README fix: removed placeholder data, fake API/demo links, and unverified metrics; Browser verified the public profile after the update.
- Completed GitHub README look/feel polish: removed image-based badges and generated stats cards, switched the public profile to a text-first README, and Browser verified the live GitHub profile after merge.
- Completed GitHub README skill showcase: added Engineering Snapshot, Stack Map, Mermaid diagrams, capability table, and richer public-work proof while avoiding generated stats cards and external badge images.
- Completed GitHub README animated skill wall: added a local self-contained SVG skill showcase near the top of the public profile and Browser verified it renders without remote badge/stat dependencies.
- Completed GitHub README client redesign: rewrote the profile around freelance/client outcomes, added availability, services, working process, case-study framing, profile mark, refined stack visual, grouped logo badges, and GitHub activity cards; Browser verified the live profile after merge.
- Blocked manual action: add the live portfolio URL to LinkedIn.
- Blocked manual action: add the live portfolio URL to relevant job platforms.
- Blocked manual action: add the live portfolio URL to the email signature, if one is used.
- Ready-to-paste copy is documented in `docs/public-profile-distribution.md`.

### P1: CV Refresh
- Status: `completed`
- Added the live portfolio URL to the source CV at `/Users/mapiyeyes/Documents/me-against-the-world/docs/cv/silindokuhle-mapiyeye-cv.md`.
- Regenerated the CV DOCX and PDF from the source CV.
- Replaced `public/cv/Silindokuhle-Mapiyeye-CV.pdf`.
- Verified the generated PDF includes an embedded portfolio hyperlink to `https://mapiyeyes-portfolio.vercel.app/`.
- Browser verification completed against the local portfolio page on this branch: page loaded successfully and exposed two CV download links.
- Direct Browser automation against the PDF viewer route was blocked by Browser security policy, so PDF content was verified through local PDF parsing instead.

### P2: Analytics Decision
- Status: `completed`
- Decision: connect the portfolio to Vercel Web Analytics because the site is already deployed on Vercel and needs simple visitor/page-view reporting without a separate analytics vendor.
- Installed `@vercel/analytics` and added the Vercel `Analytics` component to the root app layout.
- Kept the existing tracking helper for `cv_download`, `contact_click`, and `project_repo_click`.
- Connected the existing custom event helper to Vercel custom events through `track()`.
- Browser verification completed against the local portfolio page on this branch: page loaded successfully and the Vercel analytics script was present.
- Follow-up outside code: open the Vercel project dashboard, go to Analytics, and make sure Web Analytics is enabled for the project.
- Vercel Web Analytics was enabled in the dashboard after merge; a follow-up production redeploy was triggered so the analytics script can be promoted on the live domain.
- Production verification after enabling Analytics showed the page still loaded but the script was not injected, so the Analytics component was switched to explicit production mode for a follow-up deploy.

### P3: Local Repository Cleanup
- Status: `completed`
- Removed the untracked placeholder `SKILL.md` from the portfolio repo.
- Keep the repo clean except for intentional tracked portfolio files.

### P4: Optional Portfolio Polish
- Status: `completed`
- Added a concise available-for-freelance-work line to the hero and contact sections.
- Updated portfolio metadata to use the real production domain: `https://mapiyeyes-portfolio.vercel.app`.
- Added sharper Open Graph and Twitter metadata.
- Added a generated `opengraph-image` route for social preview cards.
- Added generated green/black brand icon routes for browser and Apple previews.
- Browser verification completed against the local portfolio page on this branch: hero availability copy, CV links, and generated OG image route loaded successfully.
- Deferred: custom domain remains optional for later.

### P5: Deferred Project-Proof Work
- Status: `deferred`
- Project proof upgrades are intentionally moved to the end.
- New from-scratch projects should be planned first, then brought back into the portfolio once they have real evidence.

## Per-Phase QA Log

### Phase 1 QA
- [x] Planning docs created in `docs/`
- [x] Requested sections captured in plan
- [x] Required stack captured in plan
- [x] Commit messages defined per phase
- [x] Testing checklist defined per phase

### Phase 2 QA
- [x] Metadata reflects candidate brand
- [x] Navigation anchors map to all major sections
- [x] Layout is responsive by code structure
- [x] Theme tokens support consistent dark visuals

### Phase 3 QA
- [x] Hero headline and tagline reflect scalable systems positioning
- [x] Skills chart loads correctly and remains responsive by implementation
- [x] Projects and architecture sections use reusable components
- [x] Contact section contains valid links

### Phase 4 QA
- [x] All four roles represented as case studies
- [x] Each case study includes challenge, execution, and impact framing
- [x] Metrics are consistent and credible

### Phase 5 QA
- [x] CI/CD, Docker, AWS, and deployment strategy are clearly visible
- [x] DevOps section feels distinct and technically credible
- [x] Supporting visuals remain readable on small screens

### Phase 6 QA
- [x] Motion adds polish without harming readability
- [x] Hero animation remains isolated and performant
- [x] Interactions feel intentional and modern

### Phase 7 QA
- [x] Heavy client-side modules are lazy loaded
- [x] No redundant fetching exists
- [x] Performance bottlenecks are reduced

### Phase 8 QA
- [x] Lint passes
- [x] Build passes
- [x] Responsive QA completed across mobile and desktop anchor flows
- [x] Contact and metadata verified
- [x] Deployment notes prepared
- [x] Production deployment verified with Browser Use
- [x] CV download links verified on production

## Notes for Git Workflow
- Create one commit after each completed phase.
- Keep commit scope tightly aligned to the phase goal.
- If a phase grows too large, split into subcommits but preserve the planned summary commit message in the history notes.

## Open Decisions
- Exact metrics wording where real numeric outcomes are not yet documented.
- Whether to make the Beauty Salon frontend/backend repositories public or keep the public portfolio links hidden until access is ready.
- Whether to buy and connect a custom domain.
- Which new from-scratch projects should become the next public case studies.
