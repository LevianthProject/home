import type { Metadata } from "next";
import { NoPrefetchLink as Link } from "@/components/NoPrefetchLink";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import MlsCaseStudy from "@/content/case-studies/mls.mdx";
import MlSpaceCaseStudy from "@/content/case-studies/ml-space.mdx";
import MuseumCmsCaseStudy from "@/content/case-studies/museum-cms.mdx";
import { ProjectVisual } from "@/components/ProjectVisual";
import { getProject, projects } from "@/content/projects";
import { notFound } from "next/navigation";

const caseStudies = {
  mls: MlsCaseStudy,
  "ml-space": MlSpaceCaseStudy,
  "museum-cms": MuseumCmsCaseStudy
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || !project.hasCaseStudy) {
    return {};
  }

  return {
    title: project.shortTitle,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Ghazariz`,
      description: project.summary
    }
  };
}

export default async function CaseStudyPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const Content = caseStudies[slug as keyof typeof caseStudies];

  if (!project || !Content) {
    notFound();
  }

  const caseStudyProjects = projects.filter((entry) => entry.hasCaseStudy);
  const currentIndex = caseStudyProjects.findIndex((entry) => entry.slug === slug);
  const nextProject =
    caseStudyProjects[(currentIndex + 1) % caseStudyProjects.length];

  return (
    <article className="case-study">
      <header className="case-hero">
        <Link className="back-link" href="/work">
          <ArrowLeft aria-hidden="true" /> All work
        </Link>
        <p>{project.category}</p>
        <h1>{project.title}</h1>
        <div className="case-hero__summary">
          <p>{project.hook}</p>
          <span>{project.statusLabel}</span>
        </div>
        <ProjectVisual project={project} />
        <div className="case-meta">
          <div>
            <span>Role</span>
            <p>{project.roles.join(" · ")}</p>
          </div>
          <div>
            <span>Status</span>
            <p>{project.statusLabel}</p>
          </div>
          <div>
            <span>Surface</span>
            <p>Web product system</p>
          </div>
        </div>
      </header>
      <div className="case-body">
        <Content />
      </div>
      <footer className="next-case">
        <p>Next system</p>
        <Link href={`/work/${nextProject.slug}`}>
          {nextProject.title}
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </footer>
    </article>
  );
}
