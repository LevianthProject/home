export const siteConfig = {
  name: "Ghazariz",
  role: "Technical Product Manager · Product Designer · Product & Technology Lead",
  email: "m.ghazariz@gmail.com",
  url: "https://levianthproject.github.io/home",
  description:
    "Product strategy, experience design, technical planning, and technology leadership for complex digital systems."
} as const;

export const basePath = process.env.NODE_ENV === "production" ? "/home" : "";

export function assetPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
