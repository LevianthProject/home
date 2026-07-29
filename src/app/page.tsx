/*
THESIS: Product systems become visible as one sculptural chamber; the page refuses the generic portfolio gallery.
OWN-WORLD: Near-black architecture, ultraviolet reflection, monumental grotesk type, thin system notation, and authored diagrams.
STORY: Recognize Ghazariz, explore selected systems, understand the decisions, then start a conversation.
FIRST VIEWPORT: Three-line headline left, black-violet sculpture right, rotating availability seal, proof rail at the floor.
FORM: Direction 03 / Experimental Bold, pinned by the supplied reference; asymmetrical cinematic portfolio experience.
*/

import { Hero } from "@/components/Hero";
import { HomeSections } from "@/components/HomeSections";
import { ProjectShowcase } from "@/components/ProjectShowcase";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectShowcase />
      <HomeSections />
    </>
  );
}
