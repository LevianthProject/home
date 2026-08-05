import type { Concept } from "@/content/concepts";

export function ConceptVisualStage({
  concept,
  active = true
}: {
  concept: Concept;
  active?: boolean;
}) {
  return (
    <div
      className={`concept-visual concept-visual--${concept.visual}`}
      data-active={active}
      aria-label={`Sanitized visual teaser for ${concept.title}`}
    >
      <div className="concept-visual__field" aria-hidden="true" />
      <div className="concept-visual__caption">
        <span>{concept.category}</span>
        <span>{concept.stage}</span>
      </div>
      <div className="concept-visual__object" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="concept-visual__beam" aria-hidden="true" />
      <div className="concept-visual__name" aria-hidden="true">
        {concept.title}
      </div>
    </div>
  );
}
