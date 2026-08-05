const steps = [
  [
    "Research the real landscape",
    "Study existing products, experiences, competitors, and adjacent industries before proposing novelty."
  ],
  [
    "Give the user a role",
    "Turn the visitor into a driver, builder, learner, creator, explorer, or decision maker instead of a spectator."
  ],
  [
    "Find one memorable moment",
    "Define the single interaction someone should be able to describe after leaving."
  ],
  [
    "Connect physical and digital",
    "Use objects, movement, space, touch, screens, AR, AI, or sensors only when they strengthen the experience."
  ],
  [
    "Design the outcome",
    "A strong experience ends with understanding, achievement, a result, a story, or a useful next action."
  ],
  [
    "Test feasibility and modularity",
    "Think about operation, reset, throughput, technology constraints, and how the idea can scale from prototype to larger deployment."
  ]
];

export function IdeationProcess() {
  return (
    <section className="ideation-process">
      <div className="ideation-process__statement" data-reveal>
        <h2>
          The technology is not the idea.
          <br />
          The experience is.
        </h2>
        <p>
          I do not start with &quot;use AR&quot; or &quot;add AI.&quot; I start with what someone
          should do, understand, feel, or remember - then choose the technology
          that makes that interaction credible.
        </p>
      </div>
      <ol className="ideation-process__steps">
        {steps.map(([title, copy], index) => (
          <li key={title} data-reveal>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
