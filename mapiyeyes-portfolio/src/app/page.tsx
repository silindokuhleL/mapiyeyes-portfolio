import { ArchitectureSection } from "@/components/sections/architecture-section";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { DevOpsPreviewSection } from "@/components/sections/devops-preview-section";
import { ExperiencePreviewSection } from "@/components/sections/experience-preview-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ProfileSection } from "@/components/sections/profile-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HashScrollRestorer } from "@/components/layout/hash-scroll-restorer";

export default function Home() {
  return (
    <div className="page-grid min-h-screen">
      <HashScrollRestorer />
      <SiteHeader />
      <main>
        <HeroSection />
        <ProfileSection />
        <AboutSection />
        <SkillsSection />
        <ExperiencePreviewSection />
        <DevOpsPreviewSection />
        <ProjectsSection />
        <ArchitectureSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
