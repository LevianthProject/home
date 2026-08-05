import type { Metadata } from "next";
import { NoPrefetchLink as Link } from "@/components/NoPrefetchLink";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProjectVisual } from "@/components/ProjectVisual";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Selected product systems across education, parental technology, museums, internal operations, with a clear bridge into original concept work."
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Work index"
        title={
          <>
            Systems,
            <br />
            decisions,
            <br />
            trade-offs.
          </>
        }
        copy="A portfolio of product strategy, experience design, technical planning, and operating-system decisions—not a gallery of disconnected screens."
      />
      <section className="work-index">
        <div className="work-index__group-label">Product / system case studies</div>
        {projects.map((project, index) => (
          <article key={project.slug} data-reveal>
            <div className="work-index__meta">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{project.category}</span>
              <span>{project.statusLabel}</span>
            </div>
            <ProjectVisual project={project} />
            <div className="work-index__copy">
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {project.hasCaseStudy ? (
                <Link className="text-link" href={`/work/${project.slug}`}>
                  Read case study <ArrowUpRight aria-hidden="true" />
                </Link>
              ) : (
                <span className="coming-label">Full case study planned for Phase 2</span>
              )}
            </div>
          </article>
        ))}
        <div className="work-bridge" data-reveal>
          <p>Original ideation</p>
          <h2>Some of my work begins before a product exists.</h2>
          <span>Beyond products and systems, I also develop original concepts for interactive experiences, AI services, and creative technology.</span>
          <Link className="text-link" href="/concepts">
            Open Concept Lab <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
