export type Photo = {
  src: string;
  title: string;
  date: string;
  tokenId: number;
};

export const CONTRACT = "KT1R67wX2kCii82cqyo8DVYWXccM4HcJwHki";
export const CREATOR = "tz2LB1bnJNcyQe5Fy89XJKvhCcDfovpZ2gi5";

/** Totals for the whole run, not just what is displayed below. */
export const totalTokens = 491;
export const photographCount = 402;
export const dayCount = 380;
export const firstDay = "2025-07-17";

/**
 * Sixty frames drawn evenly across the run so the grid shows its span rather
 * than one good week. Each was minted on Tezos under the creator address
 * above, and the title and date are the ones recorded on chain.
 */
export const photos: Photo[] = [
  { src: "p01.webp", title: "A Balcony Above the Clouds", date: "2025-07-17", tokenId: 19 },
  { src: "p02.webp", title: "The Quiet Corner of Stories", date: "2025-07-24", tokenId: 25 },
  { src: "p03.webp", title: "The View Between the Lines", date: "2025-07-31", tokenId: 32 },
  { src: "p04.webp", title: "The Watcher of the Heights", date: "2025-08-07", tokenId: 39 },
  { src: "p05.webp", title: "Whispers of Spring Under a Brooding Sky", date: "2025-08-13", tokenId: 45 },
  { src: "p06.webp", title: "The Stairway Where the Ocean Whispers", date: "2025-08-20", tokenId: 52 },
  { src: "p07.webp", title: "A Tiny Shop of Forgotten Dreams", date: "2025-08-27", tokenId: 59 },
  { src: "p08.webp", title: "The Sky That Listens in Silence", date: "2025-08-30", tokenId: 65 },
  { src: "p09.webp", title: "The Barn Beneath the Gathering Skies", date: "2025-09-06", tokenId: 72 },
  { src: "p10.webp", title: "When the Sky Bows to the Dome", date: "2025-09-13", tokenId: 79 },
  { src: "p11.webp", title: "Where Time Pauses Between Departures", date: "2025-09-19", tokenId: 86 },
  { src: "p12.webp", title: "The Basket of Contrasts", date: "2025-09-25", tokenId: 92 },
  { src: "p13.webp", title: "A Symphony of Knowledge and Freedom", date: "2025-10-02", tokenId: 99 },
  { src: "p14.webp", title: "Whispers of a Painted Afternoon", date: "2025-10-09", tokenId: 106 },
  { src: "p15.webp", title: "Where Light and Elegance Converge", date: "2025-10-15", tokenId: 175 },
  { src: "p16.webp", title: "The Sky Dancers of the Red Curtain", date: "2025-10-22", tokenId: 183 },
  { src: "p17.webp", title: "Where the Waves Remember Our Laughter", date: "2025-10-29", tokenId: 194 },
  { src: "p18.webp", title: "Where Gravity Becomes a Whisper", date: "2025-11-04", tokenId: 202 },
  { src: "p19.webp", title: "The Silent Architecture of Thought", date: "2025-11-10", tokenId: 209 },
  { src: "p20.webp", title: "The Quiet Flourish of Green", date: "2025-11-17", tokenId: 216 },
  { src: "p21.webp", title: "Where Storms Pause to Pray", date: "2025-11-24", tokenId: 223 },
  { src: "p22.webp", title: "Where Warm Lights Hold the Night Gently", date: "2025-11-30", tokenId: 229 },
  { src: "p23.webp", title: "Rainfall on a Fading Morning", date: "2025-12-07", tokenId: 236 },
  { src: "p24.webp", title: "Echoes of Wood, Light, and Waiting Conversations", date: "2025-12-13", tokenId: 243 },
  { src: "p25.webp", title: "Where Light Carries the Weight of Faith", date: "2025-12-18", tokenId: 249 },
  { src: "p26.webp", title: "When Light Learned to Stay", date: "2025-12-25", tokenId: 256 },
  { src: "p27.webp", title: "Scars That Still Hold Weight", date: "2026-01-01", tokenId: 263 },
  { src: "p28.webp", title: "Where the Rain Learns to Wait", date: "2026-01-07", tokenId: 269 },
  { src: "p29.webp", title: "Held by the Light", date: "2026-01-14", tokenId: 276 },
  { src: "p30.webp", title: "After the Sky Let Go", date: "2026-01-21", tokenId: 283 },
  { src: "p31.webp", title: "The Quiet Gatekeeper", date: "2026-01-28", tokenId: 290 },
  { src: "p32.webp", title: "Between Inside and Horizon", date: "2026-02-03", tokenId: 296 },
  { src: "p33.webp", title: "Quiet Circuits", date: "2026-02-10", tokenId: 303 },
  { src: "p34.webp", title: "Threshold of Quiet Reverence", date: "2026-02-17", tokenId: 310 },
  { src: "p35.webp", title: "Simple Plate, Loud Flavor", date: "2026-02-23", tokenId: 316 },
  { src: "p36.webp", title: "Framed by the Window", date: "2026-03-01", tokenId: 323 },
  { src: "p37.webp", title: "The Quiet Work Behind the Cup", date: "2026-03-08", tokenId: 330 },
  { src: "p38.webp", title: "Where Commands Begin", date: "2026-03-14", tokenId: 336 },
  { src: "p39.webp", title: "Where Quiet Meals Become Enough", date: "2026-03-21", tokenId: 343 },
  { src: "p40.webp", title: "Where Night Gathers Quiet Warmth", date: "2026-03-28", tokenId: 350 },
  { src: "p41.webp", title: "Where Quiet Changes Settle In", date: "2026-04-04", tokenId: 357 },
  { src: "p42.webp", title: "A Room That Waits Without Asking", date: "2026-04-10", tokenId: 363 },
  { src: "p43.webp", title: "Where Silence Speaks in Many Hearts", date: "2026-04-17", tokenId: 370 },
  { src: "p44.webp", title: "Movement Within the Ordinary Flow", date: "2026-04-24", tokenId: 377 },
  { src: "p45.webp", title: "Light Kept Behind Lines", date: "2026-04-30", tokenId: 383 },
  { src: "p46.webp", title: "Neon Silence Above the Empty Streets", date: "2026-05-07", tokenId: 390 },
  { src: "p47.webp", title: "Ideas Built Between Conversations", date: "2026-05-14", tokenId: 397 },
  { src: "p48.webp", title: "Carrying Quiet Journeys", date: "2026-05-20", tokenId: 403 },
  { src: "p49.webp", title: "Beneath Skies That Refuse to End", date: "2026-05-27", tokenId: 410 },
  { src: "p50.webp", title: "Light, Faith, and the Path Forward", date: "2026-06-03", tokenId: 417 },
  { src: "p51.webp", title: "Moving Forward Together", date: "2026-06-10", tokenId: 424 },
  { src: "p52.webp", title: "The Stories We Enter Through a Screen", date: "2026-06-15", tokenId: 430 },
  { src: "p53.webp", title: "A Room Full of Legends", date: "2026-06-23", tokenId: 437 },
  { src: "p54.webp", title: "Where Shadows Learn to Breathe", date: "2026-07-01", tokenId: 444 },
  { src: "p55.webp", title: "Rain on the Window, Peace in the Pause", date: "2026-07-06", tokenId: 450 },
  { src: "p56.webp", title: "A New Chair, A Quiet Form of Care", date: "2026-07-13", tokenId: 457 },
  { src: "p57.webp", title: "A Plate Full of Familiar Comfort", date: "2026-07-19", tokenId: 464 },
  { src: "p58.webp", title: "The Smallest Hearts Often Carry the Biggest Courage", date: "2026-07-25", tokenId: 470 },
  { src: "p59.webp", title: "Where Light Reveals What Shadows Cannot", date: "2026-08-01", tokenId: 477 },
  { src: "p60.webp", title: "Even the Night Has Its Own Direction", date: "2026-08-08", tokenId: 484 },
];

export function objktUrl(tokenId: number) {
  return `https://objkt.com/tokens/${CONTRACT}/${tokenId}`;
}
