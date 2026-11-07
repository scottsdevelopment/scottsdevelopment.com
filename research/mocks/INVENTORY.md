# Content inventory: current site (origin/main) → integrated redesign

Default decision is **KEEP**. Items are only edited where they collide with the
owner's privacy rules (no project/client names beyond the resume, no compliance
or certification claims, own products anonymous) and those are listed at the end
with the reason. Visual language (cyan/violet gradient accents, Outfit + Inter,
rounded cards, gray-50/white section rhythm) is kept and extended, not replaced.

Legend: KEEP = unchanged · MERGE = kept, with new content added around or into it
· MOVE = kept, relocated · EDIT = wording changed (reason given) · NEW = added.

## Site chrome

| Item | Decision | Notes |
| --- | --- | --- |
| Header: logo, 5 links, mobile menu | MERGE | Added **About**. Same styling. |
| Footer: brand blurb, Services, Industries, Navigation columns, email, Calendly | MERGE | Blurb reworded to the new positioning; added About, GitHub link, "Fixed-Scope Websites", "Care Plan", "Cleaning, Moving, Lawn & Snow" rows. |
| `layout.js` metadata, keywords, OpenGraph, Twitter, JSON-LD ProfessionalService, GA4 tag | MERGE | Title kept. Description reworded. Added keywords, `knowsAbout`, `sameAs` GitHub. Removed the literal `"telephone": "+1-***REMOVED***"` (was a redaction placeholder). GA4 `G-E6DYMZXL6X` unchanged. |
| Fonts Outfit (headings) + Inter (body) | KEEP | |
| `colors.light.js` token system, `Card`, `Button` | KEEP | Restored exactly from main. |
| `public/icon.png`, `public/logo.png`, `LogoIcon` | KEEP | |
| `sitemap.js`, `robots.js` | MERGE | Added `/about`. |
| Formspree ids `xbljqeop` (sections) and `mgvnddpv` (contact page), `useFormspree` | KEEP | |
| `next.config.js` | MERGE | `assetPrefix` still points at the live domain in production; added an `ASSET_PREFIX` env override so `npm run preview` works locally (it loaded CSS from production before, so a local preview was always unstyled). Deploy workflow unaffected. |

## Home `/`

| Section | Decision | Notes |
| --- | --- | --- |
| Hero: "Principal Architect & Fractional CTO." | MERGE | Headline kept. Subtitle now states the positioning (we manage the AI agents, proven platforms, start with a site, grow to CRM, part-time CTO, 15+ years). CTA "Get a Free 1-Hour Debt Audit" kept; added "See how we work →". Trust row reworded (15+ Years Hands-On / Agents Managed For You / Proven Platforms Only). Terminal card kept, lines reworded to the process. Badge "Open for Fractional Roles (Q1 2026)" → "Open for new fractional clients" (date was stale). |
| AgencyAlternative: "The Technical Adult…", 01/02/03 list, 20x card, comparison table | KEEP | |
| **How we work** (5 steps) | NEW | Owner's process, verbatim in spirit. |
| **Three ways to work with us** + price slots + "What you pay for" | NEW | Prices null → amber "owner to confirm" slot. |
| HybridModel: "The Lead-from-the-Front Model." | KEEP | |
| ServicesOverview: "Modernizing Legacy Systems & Rescuing Failed Projects." (3 cards) | KEEP | |
| **Who we work with** (6 anonymous industry examples) | NEW | Moving, lawn/snow, cleaning, marketing customizer, repair AI phone agent + CRM (prototype), short-video automation. |
| **Expertise** (6 areas, with "Shown in") | NEW | |
| **Healthcare** | NEW | From resume, current role and public repos; no names. |
| **Background** teaser + compact timeline → `/about` | NEW | |
| **Blog** teaser (2 posts) | NEW | Same cards as `/blog`. |
| ContactSection | KEEP | |

## Services `/services`

