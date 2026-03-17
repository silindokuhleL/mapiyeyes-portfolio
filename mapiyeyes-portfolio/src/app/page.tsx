import { SectionShell } from "@/components/layout/section-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Panel } from "@/components/ui/panel";
import { contactLinks, siteMetadata } from "@/data/site";

export default function Home() {
  const platformPillars = [
    "Scalable web systems",
    "Cloud-aware architecture",
    "CI/CD and delivery automation",
  ];

  const phaseTwoSections = [
    {
      id: "about",
      eyebrow: "About",
      title: "Engineering with systems thinking and delivery discipline.",
      description:
        "I design and ship software with an emphasis on maintainability, operational reliability, and the engineering trade-offs that support long-term scale.",
      panels: [
        {
          eyebrow: "Mindset",
          title: "Problem solving over surface-level implementation",
          description:
            "Every system decision should improve clarity, resilience, and delivery speed for the team that inherits it.",
        },
        {
          eyebrow: "Approach",
          title: "Architecture guided by real product constraints",
          description:
            "I move from requirements to implementation by aligning product goals, system boundaries, data flow, and deployment realities.",
        },
        {
          eyebrow: "Focus",
          title: "Prepared for case studies and quantified impact",
          description:
            "This section shell is ready for the deeper experience and metrics content that will be introduced in later phases.",
        },
      ],
    },
    {
      id: "skills",
      eyebrow: "Skills Analytics",
      title: "Breadth across product engineering, backend systems, and DevOps.",
      description:
        "The full interactive ECharts visualizations will land in Phase 3. For now, the section structure and supporting cards are in place.",
      panels: [
        {
          eyebrow: "Frontend",
          title: "React, Next.js, Vue, Nuxt",
          description:
            "Modern UI architecture, server-rendered applications, and component systems designed for maintainability.",
        },
        {
          eyebrow: "Backend",
          title: "Laravel, PHP, Node.js, REST APIs",
          description:
            "Application logic, API integrations, and data flows designed for performance and clear ownership boundaries.",
        },
        {
          eyebrow: "DevOps",
          title: "AWS, Docker, Jenkins, servers",
          description:
            "Infrastructure, deployment automation, and environments built for repeatable release workflows and system reliability.",
        },
      ],
    },
    {
      id: "experience",
      eyebrow: "Experience",
      title: "A portfolio shaped around delivery ownership and architectural impact.",
      description:
        "The experience timeline will be transformed into structured case studies in Phase 4. The anchor and content frame are ready now.",
      panels: [
        {
          eyebrow: "Promilezi",
          title: "System architecture and full-stack execution",
          description:
            "Full-stack ownership across Laravel, React, and Next.js with emphasis on scalable systems and mentoring.",
        },
        {
          eyebrow: "Worldwide Advisory Services",
          title: "PHP systems and agile delivery",
          description:
            "Laravel and Blade engineering with practical implementation discipline and wireframe-informed delivery.",
        },
        {
          eyebrow: "Invoke Solutions / ICEP",
          title: "DevOps depth and backend foundations",
          description:
            "AWS infrastructure, Docker, Jenkins, server management, Node.js services, and database design fundamentals.",
        },
      ],
    },
    {
      id: "devops",
      eyebrow: "DevOps",
      title: "Operational maturity will be a first-class part of the portfolio.",
      description:
        "This dedicated anchor is reserved for the infrastructure showcase that will cover deployment automation, AWS architecture, and system reliability.",
      panels: [
        {
          eyebrow: "CI/CD",
          title: "Jenkins pipelines and deployment confidence",
          description:
            "The upcoming section will focus on repeatable delivery workflows, release safety, and deployment efficiency.",
        },
        {
          eyebrow: "Containers",
          title: "Docker for consistency across environments",
          description:
            "Containerized workflows will be framed around parity, automation, and operational simplicity.",
        },
        {
          eyebrow: "Cloud",
          title: "AWS services aligned to application needs",
          description:
            "EC2, ECS, S3, VPC, and CloudFront will be presented as practical architecture building blocks, not badge icons.",
        },
      ],
    },
    {
      id: "projects",
      eyebrow: "Projects",
      title: "Real systems will be highlighted over toy demos.",
      description:
        "This area is reserved for production-aligned systems highlights that reinforce engineering depth and business relevance.",
      panels: [
        {
          eyebrow: "Selection",
          title: "Case-study-backed project storytelling",
          description:
            "Projects will align to real responsibilities, systems design, and delivery outcomes instead of generic showcase pieces.",
        },
        {
          eyebrow: "Impact",
          title: "Metrics and operational results",
          description:
            "Performance improvements, deployment efficiency, and scalability themes will be surfaced alongside project narratives.",
        },
        {
          eyebrow: "Structure",
          title: "Reusable project card system",
          description:
            "The final implementation will reuse the same content primitives established in this layout phase.",
        },
      ],
    },
    {
      id: "architecture",
      eyebrow: "Architecture",
      title: "System design will be presented as a communication strength.",
      description:
        "This section will evolve into visual diagrams or structured cards that explain how product, infrastructure, and delivery layers fit together.",
      panels: [
        {
          eyebrow: "Boundaries",
          title: "Application, data, and infrastructure separation",
          description:
            "The final content will make architectural reasoning visible to hiring managers and technical reviewers.",
        },
        {
          eyebrow: "Trade-offs",
          title: "Pragmatic technical decision-making",
          description:
            "Each architecture block will communicate reliability, maintainability, and scaling considerations.",
        },
        {
          eyebrow: "Readiness",
          title: "Foundation ready for visual system diagrams",
          description:
            "The layout already supports richer diagram cards and animated architecture storytelling in later phases.",
        },
      ],
    },
    {
      id: "contact",
      eyebrow: "Contact",
      title: "Make it easy for recruiters and teams to reach out quickly.",
      description:
        "Final contact details and referral destinations can be refined later, but the conversion section and CTA hierarchy are now in place.",
      panels: contactLinks.map((link) => ({
        eyebrow: "Connect",
        title: link.label,
        description: link.href,
      })),
    },
  ];

  return (
    <div className="page-grid min-h-screen">
      <SiteHeader />
      <main id="home">
        <section className="hero-shell border-b border-white/10">
          <div className="mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
            <div className="relative z-10 flex flex-col justify-center gap-8">
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                Building scalable systems across product and infrastructure
              </div>
              <div className="space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">
                  {siteMetadata.name}
                </p>
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  {siteMetadata.role}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                  {siteMetadata.tagline}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#experience"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                >
                  View Case Studies
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/5"
                >
                  Get In Touch
                </a>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                {platformPillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative z-10 flex items-center">
              <Panel
                className="w-full"
                eyebrow="Phase 2 Foundation"
                title="Layout shell, structure, and navigation are now in place."
                description="The hero establishes brand positioning while each section anchor below provides the scaffold for content-rich phases to follow."
              >
                <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/75">
                      Focus
                    </p>
                    <p className="mt-3 leading-7">
                      Reusable page structure with premium dark styling and a recruiter-friendly one-page narrative.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/75">
                      Next
                    </p>
                    <p className="mt-3 leading-7">
                      Charts, case studies, DevOps storytelling, and animation polish will layer onto this shell in later phases.
                    </p>
                  </div>
                </div>
              </Panel>
            </div>
          </div>
        </section>

        {phaseTwoSections.map((section) => (
          <SectionShell
            key={section.id}
            id={section.id}
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          >
            {section.panels.map((panel) => (
              <Panel
                key={`${section.id}-${panel.title}`}
                eyebrow={panel.eyebrow}
                title={panel.title}
                description={panel.description}
              />
            ))}
          </SectionShell>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}
