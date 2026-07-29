export type ProjectStatus =
  | "concept"
  | "prototype"
  | "demo-testing"
  | "in-development"
  | "last-known"
  | "needs-validation";

export interface PortfolioProject {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  hook: string;
  roles: string[];
  status: ProjectStatus;
  statusLabel: string;
  featured: boolean;
  hasCaseStudy: boolean;
  tags: string[];
  visual: "network" | "loop" | "publishing" | "performance" | "culture" | "experiments";
}

export const projects: PortfolioProject[] = [
  {
    slug: "mls",
    title: "MLS — Minilemon Learning System",
    shortTitle: "MLS",
    category: "Education platform · Multi-tenant product",
    summary:
      "A multi-tenant education platform for institutions and bootcamps to operate classes, mentors, learning content, evaluation, and payments.",
    hook: "From an internal LMS direction to a phased education platform.",
    roles: ["Product Manager", "Product Designer", "Technology Decision Maker"],
    status: "demo-testing",
    statusLabel: "Demo testing v1; direction evolved",
    featured: true,
    hasCaseStudy: true,
    tags: ["Product strategy", "Multi-tenant UX", "Pricing", "Architecture"],
    visual: "network"
  },
  {
    slug: "ml-space",
    title: "ML Space",
    shortTitle: "ML Space",
    category: "Parental technology · Education",
    summary:
      "A parental product that turns educational activity into a transparent reward loop for children’s screen time.",
    hook: "Reframing control from punishment into learning, trust, and reward.",
    roles: ["Product Strategy", "Product Design", "Feature System Design"],
    status: "last-known",
    statusLabel: "Last known progress: approximately 70%",
    featured: true,
    hasCaseStudy: true,
    tags: ["Parent–child UX", "Gamification", "Subscription model"],
    visual: "loop"
  },
  {
    slug: "museum-cms",
    title: "Centralized Museum CMS",
    shortTitle: "Museum CMS",
    category: "Content platform · Cultural technology",
    summary:
      "One editorial operating system for three museum websites, preserving each React frontend while centralizing publishing.",
    hook: "One operating system, three identities, zero destructive migration.",
    roles: ["Product Lead", "Workflow Architect", "Solution Designer"],
    status: "prototype",
    statusLabel: "Architecture and frontend-flow prototype prepared",
    featured: true,
    hasCaseStudy: true,
    tags: ["CMS", "Roles & permissions", "Cloudflare", "Workflow"],
    visual: "publishing"
  },
  {
    slug: "miniboard",
    title: "Miniboard",
    shortTitle: "Miniboard",
    category: "Internal product · Performance system",
    summary:
      "A contribution system connecting KPI, XP, levels, badges, approvals, and rewards for remote teams.",
    hook: "Reward evidence of contribution, not activity theatre.",
    roles: ["Product Strategy", "Experience Design"],
    status: "concept",
    statusLabel: "Product concept and roadmap developed",
    featured: false,
    hasCaseStudy: false,
    tags: ["KPI", "Gamification", "Governance"],
    visual: "performance"
  },
  {
    slug: "museum-majapahit-bali",
    title: "Museum Majapahit Bali",
    shortTitle: "Museum Majapahit",
    category: "Cultural experience · Storytelling",
    summary:
      "An immersive museum direction built around narrative, collection discovery, cultural context, and visitor action.",
    hook: "A guided cultural journey, not a static information page.",
    roles: ["Product Direction", "Experience Strategy"],
    status: "needs-validation",
    statusLabel: "Digital-ecosystem direction developed",
    featured: false,
    hasCaseStudy: false,
    tags: ["Immersive web", "Cultural UX", "Content strategy"],
    visual: "culture"
  },
  {
    slug: "experiments",
    title: "Playground & Product Experiments",
    shortTitle: "Experiments",
    category: "Product discovery · SaaS · IoT",
    summary:
      "Selected product hypotheses across rental operations, laundry subscriptions, virtual academies, recruitment, and AI-assisted development.",
    hook: "Test the operational problem before funding an expensive product.",
    roles: ["Product Explorer", "System Designer"],
    status: "concept",
    statusLabel: "Research and early-stage concepts",
    featured: false,
    hasCaseStudy: false,
    tags: ["Discovery", "SaaS", "IoT", "AI workflow"],
    visual: "experiments"
  }
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
