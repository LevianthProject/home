"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { NoPrefetchLink as Link } from "@/components/NoPrefetchLink";
import { homepageConcepts } from "@/content/concepts";
import { ConceptVisualStage } from "./ConceptVisualStage";
import { PrivateDetailNote } from "./PrivateDetailNote";

export function ConceptLabPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeConcept = homepageConcepts[activeIndex] ?? homepageConcepts[0];

  return (
    <section className="section concept-preview" id="concept-lab-preview">
      <div className="concept-preview__intro" data-reveal>
        <p className="section-kicker">02 / Original ideation</p>
        <h2>
          Original concepts,
          <br />
          before they become products.
        </h2>
        <div>
          <p>
            Selected product and interactive-experience concepts developed
            through research, problem framing, interaction design, and
            feasibility thinking.
          </p>
          <PrivateDetailNote>
            The public summaries stay intentionally high-level. The original
            proposal mechanics remain private.
          </PrivateDetailNote>
        </div>
      </div>

      <div className="concept-preview__stage" data-reveal>
        <div className="concept-preview__index" role="list">
          {homepageConcepts.map((concept, index) => (
            <button
              className="concept-preview__row"
              data-active={index === activeIndex}
              key={concept.slug}
              type="button"
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              role="listitem"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{concept.title}</strong>
              <em>{concept.stage}</em>
              <p>{concept.premise}</p>
            </button>
          ))}
        </div>
        <div className="concept-preview__visual">
          {homepageConcepts.map((concept) => (
            <ConceptVisualStage
              active={concept.slug === activeConcept.slug}
              concept={concept}
              key={concept.slug}
            />
          ))}
        </div>
      </div>

      <Link className="index-link" href="/concepts">
        Explore Concept Lab <ArrowUpRight aria-hidden="true" />
      </Link>
    </section>
  );
}
