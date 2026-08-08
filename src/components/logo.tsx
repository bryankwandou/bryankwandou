/**
 * The mark: a five-blade aperture.
 *
 * Bryan shoots, and nearly everything he builds is about whether a thing can be
 * checked after the fact. A lens covers both. The five blades are drawn as
 * circular segments struck between rim points 144 degrees apart, which is how a
 * real iris closes — the overlaps between blades are genuine geometry rather
 * than decoration, and they are what gives the mark its tonal depth. The
 * pentagon left in the middle is the opening.
 */

type Props = {
  size?: number;
  /** Draws the rounded tile behind the iris. Off for inline use on dark. */
  tile?: boolean;
  className?: string;
};

// Rim points at radius 26 from centre (32,32), every 72 degrees from the top.
const RIM = [
  [32, 6],
  [7.27, 23.96],
  [16.71, 53.03],
  [47.29, 53.03],
  [56.73, 23.96],
] as const;

// Blade k spans from rim point k to rim point k+2, arced the short way.
const BLADES = RIM.map((_, k) => {
  const a = RIM[k];
  const b = RIM[(k + 2) % 5];
  return `M ${a[0]} ${a[1]} A 26 26 0 0 0 ${b[0]} ${b[1]} Z`;
});

// Uneven opacity across the blades reads as light falling across the iris.
const BLADE_OPACITY = [1, 0.82, 0.66, 0.74, 0.92];

export function Logo({ size = 40, tile = true, className }: Props) {
  const id = "ap";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Bryan Kwandou"
    >
      <defs>
        <linearGradient id={`${id}-iris`} x1="10" y1="4" x2="54" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F7AE7B" />
          <stop offset="0.45" stopColor="#E4703A" />
          <stop offset="1" stopColor="#A8431F" />
        </linearGradient>

        <radialGradient id={`${id}-field`} cx="0.28" cy="0.2" r="0.95">
          <stop offset="0" stopColor="#26221F" />
          <stop offset="1" stopColor="#121110" />
        </radialGradient>

        {/* Keeps the blades from bleeding past the rim. */}
        <clipPath id={`${id}-clip`}>
          <circle cx="32" cy="32" r="26" />
        </clipPath>
      </defs>

      {tile && (
        <>
          <rect width="64" height="64" rx="15" fill={`url(#${id}-field)`} />
          <rect
            x="0.6"
            y="0.6"
            width="62.8"
            height="62.8"
            rx="14.5"
            fill="none"
            stroke="#E4703A"
            strokeOpacity="0.18"
            strokeWidth="1.2"
          />
        </>
      )}

      <g clipPath={`url(#${id}-clip)`}>
        {BLADES.map((d, i) => (
          <path key={i} d={d} fill={`url(#${id}-iris)`} fillOpacity={BLADE_OPACITY[i]} />
        ))}
      </g>

      {/* Rim, catching a little light at the top. */}
      <circle cx="32" cy="32" r="26" fill="none" stroke="#F7AE7B" strokeOpacity="0.32" strokeWidth="1.1" />
    </svg>
  );
}

/** Mark plus name, for the header and the footer. */
export function Wordmark({ size = 32 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Logo size={size} />
      <span className="display text-[1.05rem] leading-none text-paper">Bryan Kwandou</span>
    </span>
  );
}
