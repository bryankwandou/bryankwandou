import type { NextConfig } from "next";

/**
 * Every route here is prerendered — there is no server work at request time.
 * Exporting statically says so explicitly, which also sidesteps @vercel/next's
 * serverBuild insisting on a lambda for the /work/[slug] segment
 * (NEXT_MISSING_LAMBDA) even when all 21 pages are already built.
 *
 * The trade is next/image's on-demand optimisation, so the screenshots ship as
 * authored. They are 1440x900 PNGs averaging ~136 KB, loaded lazily below the
 * fold, which is an acceptable cost for a site that deploys reliably.
 */
/**
 * GitHub Pages serves this repo from /bryankwandou/, so assets need a prefix
 * there. Vercel serves it from the root and must not have one. The workflow
 * sets PAGES_BASE_PATH; nothing else does.
 */
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  // Emit work/index.html rather than work.html, so a static host answers both
  // /work and /work/ instead of 404ing on the trailing slash.
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
