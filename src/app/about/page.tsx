import type { Metadata } from "next";
import { NoPrefetchLink as Link } from "@/components/NoPrefetchLink";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ghazariz works between product strategy, experience design, technical planning, and execution."
};

const principles = [
  ["Systems before decoration", "Interface polish cannot repair unclear roles, broken workflows, or an undefined product model."],
  ["MVP before unnecessary scale", "Separate what a product must prove now from what it may become later."],
  ["Decisions should be visible", "Remote teams move faster when ownership, review cycles, and trade-offs are documented."],
  ["Technology serves the product", "Infrastructure is evaluated from usage patterns and product needs, not trends alone."],
  ["AI should increase judgment", "Agents support research, planning, prototyping, coding, and documentation while people remain accountable."]
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Ghazariz"
        title={
          <>
            Clarity across
            <br />
            products, teams,
            <br />
            and technology.
          </>
        }
        copy="A product-and-technology operator from Indonesia, most useful when the problem is broad, fragmented, expensive, or still difficult to explain."
      />
      <section className="reading-layout">
        <aside>
          <p>Between the whiteboard and the real system.</p>
          <Link className="text-link" href="/resume">
            Resume overview <ArrowUpRight aria-hidden="true" />
          </Link>
        </aside>
        <div className="prose-large">
          <p>
            My experience crosses community management, frontend mentorship,
            product management, product design, technology leadership,
            infrastructure planning, recruitment systems, remote-team
            operations, and cross-functional execution.
          </p>
          <p>
            I have worked on education platforms, parental technology, museum
            experiences, centralized content systems, performance and reward
            products, websites, and early-stage SaaS and IoT concepts.
          </p>
          <p>
            I am usually brought into problems with too many ideas, unclear
            users, overlapping roles, expensive technology choices, missing
            workflows, or teams that need a more executable plan. My job is to
            turn that ambiguity into a product model: who is involved, what
            each role needs, where value moves, which assumptions matter, what
            belongs in the MVP, and what documentation makes execution possible.
          </p>
        </div>
      </section>
      <section className="principles-section">
        <p className="section-kicker">Working principles</p>
        <div>
          {principles.map(([title, copy], index) => (
            <article key={title} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
