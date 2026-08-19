export type DigitalProductStatus =
  | "Available"
  | "Coming Soon"
  | "In Development"
  | "Waitlist"
  | "Private Preview";

export type DigitalProductTier = "platform" | "storefront" | "access";

export interface DigitalProduct {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  category: string;
  status: DigitalProductStatus;
  tier: DigitalProductTier;
  price?: string;
  currency?: string;
  cover?: string;
  logo?: string;
  gallery?: string[];
  gumroadUrl?: string;
  lynkUrl?: string;
  demoUrl?: string;
  visual?: "prodos";
  audience?: string;
  helpsWith?: string[];
  includes?: string[];
  format?: string[];
  featured?: boolean;
  order?: number;
}

const platformProduct: DigitalProduct = {
  id: "prodos",
  slug: "prodos",
  name: "ProdOS",
  tagline: "The operating system behind an independent product practice.",
  shortDescription:
    "ProdOS brings ideation, coding, preview, release, and marketing into one governed workspace. The products below follow that same path from first idea to verified release.",
  category: "Product operating system",
  status: "Available",
  tier: "platform",
  demoUrl: "https://prodos-jade.vercel.app",
  visual: "prodos",
  audience: "Independent product builders working across a growing shelf of ideas.",
  helpsWith: [
    "Keeping product decisions and evidence in one place",
    "Moving from an early idea to a release-ready plan",
    "Giving every build the same clear operating rhythm"
  ],
  includes: ["Ideation", "Coding", "Preview", "Release", "Marketing"],
  format: ["Private workspace", "AI-assisted workflow", "Product-specific bindings"],
  featured: true,
  order: 0
};

const storefrontProducts: DigitalProduct[] = [
  {
    id: "life-kit",
    slug: "lifekit",
    name: "LifeKit",
    tagline: "Biar uang nggak habis sebelum gajian.",
    shortDescription:
      "An everyday money survival app for making the space between today and payday feel more manageable.",
    category: "Everyday money",
    status: "Available",
    tier: "storefront",
    cover: "/images/products/lifekit.png",
    gumroadUrl: "https://ghazariz.gumroad.com/l/lifekit?layout=profile",
    lynkUrl: "https://lynk.id/ghazariz/dln5539zodpw",
    audience: "People who want a calmer view of everyday spending.",
    includes: ["LifeKit app access", "Focused money workflow", "Digital delivery"],
    format: ["Digital product", "Gumroad", "Lynk"],
    featured: true,
    order: 1
  },
  {
    id: "work-kit",
    slug: "workkit",
    name: "WorkKit",
    tagline: "Biar nggak asal apply kerja.",
    shortDescription:
      "A job search and career toolkit for turning an open role into a more deliberate next move.",
    category: "Career toolkit",
    status: "Available",
    tier: "storefront",
    cover: "/images/products/workkit.png",
    gumroadUrl: "https://ghazariz.gumroad.com/l/workkit-app?layout=profile",
    lynkUrl: "https://lynk.id/ghazariz/41opeg3rw56e",
    audience: "Job seekers who want more signal and less random applying.",
    includes: ["WorkKit toolkit", "Focused job-search workflow", "Digital delivery"],
    format: ["Digital product", "Gumroad", "Lynk"],
    featured: true,
    order: 2
  },
  {
    id: "freelance-kit",
    slug: "freelancekit",
    name: "FreelanceKit",
    tagline: "Dari skill sampai dibayar.",
    shortDescription:
      "A focused freelance toolkit for turning a useful skill into a clearer path toward paid work.",
    category: "Freelance toolkit",
    status: "Available",
    tier: "storefront",
    cover: "/images/products/freelancekit.png",
    gumroadUrl: "https://ghazariz.gumroad.com/l/freelancekit-app?layout=profile",
    lynkUrl: "https://lynk.id/ghazariz/8rqx97npq9l9",
    audience: "Freelancers building a more intentional route from skill to client.",
    includes: ["FreelanceKit toolkit", "Focused client workflow", "Digital delivery"],
    format: ["Digital product", "Gumroad", "Lynk"],
    featured: true,
    order: 3
  }
];