| Section | Decision | Notes |
| --- | --- | --- |
| Hero "Principal Engineering Leadership. On Your Terms." | MERGE | Subtitle reworded to the process + agents + 15 years. |
| **How we work** (5 steps) | NEW | |
| **Three ways to work with us** + pricing model | NEW | |
| 6 service cards (Custom Web, Legacy Modernization, Fractional CTO, Compliance & Security, Team Augmentation, Enterprise Workflow Automation) | KEEP / 1 EDIT | "Compliance & Security" copy edited, see below. |
| About Scott's Development: Value Gap, Adult in the Room, Local Roots, "Why the Fractional Model Works", quote | KEEP | |
| **Fractional CTO, in plain words** (owner quote) | NEW | Inserted above "Why the Fractional Model Works". |
| FractionalEngineeringTable | KEEP | |
| ContactSection "Need Engineering Leadership?" | KEEP | |

## Work `/work`

| Section | Decision | Notes |
| --- | --- | --- |
| Hero | MERGE | H1 "Selected Engagements." → "Our Work."; the old H1 becomes the heading of the engagements group. Subtitle widened. |
| **Small businesses we build for** (6 anonymous examples) | NEW | |
| **Products we run** (3 anonymous own products) | NEW | |
| 8 case studies: Ferndale Seasonal, Custom Web Applications, Federal Government Benefits Platform, Healthcare and Insurance Modernization, Workflow & Intelligence Tooling, Marketing Automation Platform, Enterprise eCommerce & B2B, Supply Chain & Data Automation | KEEP / 2 EDIT | All kept with impact lines, tags, icons. Two titles edited, see below. |
| **Public code** table | NEW | 10 repos from `github.json`. |
| ContactSection "Start Your Project" | KEEP | |

## About `/about` (NEW page)

Story (4 paragraphs from his notes), resume timeline 2008 → present with employer
names and dates (flagged), education, interests, skills in 8 groups, Healthcare,
Public code, contact.

## FAQ `/faq`

| Item | Decision |
| --- | --- |
| 3 categories, 9 questions, FAQPage JSON-LD, accordion | KEEP |
| **Getting Started & Pricing** (5 new questions: simple website, why not use AI myself, pricing model, care plan, "we manage the agents") | NEW |
| Hero subtitle | EDIT (mentions pricing, care plan, agents) |

## Contact `/contact`

| Item | Decision |
| --- | --- |
| Hero, "Why hire a local Fractional CTO?", service-area card, Google Maps embed, testimonial, contact info, Calendly, availability copy, form | KEEP |
| Hero subtitle | EDIT (mentions website, care plan, custom software) |
| Subject dropdown | MERGE (added Website Build, Care Plan, Custom Software/CRM) |

## Blog `/blog`, `/blog/why-vibe-coding-isnt-enough`, `/blog/rapid-vertical-validation-ferndale-seasonal` (+ 10 images)

KEEP, byte-for-byte. URLs unchanged.

## Edits forced by the privacy rules

| Where | Was | Now | Reason |
| --- | --- | --- | --- |
| `/work` case study | "Ferndale Seasonal: From Blizzard to Business in 48 Hours" | "A Seasonal Lawn & Snow Brand: …" | Owner: don't name projects. The blog post URL and title still carry the name (question 3). |
| `/work` case study | "Federal Government Benefits Platform … Department of Veterans Affairs … 100k+ veterans" | "Federal Benefits Platform … a federal benefits agency … 100k+ beneficiaries" | Owner: no client names beyond the resume; the VA is not on it. |
| `/services` card | "Building HIPAA, PCI, and SOC2 compliant applications…" | "We build for the security and regulatory requirements of healthcare, government and enterprise work…" | Owner: no compliance claims. |
| Hero badge | "Open for Fractional Roles (Q1 2026)" | "Open for new fractional clients" | Stale date, not privacy. |
| `/contact` availability | "Accepting new fractional clients for Q1 2026." | "Accepting new fractional clients." | Stale date, not privacy. |
| JSON-LD | `"telephone": "+1-***REMOVED***"` | removed | Redaction placeholder shipped to production. |

## Dropped

Nothing from the current site was dropped. The three paper/moss mockups in this
folder (`a-ledger-*`, `b-desk-*`, `c-notes-*`) are superseded by the integrated
build and kept only as history.
