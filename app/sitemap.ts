import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

const ROUTES = [
  "",
  "/services",
  "/google-demand-gen",
  "/lead-generation",
  "/company",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
