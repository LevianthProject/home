# Codex Continuation Prompt — Add Original Ideation / Concept Lab to Ghazariz Portfolio

> **Context:** This is a continuation update for the existing Ghazariz portfolio build.  
> **Existing source of truth:** `Ghazariz_Portfolio_Codex_Master_Brief.md`  
> **Existing visual direction:** Direction 03 — Experimental / Bold  
> **Do not rebuild from scratch.** Extend the existing portfolio and preserve its established visual system, layout quality, responsive behavior, motion standards, and accuracy rules.

---

# 0. Objective

Update the existing Ghazariz portfolio so it communicates an additional capability that is currently underrepresented:

**Original product ideation, creative-technology concepts, and physical-digital experience design.**

Ghazariz has developed multiple original concept proposals spanning:

- automotive interactive experiences;
- physical + digital exhibition concepts;
- AR gamification;
- AI-assisted experiential installations;
- smart mirror products;
- education and mobile-learning experiences;
- research-led automotive experience systems.

These are **original ideation/proposal-stage concepts**, not necessarily shipped client products.

The portfolio must show this capability **without exposing the full proposal mechanics, confidential research, internal architecture, budgets, risk registers, client-specific details, or reusable IP**.

The goal is to make a recruiter, founder, innovation team, creative-technology studio, or potential partner understand:

> Ghazariz can create the product/experience concept before there is an interface to design.

---

# 1. Important Accuracy and IP Rules

These rules are mandatory.

## 1.1 Public status language

For the concepts in this update, use only status labels such as:

- `Original Concept`
- `Concept Development`
- `Proposal`
- `Experience R&D`
- `Product Ideation`
- `Exploration`

Do **not** label them:

- Shipped
- Launched
- Production
- Client Work
- Delivered to Toyota
- Implemented
- Live

unless Ghazariz explicitly validates that status later.

## 1.2 Brand/client neutrality

The source material contains Toyota-specific ideation.

The public portfolio must **not imply Toyota was a confirmed client, approved the concepts, commissioned them, or implemented them**.

For public-facing copy:

- remove `Toyota` from concept names where possible;
- remove `Veloz HEV`;
- remove `Hilux`;
- remove client-facing brand claims;
- do not show Toyota logos;
- do not call anything a Toyota project.

Use the generic public names defined later in this document.

## 1.3 Protect original IP

Do not publish:

- full proposal documents;
- downloadable DOCX/PDF proposal files;
- the source ZIP;
- raw handoff documents;
- full interaction specifications;
- exact object-tracking implementation;
- exact QR validation/data model;
- architecture diagrams from the source proposals;
- backend/API design;
- exact technical stacks for these concepts;
- detailed hospital integration specifications;
- budgets or commercial estimates;
- risk registers;
- implementation schedules;
- client-specific strategy;
- detailed mode-by-mode experience logic;
- complete feature inventories;
- research inventories;
- full lists of ideation concepts;
- internal proposal prompts;
- confidential diagrams.

Do not place `handoff-knowledge.zip`, proposal DOCX files, handoff Markdown files, or extracted private source files anywhere inside `public/` or any deployed static directory.

Do not commit private proposal source files to a public repository.

## 1.4 Safe level of detail

A concept may publicly show only:

1. category;
2. public concept name;
3. one-sentence premise;
4. Ghazariz's contribution;
5. stage/status;
6. a high-level visual teaser;
7. an optional single sentence about the design question.

That is enough.

If more detail is needed, use:

`Selected concept details are intentionally withheld.`

or:

`Public summary only — detailed mechanics remain private.`

Do not make the confidentiality note look defensive. Keep it understated.

## 1.5 No novelty inflation

Do not claim:

- “first in Indonesia”;
- “world-first”;
- “never done before”;
- “industry-first”.

Use phrasing such as:

- `an original concept exploration`;
- `a research-led proposal`;
- `a physical-digital experience direction`;
- `an exploration of a different interaction model`.

---

# 2. Resolve Naming Conflicts

There are two different concepts whose historical working names used the word “AutoCanvas”.

Do not merge them.

For the public portfolio, canonicalize them as follows:

### Sliding vehicle X-ray concept

