import { DesignSection } from "@/components/sections/design-section";
import { HeroSection } from "@/components/sections/hero-section";
import { NotesSection } from "@/components/sections/notes-section";
import { VisualLabSection } from "@/components/sections/visual-lab-section";
import { WorkSection } from "@/components/sections/work-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WorkSection />
      <SkillsSection/>
      <DesignSection />
      <NotesSection />
      <VisualLabSection />
    </main>
  );
}