const accessProducts: DigitalProduct[] = [
  [
    "product-04",
    "certified-generator",
    "Certified Generator",
    "A private build for turning structured inputs into something ready to share.",
    "/images/products/certified-generator.png",
    4
  ],
  [
    "product-05",
    "budget-reality-check",
    "Budget Reality Check",
    "A private build for making money decisions feel less abstract.",
    "/images/products/budget-reality-check.png",
    5
  ],
  [
    "product-06",
    "harga-pas",
    "HargaPas",
    "A private build exploring a clearer way to land on the right price.",
    "/images/products/harga-pas.png",
    6
  ],
  [
    "product-08",
    "date-roulette",
    "Date Roulette",
    "A private build for breaking the deadlock on what to do next.",
    "/images/products/date-roulette.png",
    8
  ],
  [
    "product-10",
    "red-flag-bingo",
    "Red Flag Bingo",
    "A private build for spotting patterns before they become problems.",
    "/images/products/red-flag-bingo.png",
    10
  ],
  [
    "product-11",
    "story-spark",
    "StorySpark",
    "A private build for getting from a blank page to a first spark.",
    "/images/products/story-spark.png",
    11
  ],
  [
    "product-12",
    "secret-code",
    "SecretCode",
    "A private build wrapped around playful discovery.",
    "/images/products/secret-code.png",
    12
  ],
  [
    "product-13",
    "letter-hunt",
    "LetterHunt",
    "A private build for turning a few clues into a small hunt.",
    "/images/products/letter-hunt.png",
    13
  ],
  [
    "product-17",
    "my-lore-card",
    "My Lore Card",
    "A private build for giving your story a sharper shape.",
    "/images/products/my-lore-card.png",
    17
  ],
  [
    "product-21",
    "couple-wrapped",
    "Couple Wrapped",
    "A private build for reflecting on a shared year.",
    "/images/products/couple-wrapped.png",
    21
  ],
  [
    "product-22",
    "emotion-monsters",
    "Emotion Monsters",
    "A private build for giving feelings a character and a name.",
    "/images/products/emotion-monsters.png",
    22
  ],
  [
    "product-28",
    "treasure-trail",
    "TreasureTrail",
    "A private build for turning a route into a small adventure.",
    "/images/products/treasure-trail.png",
    28
  ],
  [
    "product-31",
    "restaurant-rescue",
    "Restaurant Rescue",
    "A private build for rescuing the group decision.",
    "/images/products/restaurant-rescue.png",
    31
  ],
  [
    "product-32",
    "travel-mission",
    "TravelMission",
    "A private build for giving a trip its next move.",
    "/images/products/travel-mission.png",
    32
  ],
  [
    "product-76",
    "build-my-zoo",
    "BuildMyZoo",
    "A private build for making a tiny world one choice at a time.",
    "/images/products/build-my-zoo.png",
    76
  ],
  [
    "product-77",
    "tiny-architect",
    "Tiny Architect",
    "A private build for composing a small place with big intention.",
    "/images/products/tiny-architect.png",
    77
  ],
  [
    "product-78",
    "comic-kid",
    "Comic Kid",
    "A private build for turning an idea into a panel-by-panel start.",
    "/images/products/comic-kid.png",
    78
  ]
].map(([id, slug, name, tagline, cover, order]) => ({
  id: id as string,
  slug: slug as string,
  name: name as string,
  tagline: tagline as string,
  shortDescription:
    "Private preview copy. Request access for the current build and product context.",
  category: "Private product",
  status: "Private Preview" as const,
  tier: "access" as const,
  cover: cover as string,
  featured: false,
  order: order as number
}));

export const platformDigitalProduct = platformProduct;
export const storefrontDigitalProducts = storefrontProducts;
export const accessDigitalProducts = accessProducts;

export const digitalProducts = [
  platformProduct,
  ...storefrontProducts,
  ...accessProducts
].sort(
  (first, second) => (first.order ?? 999) - (second.order ?? 999)
);

export const featuredDigitalProducts = storefrontProducts.slice(0, 3);