Use:

**AutoReveal Xperience**

Do not use `AutoCanvas Reveal` publicly for this concept.

### Projection + AI personalization concept

Use:

**AutoCanvas Experience Studio**

These must remain clearly separate concepts.

---

# 3. Update the Portfolio Positioning

The existing portfolio already positions Ghazariz across product, design, and technology.

Extend it to explicitly include **experience design and original ideation**.

## Recommended primary descriptor

Use:

`Product, Technology & Experience Designer`

as a supporting descriptor where appropriate.

Do not remove the stronger existing executive/product-technology positioning from the broader portfolio.

## Updated short positioning sentence

Where the current site says:

> I turn complex ideas into systems teams can actually build.

retain that core thought, but where there is room use:

> I turn complex ideas into products, systems, and interactive experiences teams can understand and build.

Do not repeat this exact line in every section.

## Add to capabilities

Add a new capability cluster or sub-capability:

### Experience & Concept Design

Possible items:

- Original Product Ideation
- Interactive Experience Design
- Physical-Digital Experience
- Creative Technology Concepts
- Experience Architecture
- Proposal & Stakeholder Storytelling
- Concept Validation
- Research-led Ideation

Do not turn this into a dense badge cloud.

---

# 4. Homepage Structural Update

The current homepage order is:

```text
Hero
Selected Work
Positioning / What I Actually Do
Featured Case Study Narrative
Process
Capabilities
Experience Snapshot
About Preview
Thoughts / Experiments Preview
Contact / Footer
```

Update it to:

```text
Hero
Selected Work
Original Concepts / Concept Lab Preview
Positioning / What I Actually Do
Featured Case Study Narrative
Process
Capabilities
Experience Snapshot
About Preview
Experiments / Research Preview
Contact / Footer
```

The new concept section must be clearly separated from shipped/development product case studies.

Do not merge proposal-stage concepts into `Selected Work` as if they have the same status as MLS, ML Space, Museum CMS, Miniboard, or other product/system work.

---

# 5. New Homepage Section — Concept Lab Preview

## Section label

`02 / ORIGINAL IDEATION`

Renumber later homepage section labels consistently after inserting this section.

## Main heading

Use:

```text
ORIGINAL CONCEPTS,
BEFORE THEY BECOME PRODUCTS.
```

Alternative if it composes better visually:

```text
I DESIGN THE IDEA
BEFORE THE INTERFACE EXISTS.
```

Use only one.

## Intro copy

Use:

```text
Selected product and interactive-experience concepts developed through research, problem framing, interaction design, and feasibility thinking.

The public summaries stay intentionally high-level. The original proposal mechanics remain private.
```

## Visual behavior

Do **not** create a generic 4-card SaaS grid.

Match Direction 03.

Preferred desktop treatment:

- oversized numbered concept index on the left;
- one active concept at a time;
- concept name + one-line premise;
- changing local visual teaser on the right;
- hover or scroll changes the active concept;
- subtle violet illumination;
- large black negative space;
- restrained metadata;
- a `VIEW CONCEPT LAB` CTA.

Possible interaction:

```text
01 AutoReveal Xperience
02 AutoForge AR
03 AutoCanvas Experience Studio
04 Interactive Smart Table
```

When a row is active:

- title becomes bright;
- a concise premise appears;
- relevant visual teaser crossfades/slides in;
- status `Original Concept / Proposal` remains small;
- no detailed feature list is revealed.

On mobile:

- use stacked concept blocks;
- no hover dependency;
- each item includes its own static teaser;
- no excessive sticky animation.

## Homepage concept set

Only feature these four on the homepage:

1. AutoReveal Xperience
2. AutoForge AR
3. AutoCanvas Experience Studio
4. Interactive Smart Table

Use the exact public copy defined in Section 8.

Add CTA:

`EXPLORE CONCEPT LAB`

Route:

`/concepts`

---

# 6. Navigation Update

The current navigation can be simplified to:

```text
WORK
CONCEPTS
ABOUT
PROCESS
CONTACT
```

If the existing nav already has a strong information architecture, preserve its visual treatment.

`CONCEPTS` must route to `/concepts`.

