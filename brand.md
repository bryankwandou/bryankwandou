# Brand — Bryan Kwandou

Personal site and work record. Not a company brand; the person is the brand.

## Positioning

Bryan Kwandou builds systems that produce evidence. Across twenty-one shipped
products the same idea keeps surfacing: a machine can act, but a human has to be
able to check what it did afterwards. The site should read like a record of work,
not a brochure about a person.

**One line:** A builder from Makassar who ships things you can verify.

## Direction

Warm Monochrome restraint carrying Gallery Editorial content focus. The work has
84 real screenshots and 21 logos behind it, so the interface steps back and lets
that imagery carry the page. Chrome stays quiet; the record stays loud.

- **Density:** comfortable on narrative pages, compact on index pages
- **Surface:** flat sections over a warm near-black field, panels only where a
  boundary means something
- **Type mood:** editorial, technical, indexed
- **Motion:** short springs, no bounce, entry slower than exit

### Do

- Number things. Entries in an index get an index.
- Put metadata in mono, prose in serif, interface labels in sans.
- Let one ember accent do all the work of "this is active".
- Use asymmetric splits. Nothing important sits dead-centre.
- Show the real screenshot at real aspect ratio rather than a mock device frame.

### Don't

- No violet-to-blue hero gradient.
- No three-column icon-heading-paragraph feature grid.
- No uniform radius across every element.
- No gradient text on headings.
- No card nested inside a card inside a card.

## Colour

Warm greys, not blue greys. The field is near-black but carries a trace of red so
photographs and product screenshots sit on it without going cold.

| Token | Value | Role |
|---|---|---|
| `--ink` | `#121110` | page field |
| `--ink-raised` | `#191817` | raised surface |
| `--ink-panel` | `#201E1C` | panel, input |
| `--line` | `rgba(245, 240, 233, 0.08)` | hairline |
| `--line-strong` | `rgba(245, 240, 233, 0.16)` | active hairline |
| `--paper` | `#F5F1EA` | primary text |
| `--paper-dim` | `#A9A29A` | secondary text |
| `--paper-faint` | `#6E6862` | metadata, captions |
| `--ember` | `#E4703A` | the single accent |
| `--ember-soft` | `rgba(228, 112, 58, 0.14)` | accent wash |
| `--signal` | `#57997A` | live status only, never decoration |

Ember is deliberate. The violet-blue pairing is the most worn-out combination in
generated interfaces, and a warm accent also matches the photography half of the
work. Green appears only next to a status dot for something that is genuinely
live, and never as a decorative fill.

Light theme inverts the field to `#F7F4EF` and keeps ember unchanged; contrast
was checked in both directions.

## Type

Three families, each with a job that the other two cannot do.

- **Instrument Serif** — display and pull quotes. High contrast, editorial,
  chosen so no one can mistake this for a default.
- **Geist Sans** — interface, navigation, body copy under 18px.
- **Geist Mono** — dates, counts, slugs, stack labels, anything indexed.

Scale: 12 / 13 / 15 / 17 / 21 / 28 / 40 / 60 / 88.
Display tracking `-0.03em`. Mono tracking `0.04em` uppercase.
Three weights maximum in any one view.

## Motion

- Entry 320ms, exit 200ms. Asymmetric on purpose.
- Spring `[0.22, 1, 0.36, 1]` for transforms, plain ease-out for opacity.
- Stagger 45ms across list children, capped at eight before it flattens.
- Everything meaningful respects `prefers-reduced-motion`.

## Voice

Plain declarative sentences. Specific numbers over adjectives. No "cutting-edge",
no "seamless", no "leveraging". Where something is a prototype it says prototype.
Where something runs on devnet it says devnet. The credibility comes from being
precise about limits, not from hiding them.
