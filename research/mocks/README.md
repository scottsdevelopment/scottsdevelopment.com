# Design mockups (not wired into the app)

Static HTML/CSS explorations for the redesign. Rebuild with:

    node research/mocks/build.mjs

Repo rows come from `src/content/github.json` (`npm run github:sync`).

| File | Direction | Notes |
| --- | --- | --- |
| `a-ledger-home.html`, `a-ledger-work.html` | A: Ledger | Paper/ink/moss, Bricolage Grotesque + Inter, ruled rows, real table for code |
| `b-desk-home.html` | B: Trading desk | Deep navy, bone type, brass accent, Archivo, dense tile grid and stats |
| `c-notes-home.html` | C: Field notes | Cool neutral, Fraunces serif + Public Sans, cobalt accent, timeline-led |

Screenshots: `shots/<file>-desktop.png` (1440 wide) and `shots/<file>-mobile.png` (390 wide).

## Content rules applied

- Own products and client work are described as capabilities only: no names,
  links, logos or screenshots (owner's "opaque, not invisible" rule).
- Dashed boxes marked `SLOT:` are placeholders for text the owner will supply
  (career history, healthcare wording, prices). Nothing in them is final.
- Healthcare copy is generic: no employer or client names, no compliance claims.
- Public repos shown are limited to ones that do not point at the products.
  Left out on purpose: `BetterRaidBuffs`, `WarlockTaxi` (game addons),
  `lightcord`, `ClutchKey` (chat/streaming tooling), `vdpets-unity`, plus all
  forks, interview-challenge repos and repos without a description or README.
