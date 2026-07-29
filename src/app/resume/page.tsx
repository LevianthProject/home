import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Product thinking with technical depth and operating experience."
};

const skills = [
  "Technical product management",
  "Product strategy",
  "Product design",
  "UX and workflow design",
  "Product requirements",
  "Roadmap planning",
  "Technical architecture planning",
  "Cross-functional leadership",
  "Remote-team operations",
  "AI-assisted product development"
];

export default function ResumePage() {
  return (
    <>
      <PageHero
        label="Resume overview"
        title={
          <>
            Product thinking
            <br />
            with technical
            <br />
            depth.
          </>
        }
        copy="A concise public summary. Exact dates and the downloadable PDF will be added only after the final resume is verified."
      />
      <section className="resume-grid">
        <div className="resume-summary">
          <p className="section-kicker">Summary</p>
          <p>
            Technical Product Manager and Product Designer with experience
            across product strategy, UX and workflow design, technical planning,
            cross-functional leadership, remote operations, community building,
            and frontend mentorship.
          </p>
          <p>
            Experienced in translating complex ideas into requirements, role
            systems, user flows, roadmaps, prototypes, infrastructure decisions,
            and implementation plans.
          </p>
          <a className="text-link" href={`mailto:${siteConfig.email}?subject=Resume request`}>
            Request the verified resume <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="resume-skills">
          <p className="section-kicker">Core skills</p>
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
