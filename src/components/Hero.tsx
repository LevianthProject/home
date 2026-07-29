import Image from "next/image";
import { NoPrefetchLink as Link } from "@/components/NoPrefetchLink";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { assetPath } from "@/lib/site";

const capabilities = [
  ["Product strategy", "MVP, positioning, pricing, roadmap"],
  ["System & UX design", "Roles, workflows, journeys, prototypes"],
  ["Technical planning", "Architecture, scope, infrastructure trade-offs"],
  ["Cross-functional leadership", "Product, technology, people, operations"]
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__ambient" aria-hidden="true" />
      <div className="hero__copy">
        <p className="hero__role">
          <span aria-hidden="true" />
          Technical Product Manager · Product Designer
        </p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__line">
            <span>Systems</span>
          </span>
          <span className="hero__line">
            <span>Beyond</span>
          </span>
          <span className="hero__line">
            <span>Screens.</span>
          </span>
        </h1>
        <div className="hero__support">
          <p>
            I turn complex product ideas into structured, usable, and buildable
            systems—connecting strategy, experience design, technical planning,
            and execution.
          </p>
          <a className="arrow-cta" href="#selected-work">
            <span>Explore selected work</span>
            <span className="arrow-cta__icon">
              <ArrowDownRight aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>

      <div className="hero__art" aria-hidden="true">
        <Image
          className="hero__art-image"
          src={assetPath("/images/hero/sculptural-systems.png")}
          alt=""
          fill
          priority
          sizes="(max-width: 720px) 100vw, 62vw"
        />
      </div>

      <div className="availability" role="img" aria-label="Open to product and technology opportunities">
        <svg viewBox="0 0 180 180" aria-hidden="true">
          <defs>
            <path
              id="availability-path"
              d="M 90,90 m -66,0 a 66,66 0 1,1 132,0 a 66,66 0 1,1 -132,0"
            />
          </defs>
          <text>
            <textPath href="#availability-path">
              OPEN TO PRODUCT &amp; TECHNOLOGY OPPORTUNITIES ·
            </textPath>
          </text>
        </svg>
        <ArrowDownRight aria-hidden="true" />
      </div>

      <div className="capability-strip">
        {capabilities.map(([label, detail], index) => (
          <div key={label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{label}</strong>
            <p>{detail}</p>
          </div>
        ))}
        <Link className="capability-strip__link" href="/about">
          How I work <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
