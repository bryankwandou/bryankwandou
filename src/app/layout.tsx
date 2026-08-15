import type { Metadata, Viewport } from "next";
import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LangProvider } from "@/components/lang-provider";
import { profile } from "@/data/profile";
import "./globals.css";

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const SITE = "https://bryankwandou.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Bryan Kwandou — builder, Makassar",
    template: "%s · Bryan Kwandou",
  },
  description:
    "Bryan Kwandou builds software that leaves a trail. Twenty-four shipped products, 128 public repositories, and a habit of putting hard limits around autonomous systems.",
  keywords: [
    "Bryan Kwandou",
    "Vincentius Bryan Kwandou",
    "nayrbryanGaming",
    "Solana developer Indonesia",
    "Makassar developer",
    "Superteam",
    "agentic infrastructure",
  ],
  authors: [{ name: profile.legalName, url: SITE }],
  creator: profile.legalName,
  alternates: { canonical: SITE },
  openGraph: {
    type: "profile",
    url: SITE,
    siteName: "Bryan Kwandou",
    title: "Bryan Kwandou — builder, Makassar",
    description:
      "Twenty-four shipped products and 128 public repositories, built around one question: after the machine acts, can a person still check what happened?",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@nayrbryanGaming",
    title: "Bryan Kwandou — builder, Makassar",
    description: "Twenty-four shipped products. 128 public repositories. Work you can check.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#121110",
  colorScheme: "dark",
};

// Structured data, so search engines read the person rather than guessing.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: [profile.legalName, profile.handle],
  jobTitle: profile.role,
  url: SITE,
  image: profile.avatar,
  identifier: `https://orcid.org/${profile.orcid}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Makassar",
    addressRegion: "South Sulawesi",
    addressCountry: "ID",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Atma Jaya Makassar",
  },
  sameAs: profile.links.filter((l) => l.label !== "Email").map((l) => l.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="grain antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <LangProvider>
          <SiteHeader />
          <main id="main" className="relative z-10">
            {children}
          </main>
          <SiteFooter />
        </LangProvider>
      </body>
    </html>
  );
}
