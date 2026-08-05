import type { Concept } from "@/content/concepts";
import { ConceptVisualStage } from "./ConceptVisualStage";
import { PrivateDetailNote } from "./PrivateDetailNote";

export function ConceptIndex({ concepts }: { concepts: Concept[] }) {
  return (
    <section className="concept-index" aria-label="Signature concept index">
      {concepts.map((concept, index) => (
        <article className="concept-index__row" key={concept.slug} data-reveal>
          <div className="concept-index__number">
            {String(index + 1).padStart(2, "0")}
          </div>
          <ConceptVisualStage concept={concept} />
          <div className="concept-index__copy">
            <div className="concept-index__meta">
              <span>{concept.category}</span>
              <span>{concept.stage}</span>
            </div>
            <h2>{concept.title}</h2>
            <p>{concept.premise}</p>
            <dl>
              <div>
                <dt>Contribution</dt>
                <dd>{concept.contribution.join(" · ")}</dd>
              </div>
              <div>
                <dt>Stage</dt>
                <dd>{concept.stage}</dd>
              </div>
            </dl>
            {concept.designQuestion ? (
              <p className="concept-index__question">{concept.designQuestion}</p>
            ) : null}
            <PrivateDetailNote>{concept.detailNote}</PrivateDetailNote>
          </div>
        </article>
      ))}
    </section>
  );
}
