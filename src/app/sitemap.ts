import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/process", "/thoughts", "/resume", "/contact"];
  const caseStudies = projects
    .filter((project) => project.hasCaseStudy)
    .map((project) => `/work/${project.slug}`);

  return [...routes, ...caseStudies].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-07-30"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.7
  }));
}
