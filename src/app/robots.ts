// Required under `output: export`.
export const dynamic = "force-static";

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://bryankwandou.vercel.app/sitemap.xml",
  };
}