Do not create an overcrowded navigation bar.

The existing Thoughts/Experiments content can remain discoverable through Work/About/footer or within the Concepts page, but `CONCEPTS` is now more strategically important than a generic `Thoughts` nav item.

---

# 7. New Route — `/concepts`

Create a dedicated page called **Concept Lab**.

This is **not** a normal portfolio case-study index.

It should feel like an innovation archive / R&D gallery.

## 7.1 Hero

### Eyebrow

`ORIGINAL IDEATION / EXPERIENCE R&D`

### Heading

```text
IDEAS ARE PRODUCTS
BEFORE THE INTERFACE EXISTS.
```

### Intro

```text
I explore product and experience concepts by starting with the problem, the human action, and the moment that should be remembered.

These are selected original proposals and R&D directions. Public descriptions are intentionally concise so the underlying mechanics and proposal IP remain private.
```

### Small metadata

Possible three-part descriptor:

```text
PRODUCT IDEATION
PHYSICAL + DIGITAL EXPERIENCE
CREATIVE TECHNOLOGY
```

Do not add fake counts such as “50+ concepts” unless a verified count is later provided.

---

# 7.2 Signature Concept Index

Show all eight selected public concepts:

1. AutoReveal Xperience
2. AutoForge AR
3. AutoCanvas Experience Studio
4. Interactive Smart Table
5. MiraServe AI Smart Mirror
6. VITALIS Care Mirror AI
7. Digital Drive Capsule
8. Mobile Mobility Learning Lab

Each item must use the public copy in Section 8.

Recommended visual approach:

- large editorial/experimental rows rather than small cards;
- index numbers `01–08`;
- one strong teaser image per concept;
- short category and status;
- title;
- one sentence only;
- contribution line;
- optional `DETAILS WITHHELD` micro-label;
- no “Read full case study” button.

A row may expand slightly to show:

```text
Premise
Contribution
Stage
```

Nothing more.

Do not create detailed individual routes for these concepts in the first release.

---

# 7.3 Automotive Experience R&D Archive

The source material contains a much larger body of automotive exhibition ideation.

Do not publish the full idea inventory.

Instead include one high-level archive block:

### Label

`RESEARCH SYSTEM / AUTOMOTIVE EXPERIENCE R&D`

### Heading

```text
NOT ONE IDEA.
A SYSTEM FOR GENERATING BETTER ONES.
```

### Copy

```text
A research-led exploration of modular automotive exhibition and education experiences, shaped around visitor roles, physical interaction, learning outcomes, memorability, and deployment flexibility.

The detailed concept inventory remains private.
```

### Supporting concepts

Do not list every internal concept name.

Use only these broad themes:

- Visitor Participation
- Automotive Education
- Safety & Mobility
- Physical-Digital Interaction
- School Outreach
- Personalization
- Exhibition Storytelling
- Modular Experience Systems

### Role

`Research · Concept Strategy · Experience Ideation · Proposal Development`

### Status

`Experience R&D`

---

# 7.4 How I Ideate

This is valuable public process knowledge and does not expose a specific proposal.

Add a short section:

## Heading

```text
THE TECHNOLOGY IS NOT THE IDEA.
THE EXPERIENCE IS.
```

## Copy

```text
I do not start with “use AR” or “add AI.”

I start with what someone should do, understand, feel, or remember — then choose the technology that makes that interaction credible.
```

## Process

Use six short steps:

### 01 — Research the real landscape

Study existing products, experiences, competitors, and adjacent industries before proposing novelty.

### 02 — Give the user a role

Turn the visitor into a driver, builder, learner, creator, explorer, or decision maker instead of a spectator.

### 03 — Find one memorable moment

Define the single interaction someone should be able to describe after leaving.

### 04 — Connect physical and digital

Use objects, movement, space, touch, screens, AR, AI, or sensors only when they strengthen the experience.

### 05 — Design the outcome

A strong experience ends with understanding, achievement, a result, a story, or a useful next action.

### 06 — Test feasibility and modularity

Think about operation, reset, throughput, technology constraints, and how the idea can scale from prototype to larger deployment.

Keep this section concise and visual.

---

# 8. Approved Public Concept Copy

