import { ImageResponse } from "next/og";

// Required under `output: export` — the card is generated once at build time.
export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Bryan Kwandou — builder, Makassar";

// Drawn rather than screenshotted, so it stays sharp at any scale.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#121110",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -160,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(228,112,58,0.30) 0%, rgba(18,17,16,0) 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="60" height="60" viewBox="0 0 64 64">
            <defs>
              <linearGradient id="i" x1="10" y1="4" x2="54" y2="58" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#F7AE7B" />
                <stop offset="0.45" stopColor="#E4703A" />
                <stop offset="1" stopColor="#A8431F" />
              </linearGradient>
              <clipPath id="c">
                <circle cx="32" cy="32" r="26" />
              </clipPath>
            </defs>
            <rect width="64" height="64" rx="15" fill="#1c1a18" />
            <g clipPath="url(#c)">
              <path d="M 32 6 A 26 26 0 0 0 16.71 53.03 Z" fill="url(#i)" />
              <path d="M 7.27 23.96 A 26 26 0 0 0 47.29 53.03 Z" fill="url(#i)" fillOpacity="0.82" />
              <path d="M 16.71 53.03 A 26 26 0 0 0 56.73 23.96 Z" fill="url(#i)" fillOpacity="0.66" />
              <path d="M 47.29 53.03 A 26 26 0 0 0 32 6 Z" fill="url(#i)" fillOpacity="0.74" />
              <path d="M 56.73 23.96 A 26 26 0 0 0 7.27 23.96 Z" fill="url(#i)" fillOpacity="0.92" />
            </g>
            <circle cx="32" cy="32" r="26" fill="none" stroke="#F7AE7B" strokeOpacity="0.32" strokeWidth="1.1" />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 25,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#6E6862",
              fontFamily: "monospace",
            }}
          >
            Makassar, Indonesia
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, color: "#F5F1EA", lineHeight: 1.02 }}>
            I build software that
          </div>
          <div style={{ display: "flex", fontSize: 96, color: "#F5F1EA", lineHeight: 1.02 }}>
            leaves a&nbsp;<span style={{ color: "#E4703A" }}>trail</span>.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(245,241,234,0.14)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 34, color: "#F5F1EA" }}>Bryan Kwandou</div>
          <div style={{ display: "flex", fontSize: 24, color: "#A9A29A", fontFamily: "monospace" }}>
            24 products · 128 repositories
          </div>
        </div>
      </div>
    ),
    size,
  );
}
