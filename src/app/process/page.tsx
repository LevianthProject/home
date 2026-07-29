import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Ghazariz reduces ambiguity and connects product strategy, UX, technical planning, and execution."
};

const steps = [
  {
    title: "Find the real problem",
    question: "What operational reality makes this worth solving?",
    detail:
      "Start from user friction, business constraints, existing tools, incentives, and observable behavior—not a feature wishlist."
  },
  {
    title: "Structure the product",
    question: "Who acts, what changes, and where does value move?",
    detail:
      "Define users, roles, permissions, journeys, workflows, value exchange, and product boundaries before interface detail."
  },
  {
    title: "Choose the smallest credible version",
    question: "What must the product prove first?",
    detail:
      "Separate the MVP from future ambition. Delay expensive ecosystems until the core behavior can be tested honestly."
  },
  {
    title: "Connect design and technology",
    question: "What must be true for this experience to work?",
    detail:
      "Translate decisions into UX flows, requirements, data paths, architecture options, capacity assumptions, risks, and phases."
  },
  {
    title: "Make execution visible",
    question: "How will the team know what happens next?",
    detail:
      "Clarify ownership, decision logs, review cycles, quality checks, stakeholder communication, and measurable next actions."
  }
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        label="Process"
        title={
          <>
            Reduce ambiguity
            <br />
            before teams
            <br />
            spend heavily.
          </>
        }
        copy="The process is not a fixed ceremony. It is a sequence of questions that turns ambition into a credible product direction."
      />
      <section className="process-deep">
        {steps.map((step, index) => (
          <article key={step.title} data-reveal>
            <div>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step.question}</p>
            </div>
            <h2>{step.title}</h2>
            <p>{step.detail}</p>
          </article>
        ))}
      </section>
    </>
  );
}
