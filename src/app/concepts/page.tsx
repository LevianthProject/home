import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { NoPrefetchLink as Link } from "@/components/NoPrefetchLink";
import { ConceptIndex } from "@/components/concepts/ConceptIndex";
import { IdeationProcess } from "@/components/concepts/IdeationProcess";
import { PrivateDetailNote } from "@/components/concepts/PrivateDetailNote";
import { concepts } from "@/content/concepts";

export const metadata: Metadata = {
  title: "Concept Lab",
  description:
    "Selected original product, AI, automotive, and physical-digital experience concepts by Ghazariz, presented as high-level public summaries."
};

const archiveThemes = [
  "Visitor Participation",
  "Automotive Education",
  "Safety & Mobility",
  "Physical-Digital Interaction",
  "School Outreach",
  "Personalization",
  "Exhibition Storytelling",
  "Modular Experience Systems"
];

const explorations = [
  [
    "Cosplay Rental Operating Platform",
    "Concept",
    "A B2B SaaS direction for inventory, size, character, condition, booking, deposit, returns, damage, cleaning, reminders, and customer history."
  ],
  [
    "Laundry Subscription and IoT Control",
    "Research",
    "A concept replacing coin-operated access with subscriptions, QR activation, booking, limits, payment, maintenance visibility, and connected machine control."
  ],
  [
    "Virtual Academy",
    "Future direction",
    "A future MLS layer combining lightweight virtual environments, classrooms, voice, whiteboards, assignments, and group activity."
  ],
  [
    "AI-Assisted Game Development",
    "Technical exploration",
    "Exploring coding agents as development partners across Roblox, Godot, and lightweight web-game engines."
  ],
  [
    "Recruitment and Talent Systems",
    "Product direction",
    "Applicant tracking, internship campaigns, screening, interviews, onboarding, talent pools, employer branding, and referrals."
  ]
];

export default function ConceptsPage() {
  return (
    <>
      <section className="concept-hero">
        <div className="concept-hero__marker" aria-hidden="true">
          LAB
        </div>
        <p className="section-kicker">Original ideation / Experience R&D</p>
        <h1>
          Ideas are products
          <br />
          before the interface exists.
        </h1>
        <div className="concept-hero__intro">
          <p>
            I explore product and experience concepts by starting with the
            problem, the human action, and the moment that should be remembered.
          </p>
          <PrivateDetailNote>
            These are selected original proposals and R&D directions. Public
            descriptions are intentionally concise so the underlying mechanics
            and proposal IP remain private.
          </PrivateDetailNote>
        </div>
        <div className="concept-hero__meta" aria-label="Concept Lab focus areas">
          <span>Product Ideation</span>
          <span>Physical + Digital Experience</span>
          <span>Creative Technology</span>
        </div>
      </section>

      <ConceptIndex concepts={concepts} />

      <section className="concept-archive" data-reveal>
        <div className="concept-archive__meta">
          <span>Research system / Automotive Experience R&D</span>
          <span>Experience R&D</span>
        </div>
        <div className="concept-archive__layout">
          <div>
            <h2>
              Not one idea.
              <br />A system for generating better ones.
            </h2>
            <p>
              A research-led exploration of modular automotive exhibition and
              education experiences, shaped around visitor roles, physical
              interaction, learning outcomes, memorability, and deployment
              flexibility.
            </p>
            <PrivateDetailNote>The detailed concept inventory remains private.</PrivateDetailNote>
          </div>
          <div className="concept-archive__themes">
            {archiveThemes.map((theme) => (
              <span key={theme}>{theme}</span>
            ))}
          </div>
        </div>
        <p className="concept-archive__role">
          Research · Concept Strategy · Experience Ideation · Proposal Development
        </p>
      </section>

      <IdeationProcess />

      <section className="concept-explorations" id="explorations">
        <div className="section-intro">
          <p>Product & technical explorations</p>
          <h2>
            Earlier questions,
            <br />
            separated from proposal-stage concepts.
          </h2>
          <div>
            <p>
              These remain visible as exploratory product directions, research
              threads, and technical experiments rather than shipped case
              studies or client outcomes.
            </p>
          </div>
        </div>
        <div className="thoughts-index concept-explorations__list">
          {explorations.map(([title, status, copy], index) => (
            <article key={title} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p>{status}</p>
                <h2>{title}</h2>
              </div>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <Link className="index-link" href="/work">
          Back to product work <ArrowUpRight aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
