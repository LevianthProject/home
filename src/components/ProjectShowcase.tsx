import { NoPrefetchLink as Link } from "@/components/NoPrefetchLink";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/content/projects";
import { ProjectVisual } from "./ProjectVisual";
import { SectionIntro } from "./SectionIntro";

export function ProjectShowcase() {
  return (
    <section id="selected-work" className="section selected-work">
      <SectionIntro
        label="01 / Selected work"
        title={
          <>
            Selected systems,
            <br />
            not just screens.
          </>
        }
        copy="These projects connect product strategy, user experience, business logic, technical constraints, and delivery decisions."
      />

      <div className="project-stack">
        {featuredProjects.map((project, index) => (
          <article className="project-feature" key={project.slug} data-reveal>
            <div className="project-feature__meta">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{project.category}</span>
              <span>{project.statusLabel}</span>
            </div>
            <div className="project-feature__layout">
              <div className="project-feature__copy">
                <p>{project.hook}</p>
                <h3>{project.title}</h3>
                <p className="project-feature__summary">{project.summary}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link href={`/work/${project.slug}`} className="text-link">
                  Read case study <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
              <ProjectVisual project={project} />
            </div>
          </article>
        ))}
      </div>
      <Link className="index-link" href="/work">
        View the complete work index <ArrowUpRight aria-hidden="true" />
      </Link>
    </section>
  );
}
