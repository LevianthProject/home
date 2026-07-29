import { NoPrefetchLink as Link } from "@/components/NoPrefetchLink";
import {
  ArrowUpRight,
  Boxes,
  Braces,
  Compass,
  Layers3,
  MoveRight
} from "lucide-react";
import { SectionIntro } from "./SectionIntro";
import { siteConfig } from "@/lib/site";

const processSteps = [
  ["Find the real problem", "Start from operational reality, user friction, and business constraints."],
  ["Structure the product", "Define users, roles, permissions, workflows, value, and boundaries."],
  ["Choose the smallest credible version", "Separate what the product must prove now from future ambition."],
  ["Connect design and technology", "Translate decisions into flows, requirements, architecture, and risks."],
  ["Make execution visible", "Document ownership, review cycles, decisions, and next actions."]
];

const capabilityGroups = [
  {
    icon: Compass,
    title: "Product strategy",
    items: ["Product framing", "MVP definition", "Pricing hypotheses", "Roadmaps", "Risk analysis"]
  },
  {
    icon: Layers3,
    title: "Product & experience",
    items: ["Information architecture", "User journeys", "Role systems", "Workflow design", "Prototypes"]
  },
  {
    icon: Braces,
    title: "Technical planning",
    items: ["Product requirements", "API and data flows", "Cloud trade-offs", "Capacity planning", "Delivery phases"]
  },
  {
    icon: Boxes,
    title: "Leadership & operations",
    items: ["Cross-functional work", "Remote workflows", "Hiring systems", "Performance systems", "Stakeholders"]
  }
];

const experiments = [
  ["Cosplay rental operations", "Concept", "Inventory, booking, deposits, returns, damage, and customer history."],
  ["Laundry subscription + IoT", "Research", "Subscription access, QR activation, machine control, and maintenance visibility."],
  ["Virtual Academy", "Future direction", "A future MLS layer for classrooms, voice, whiteboards, and group activity."],
  ["AI-assisted game development", "Technical exploration", "Ongoing agent workflows across lightweight game engines."]
];

export function HomeSections() {
  return (
    <>
      <section className="section positioning">
        <div className="positioning__marker" data-drift aria-hidden="true">
          SYSTEM
        </div>
        <p className="section-kicker" data-reveal>
          Positioning
        </p>
        <h2 data-reveal>
          I do not only design interfaces.
          <span>I design the system behind them.</span>
        </h2>
        <p className="positioning__copy" data-reveal>
          My work begins where products are still ambiguous: defining the real
          problem, mapping users and roles, deciding the smallest credible
          product, documenting trade-offs, and connecting design decisions to
          technical execution.
        </p>
      </section>

      <section className="section featured-narrative">
        <div className="featured-narrative__sticky">
          <p className="section-kicker">Featured system / MLS</p>
          <h2>
            From an internal LMS
            <br />
            to a multi-tenant
            <br />
            education platform.
          </h2>
          <Link className="text-link" href="/work/mls">
            Read the full case <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className="narrative-steps">
          {[
            ["Origin", "Started from internal learning and internship needs."],
            ["Expansion", "Scope grew toward institutions, bootcamps, and future creator capability."],
            ["Separation", "Business models, payment logic, and user flows needed clear boundaries."],
            ["Credibility", "The first phase had to remain web-first and technically realistic."],
            ["Scale", "Infrastructure decisions followed concurrency, media, storage, and cost—not vanity numbers."]
          ].map(([title, copy], index) => (
            <article key={title} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <MoveRight aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <SectionIntro
          label="Process"
          title={
            <>
              Reduce ambiguity
              <br />
              before teams spend heavily.
            </>
          }
        />
        <ol className="process-list">
          {processSteps.map(([title, copy], index) => (
            <li key={title} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
        <Link className="index-link" href="/process">
          Explore the complete process <ArrowUpRight aria-hidden="true" />
        </Link>
      </section>

      <section className="section capabilities-section">
        <SectionIntro
          label="Capabilities"
          title={
            <>
              Strategy to system.
              <br />
              System to execution.
            </>
          }
        />
        <div className="capability-rows">
          {capabilityGroups.map(({ icon: Icon, title, items }) => (
            <article key={title} data-reveal>
              <div className="capability-rows__title">
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
              </div>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section">
        <SectionIntro
          label="Experience"
          title={
            <>
              Across community,
              <br />
              product, and technology.
            </>
          }
          copy="A concise snapshot. Exact public dates remain deliberately omitted until verified."
        />
        <div className="experience-line">
          {[
            ["Product & Technology Leadership", "Minilemon ecosystem", "Product strategy, UX direction, infrastructure, teams, hiring, and cross-functional execution."],
            ["Frontend Mentor", "Codepolitan / KelasFullstack ecosystem", "Frontend learning, technical guidance, and developer growth."],
            ["Community Manager", "Developer education communities", "Communication, engagement, learning support, events, and member experience."]
          ].map(([role, organization, detail]) => (
            <article key={role} data-reveal>
              <div className="experience-line__dot" aria-hidden="true" />
              <p>{organization}</p>
              <h3>{role}</h3>
              <div>{detail}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-preview">
        <div data-reveal>
          <p className="section-kicker">About</p>
          <h2>
            Between the whiteboard
            <br />
            and the real system.
          </h2>
        </div>
        <div className="about-preview__copy" data-reveal>
          <p>
            I work across strategy, UX, product logic, technology decisions,
            and operating systems. I am most useful when a project is ambitious,
            fragmented, or still difficult to explain.
          </p>
          <Link className="text-link" href="/about">
            More about how I think <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className="about-preview__signal" aria-hidden="true">
          <span>CLARITY</span>
          <span>TRADE-OFFS</span>
          <span>EXECUTION</span>
        </div>
      </section>

      <section className="section thoughts-preview">
        <SectionIntro
          label="Thoughts & experiments"
          title={
            <>
              Where assumptions
              <br />
              become product questions.
            </>
          }
        />
        <div className="experiment-list">
          {experiments.map(([title, status, copy]) => (
            <article key={title} data-reveal>
              <div>
                <span>{status}</span>
                <h3>{title}</h3>
              </div>
              <p>{copy}</p>
              <ArrowUpRight aria-hidden="true" />
            </article>
          ))}
        </div>
        <Link className="index-link" href="/thoughts">
          View all experiments <ArrowUpRight aria-hidden="true" />
        </Link>
      </section>

      <section className="contact-stage">
        <div className="contact-stage__orbit" aria-hidden="true">
          <span />
        </div>
        <p className="section-kicker">Start a conversation</p>
        <h2>
          Have a complex
          <br />
          product problem?
        </h2>
        <p>
          I am open to product, design, technology leadership, and selected
          collaboration opportunities.
        </p>
        <a className="contact-stage__link" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
          <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
    </>
  );
}