Use these summaries as the safe public-facing copy.

Do not expand them with information from private proposal files.

---

## 8.1 AutoReveal Xperience

**Category:** Automotive / Physical-Digital Experience  
**Stage:** Original Concept / Proposal

### One-line premise

```text
A moving digital window that travels across a real vehicle and reveals the technology hidden inside it through synchronized visualization.
```

### Contribution

```text
Concept Strategy · Interaction Model · Experience Flow · Proposal Direction
```

### Optional design question

```text
How can invisible vehicle technology become something a visitor can physically discover?
```

Do not publicly describe the tracking implementation, exact scan modes, rail engineering, control system, or complete proposal mechanics.

---

## 8.2 AutoForge AR

**Category:** AR / Gamified Learning  
**Stage:** Original Concept / Proposal

### One-line premise

```text
An augmented-reality vehicle-building experience that turns physical part cards into a playful digital assembly journey.
```

### Contribution

```text
Product Ideation · Game Loop · Interaction Logic · System Planning
```

### Optional design question

```text
Can learning how a vehicle is assembled feel more like completing a game than reading a display?
```

Do not publicly expose the QR metadata model, card validation rules, backend design, exact game modes, budgets, or full system architecture.

---

## 8.3 AutoCanvas Experience Studio

**Category:** Automotive / Generative Experience  
**Stage:** Original Concept / Proposal

### One-line premise

```text
An interactive automotive stage where visitors customize a display vehicle, enter a personalized AI-generated scene, and take the experience home as shareable content.
```

### Contribution

```text
Experience Concept · User Journey · AI Interaction Direction · Presentation Storytelling
```

### Optional design question

```text
What if a vehicle display became a creative tool instead of something people only looked at?
```

Do not reveal full generation flow, operational setup, campaign mechanics, or proposal details.

---

## 8.4 Interactive Smart Table

**Category:** Interactive Exhibition / Product Education  
**Stage:** Original Concept / Proposal

### One-line premise

```text
A full-surface interactive table that recognizes a physical vehicle miniature and turns movement into visual product stories and playful learning moments.
```

### Contribution

```text
Experience Design · Interaction Flow · Content Architecture · Proposal Direction
```

### Optional design question

```text
How can complex product technology become understandable through something people can simply touch and move?
```

Do not publicly include client-specific vehicle models, detailed content modes, tracking approach, or the full visitor flow.

---

## 8.5 MiraServe AI Smart Mirror

**Category:** AI / Service Experience  
**Stage:** Original Product Concept

### One-line premise

```text
An AI-assisted smart mirror that turns customer-service questions into contextual visual guidance, recommendations, wayfinding, and human handoff.
```

### Contribution

```text
Product Strategy · UX Concept · AI Service Flow · System Definition
```

### Optional design question

```text
How can an AI assistant move beyond chat and become part of the physical service environment?
```

Do not expose private architecture, commercial estimates, or detailed system modules.

---

## 8.6 VITALIS Care Mirror AI

**Category:** Healthcare / AI Service Experience  
**Stage:** Original Product Concept / Proposal

### One-line premise

```text
A hospital-focused smart mirror concept designed to support patient navigation, check-in, education, and staff-connected service workflows.
```

### Contribution

```text
Product Reframing · Healthcare UX · Workflow Design · AI Service Concept
```

### Optional design question

```text
How can a physical AI interface reduce friction in a complex hospital journey without pretending to replace clinical judgment?
```

Do not expose detailed integrations, clinical data models, security architecture, budgets, risk registers, or medical-system implementation details.

Do not position the product as autonomous diagnosis, treatment, or triage.

---

## 8.7 Digital Drive Capsule

**Category:** Immersive Simulation / Automotive Experience  
**Stage:** Original Concept / R&D

### One-line premise

```text
An immersive driving capsule where one visitor experiences a digital vehicle from inside while the installation becomes a synchronized spectacle for everyone watching outside.
```

### Contribution

```text
Original Ideation · Experience Architecture · Interaction Flow · Product Framing
```

### Optional design question

```text
Can a driving simulator become an experience for both the driver and the crowd?
```

Do not use Toyota branding in public copy.

