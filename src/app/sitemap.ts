// Required under `output: export`.
export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { work } from "@/data/work";

const SITE = "https://bryankwandou.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/work", "/journey", "/about", "/archive", "/cv"].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const details = work.map((w) => ({
    url: `${SITE}/work/${w.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...details];
}
