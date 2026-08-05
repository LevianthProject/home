export type ConceptStage =
  | "Original Concept"
  | "Concept Development"
  | "Proposal"
  | "Experience R&D"
  | "Product Ideation"
  | "Exploration"
  | "Original Concept / Proposal"
  | "Original Product Concept"
  | "Original Product Concept / Proposal"
  | "Original Concept / R&D";

export type ConceptVisual =
  | "reveal"
  | "forge"
  | "canvas"
  | "table"
  | "mirror"
  | "care"
  | "capsule"
  | "mobile-lab";

export type Concept = {
  slug: string;
  title: string;
  category: string;
  premise: string;
  contribution: string[];
  stage: ConceptStage;
  designQuestion?: string;
  visual: ConceptVisual;
  publicDetailLevel: "summary-only";
  detailNote: string;
};

export const concepts: Concept[] = [
  {
    slug: "autoreveal-xperience",
    title: "AutoReveal Xperience",
    category: "Automotive / Physical-Digital Experience",
    stage: "Original Concept / Proposal",
    premise:
      "A moving digital window that travels across a real vehicle and reveals the technology hidden inside it through synchronized visualization.",
    contribution: [
      "Concept Strategy",
      "Interaction Model",
      "Experience Flow",
      "Proposal Direction"
    ],
    designQuestion:
      "How can invisible vehicle technology become something a visitor can physically discover?",
    visual: "reveal",
    publicDetailLevel: "summary-only",
    detailNote: "Public summary only - detailed mechanics remain private."
  },
  {
    slug: "autoforge-ar",
    title: "AutoForge AR",
    category: "AR / Gamified Learning",
    stage: "Original Concept / Proposal",
    premise:
      "An augmented-reality vehicle-building experience that turns physical part cards into a playful digital assembly journey.",
    contribution: [
      "Product Ideation",
      "Game Loop",
      "Interaction Logic",
      "System Planning"
    ],
    designQuestion:
      "Can learning how a vehicle is assembled feel more like completing a game than reading a display?",
    visual: "forge",
    publicDetailLevel: "summary-only",
    detailNote: "Public summary only - detailed mechanics remain private."
  },
  {
    slug: "autocanvas-experience-studio",
    title: "AutoCanvas Experience Studio",
    category: "Automotive / Generative Experience",
    stage: "Original Concept / Proposal",
    premise:
      "An interactive automotive stage where visitors customize a display vehicle, enter a personalized AI-generated scene, and take the experience home as shareable content.",
    contribution: [
      "Experience Concept",
      "User Journey",
      "AI Interaction Direction",
      "Presentation Storytelling"
    ],
    designQuestion:
      "What if a vehicle display became a creative tool instead of something people only looked at?",
    visual: "canvas",
    publicDetailLevel: "summary-only",
    detailNote: "Public summary only - detailed mechanics remain private."
  },
  {
    slug: "interactive-smart-table",
    title: "Interactive Smart Table",
    category: "Interactive Exhibition / Product Education",
    stage: "Original Concept / Proposal",
    premise:
      "A full-surface interactive table that recognizes a physical vehicle miniature and turns movement into visual product stories and playful learning moments.",
    contribution: [
      "Experience Design",
      "Interaction Flow",
      "Content Architecture",
      "Proposal Direction"
    ],
    designQuestion:
      "How can complex product technology become understandable through something people can simply touch and move?",
    visual: "table",
    publicDetailLevel: "summary-only",
    detailNote: "Public summary only - detailed mechanics remain private."
  },
  {
    slug: "miraserve-ai-smart-mirror",
    title: "MiraServe AI Smart Mirror",
    category: "AI / Service Experience",
    stage: "Original Product Concept",
    premise:
      "An AI-assisted smart mirror that turns customer-service questions into contextual visual guidance, recommendations, wayfinding, and human handoff.",
    contribution: [
      "Product Strategy",
      "UX Concept",
      "AI Service Flow",
      "System Definition"
    ],
    designQuestion:
      "How can an AI assistant move beyond chat and become part of the physical service environment?",
    visual: "mirror",
    publicDetailLevel: "summary-only",
    detailNote: "Public summary only - detailed mechanics remain private."
  },
  {
    slug: "vitalis-care-mirror-ai",
    title: "VITALIS Care Mirror AI",
    category: "Healthcare / AI Service Experience",
    stage: "Original Product Concept / Proposal",
    premise:
      "A hospital-focused smart mirror concept designed to support patient navigation, check-in, education, and staff-connected service workflows.",
    contribution: [
      "Product Reframing",
      "Healthcare UX",
      "Workflow Design",
      "AI Service Concept"
    ],
    designQuestion:
      "How can a physical AI interface reduce friction in a complex hospital journey without pretending to replace clinical judgment?",
    visual: "care",
    publicDetailLevel: "summary-only",
    detailNote: "Public summary only - detailed mechanics remain private."
  },
  {
    slug: "digital-drive-capsule",
    title: "Digital Drive Capsule",
    category: "Immersive Simulation / Automotive Experience",
    stage: "Original Concept / R&D",
    premise:
      "An immersive driving capsule where one visitor experiences a digital vehicle from inside while the installation becomes a synchronized spectacle for everyone watching outside.",
    contribution: [
      "Original Ideation",
      "Experience Architecture",
      "Interaction Flow",
      "Product Framing"
    ],
    designQuestion:
      "Can a driving simulator become an experience for both the driver and the crowd?",
    visual: "capsule",
    publicDetailLevel: "summary-only",
    detailNote: "Public summary only - detailed mechanics remain private."
  },
  {
    slug: "mobile-mobility-learning-lab",
    title: "Mobile Mobility Learning Lab",
    category: "Education / Mobile Experience",
    stage: "Original Concept / R&D",
    premise:
      "A vehicle-based mobile learning experience that transforms on arrival into a portable VR and AR education station for schools and automotive learning.",
    contribution: [
      "Original Ideation",
      "Learning Experience",
      "Physical-Digital System Concept",
      "Program Design"
    ],
    designQuestion:
      "What if the learning lab traveled to the students instead of asking students to travel to the lab?",
    visual: "mobile-lab",
    publicDetailLevel: "summary-only",
    detailNote: "Public summary only - detailed mechanics remain private."
  }
];

export const homepageConcepts = concepts.slice(0, 4);