Do not expose complete hardware configuration, environment modes, scoring system, product tiers, or cost assumptions.

---

## 8.8 Mobile Mobility Learning Lab

**Category:** Education / Mobile Experience  
**Stage:** Original Concept / R&D

### One-line premise

```text
A vehicle-based mobile learning experience that transforms on arrival into a portable VR and AR education station for schools and automotive learning.
```

### Contribution

```text
Original Ideation · Learning Experience · Physical-Digital System Concept · Program Design
```

### Optional design question

```text
What if the learning lab traveled to the students instead of asking students to travel to the lab?
```

Do not mention Hilux, Toyota, specific school partnerships, exact deployment hardware, or full learning modules unless approved later.

---

# 9. Update Existing Experiments Page

The current `Experiments` page includes:

- Cosplay Rental Operating Platform
- Laundry Subscription + IoT
- Virtual Academy
- AI-Assisted Game Development
- Recruitment and Talent Systems

Do not delete these.

Reframe the information architecture:

```text
Concept Lab
├── Original Experience Concepts
│   ├── AutoReveal Xperience
│   ├── AutoForge AR
│   ├── AutoCanvas Experience Studio
│   ├── Interactive Smart Table
│   ├── MiraServe AI Smart Mirror
│   ├── VITALIS Care Mirror AI
│   ├── Digital Drive Capsule
│   └── Mobile Mobility Learning Lab
│
└── Product & Technical Explorations
    ├── Cosplay Rental Operating Platform
    ├── Laundry Subscription + IoT
    ├── Virtual Academy
    ├── AI-Assisted Game Development
    └── Recruitment and Talent Systems
```

If the existing route is `/experiments`, either:

### Preferred

Create `/concepts` as the primary page and redirect `/experiments` to `/concepts#explorations`.

or:

### Acceptable

Keep `/experiments` but change the visible page title to `Concept Lab` and create clear internal sections.

Preferred route remains `/concepts`.

---

# 10. Work Index Update

The `/work` page must clearly distinguish:

### Product / System Case Studies

Examples:

- MLS
- ML Space
- Centralized Museum CMS
- Miniboard
- Museum Majapahit Bali

### Original Concepts

Do not mix these into the case-study grid by default.

Instead, add a bridge near the end:

```text
ORIGINAL IDEATION

Some of my work begins before a product exists.

Explore selected original product, AI, and physical-digital experience concepts.
```

CTA:

`OPEN CONCEPT LAB →`

---

# 11. About Page Update

Add a concise paragraph after the existing product/technology positioning:

```text
I also work in the space before a product has a name or an interface — researching possibilities, framing original concepts, designing the interaction model, and turning the idea into something stakeholders can understand and evaluate.
```

Add to the relevant capability list:

- Original Product Ideation
- Experience Design
- Creative Technology
- Physical-Digital Interaction
- Proposal Storytelling

Do not rewrite the About page into an “innovation consultant” profile. Product and technology leadership remain the core.

---

# 12. Resume Page Update

Add these skills if the current resume-style portfolio page supports them:

```text
Original Product Ideation
Interactive Experience Design
Creative Technology Concepts
Physical-Digital Product Thinking
Stakeholder Proposal Development
Experience Architecture
```

Do not add the proposal-stage concepts under `Employment`.

If there is a `Selected Projects` or `Selected Concepts` subsection, add:

```text
Selected Original Concepts
AutoReveal Xperience · AutoForge AR · AutoCanvas Experience Studio · Interactive Smart Table · MiraServe AI · VITALIS Care Mirror AI
```

Do not list client names beside them.

---

# 13. Homepage Capability Copy Update

The existing four-domain capability system may become:

1. Product Strategy
2. Product & Experience Design
3. Technical Product Planning
4. Leadership & Operations

Within `Product & Experience Design`, support:

```text
UX & Workflow Design
Original Ideation
Experience Architecture
Physical-Digital Interaction
Creative Technology Concepts
Prototype Direction
Stakeholder Storytelling
```

Do not create a fifth domain unless the visual composition genuinely benefits from it.

---

# 14. Visual Direction for Concept Teasers

Concept imagery must remain consistent with the selected Direction 03 portfolio.

