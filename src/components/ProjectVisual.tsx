import type { PortfolioProject } from "@/content/projects";

const visualNodes: Record<PortfolioProject["visual"], string[]> = {
  network: ["Institution", "Bootcamp", "Mentor", "Student", "Content"],
  loop: ["Learn", "Validate", "Reward", "Play", "Reflect"],
  publishing: ["Writer", "Review", "Publish", "Museum A", "Museum B"],
  performance: ["Evidence", "Review", "XP", "Level", "Reward"],
  culture: ["Story", "Collection", "Context", "Visit", "Remember"],
  experiments: ["Problem", "Hypothesis", "Prototype", "Learn", "Decide"]
};

export function ProjectVisual({ project }: { project: PortfolioProject }) {
  return (
    <div
      className={`project-visual project-visual--${project.visual}`}
      aria-label={`Sanitized system visualization for ${project.title}`}
    >
      <div className="project-visual__grid" aria-hidden="true" />
      <span className="project-visual__caption">SANITIZED SYSTEM VIEW</span>
      <div className="project-visual__core">
        <span>{project.shortTitle}</span>
      </div>
      {visualNodes[project.visual].map((node, index) => (
        <div
          className={`project-visual__node project-visual__node--${index + 1}`}
          key={node}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          {node}
        </div>
      ))}
      <div className="project-visual__line project-visual__line--one" />
      <div className="project-visual__line project-visual__line--two" />
      <div className="project-visual__line project-visual__line--three" />
    </div>
  );
}