Do not make the Concept Lab look like a colorful Behance board.

Use:

- black / graphite base;
- white typography;
- controlled electric-violet light;
- one concept visual per active item;
- cinematic cropping;
- large negative space;
- close-up abstract details;
- technical/physical forms;
- subtle grain if already part of the site;
- large index typography.

Do not use:

- fake dashboard screenshots;
- random stock photography;
- generic hologram clichés;
- purple gradient cards everywhere;
- different art styles per concept;
- client logos;
- proposal screenshots containing confidential text;
- raw Word pages;
- actual private diagrams.

If suitable visual assets do not exist, use deliberately created **sanitized teaser visuals** that communicate the category, not the full mechanism.

Examples:

- AutoReveal: cropped vehicle silhouette + luminous moving vertical plane, without technical annotations.
- AutoForge AR: floating automotive component forms + physical-card silhouette, without QR payload detail.
- AutoCanvas: automotive form under projection-like violet light + human silhouette.
- Interactive Smart Table: physical miniature above a luminous interactive plane.
- MiraServe: abstract smart mirror + AI presence.
- VITALIS: clean hospital mirror environment without patient data.
- Digital Drive Capsule: dark illuminated capsule silhouette.
- Mobile Learning Lab: modular vehicle/lab silhouette without brand/model identity.

---

# 15. Motion Direction for Concept Lab

Keep motion premium and purposeful.

Possible behaviors:

- active concept title wipes from muted to white;
- teaser image softly masks/reveals;
- index number shifts 4–8 px on activation;
- violet light follows the active selection;
- details fade with slight vertical movement;
- desktop cursor may expose a small `VIEW` label;
- section transition can use a dark full-width wipe.

Avoid:

- constant looping animations;
- fast parallax;
- heavy WebGL for every concept;
- glitch effects;
- spinning 3D cards;
- over-animated text.

Respect `prefers-reduced-motion`.

---

# 16. New Content Model

Add a concept data model separate from normal case studies.

Example:

```ts
type Concept = {
  slug: string;
  title: string;
  category: string;
  premise: string;
  contribution: string[];
  stage:
    | "Original Concept"
    | "Proposal"
    | "Experience R&D"
    | "Product Ideation";
  designQuestion?: string;
  teaserImage: string;
  publicDetailLevel: "summary-only";
  detailNote?: string;
};
```

Every concept in this update must use:

```ts
publicDetailLevel: "summary-only"
```

Do not reuse the normal `CaseStudy` model if it forces challenge/process/solution/results fields that would encourage invention or IP leakage.

---

# 17. Suggested Component Architecture

Add only if compatible with the current implementation.

```text
src/
├── components/
│   └── concepts/
│       ├── ConceptLabPreview.tsx
│       ├── ConceptIndex.tsx
│       ├── ConceptIndexItem.tsx
│       ├── ConceptVisualStage.tsx
│       ├── ConceptMeta.tsx
│       ├── IdeationProcess.tsx
│       └── PrivateDetailNote.tsx
│
├── data/
│   └── concepts.ts
│
└── pages-or-routes/
    └── concepts
```

Use the project's existing framework conventions rather than forcing these exact paths.

---

# 18. SEO Update

Update site metadata where appropriate.

Do not keyword-stuff.

Suggested portfolio description:

```text
Ghazariz is a product, technology, and experience designer working across product strategy, UX, technical planning, original ideation, and physical-digital interactive experiences.
```

Concept Lab metadata:

### Title

`Concept Lab — Ghazariz`

### Description

```text
Selected original product, AI, automotive, and physical-digital experience concepts by Ghazariz, presented as high-level public summaries.
```

---

# 19. Important Distinction in Visual Hierarchy

The website must visually communicate three different classes of work:

## A. Product / System Work

Real product/system planning, design, development, or organizational work.

Examples:

- MLS
- ML Space
- Museum CMS
- Miniboard

Use normal case-study language.

## B. Original Concept / Proposal Work

Original ideas developed as proposals/R&D.

Examples:

- AutoReveal
- AutoForge AR
- AutoCanvas
- Smart Table
- Smart Mirrors
- Drive Capsule
- Mobile Learning Lab

Use `Original Concept`, `Proposal`, or `R&D`.

Never imply launch/result metrics.

## C. Exploratory Product Ideas

Earlier experiments/research directions.

Examples:

- Cosplay Rental Platform
- Laundry + IoT
- AI-Assisted Game Development

Use `Research`, `Experiment`, or `Concept`.

Never flatten A, B, and C into one generic project grid.

---

# 20. Copy That Should Be Added to the Portfolio

Use these lines selectively.

## Homepage Concept Lab CTA

```text
Some projects start with a brief.
Others start with a question nobody has shaped into a product yet.
```

## Concept Lab confidentiality line

```text
Public summaries only. Detailed proposal mechanics and source material remain private.
```

## Concept process transition

```text
A technology can be impressive and still create a forgettable experience.
I design the interaction first.
```

## Work-to-concepts bridge

```text
Beyond products and systems, I also develop original concepts for interactive experiences, AI services, and creative technology.
```

Do not use all four lines next to each other.

---

# 21. Do Not Change These Existing Decisions

Preserve:

- Direction 03 — Experimental / Bold;
- black / white / controlled violet visual language;
- existing product case studies;
- existing accuracy policy;
- no fake metrics;
- no invented product outcomes;
- no fake client logos;
- no portrait generation;
- local asset reliability policy;
- accessibility;
- responsive design;
- performance targets;
- design QA requirement;
- `design-qa.md` final pass requirement.

This update is an **extension**, not a redesign reset.

---

# 22. Implementation Checklist

Before handoff, confirm all of the following:

- [ ] Existing visual direction remains Direction 03.
- [ ] Homepage contains a new Original Ideation / Concept Lab preview.
- [ ] Homepage preview shows exactly four signature concepts.
- [ ] `/concepts` exists.
- [ ] `/concepts` includes eight selected concepts.
- [ ] Product case studies and proposal-stage concepts are visually/status-separated.
- [ ] AutoReveal and AutoCanvas Experience Studio are not merged.
- [ ] No Toyota/Veloz/Hilux branding appears in public concept summaries.
- [ ] No private proposal file is deployed or committed.
- [ ] No budget/risk/architecture detail from proposal sources is exposed.
- [ ] Every concept has a truthful proposal/R&D status.
- [ ] No fake outcome metrics exist.
- [ ] No “first in Indonesia” claims exist.
- [ ] Concept Lab includes the high-level Automotive Experience R&D archive.
- [ ] Concept Lab includes the public `How I Ideate` methodology.
- [ ] About page acknowledges original ideation capability.
- [ ] Resume page includes original ideation/experience-design skills.
- [ ] `/work` bridges to `/concepts`.
- [ ] Concept data uses a separate summary-only model.
- [ ] Mobile Concept Lab is fully usable without hover.
- [ ] Reduced-motion behavior works.
- [ ] Teaser visuals contain no confidential proposal copy.
- [ ] Design QA is rerun after the update.
- [ ] `design-qa.md` ends with `final result: passed`.

---

# 23. Final Instruction to Codex

Implement this update directly in the existing portfolio codebase.

First:

1. inspect the existing route/component/data structure;
2. inspect the current homepage and `/work` implementation;
3. preserve the existing design tokens and Direction 03 styling;
4. map this update into the current architecture rather than duplicating systems.

Then implement:

1. the homepage Concept Lab preview;
2. the `/concepts` route;
3. the eight public concept entries;
4. the high-level Automotive Experience R&D archive;
5. the `How I Ideate` section;
6. navigation and work-index bridges;
7. About/resume/capability copy updates;
8. responsive and reduced-motion states;
9. local teaser assets or safe placeholders that cannot break production;
10. final visual QA.

Do not use the private proposal source documents as public assets.

Do not expose more detail than the approved public copy in this prompt.

When finished, verify the website visually at desktop, tablet, and mobile breakpoints and update `design-qa.md`.

The final portfolio should communicate:

> Ghazariz does not only design interfaces or manage existing products.  
> He can also originate the concept, structure the interaction, connect physical and digital systems, and turn an ambiguous idea into a proposal people can understand and evaluate.
