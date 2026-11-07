/**
 * Site content the owner may want to edit without touching components.
 *
 * Privacy rules (owner): no project or client names anywhere in this file.
 * Work is described by industry and by what was built. Own products are
 * described as capabilities only. Add a name only when the owner says so.
 * Prices stay null until the owner confirms them.
 */

export const owner = {
  name: 'Scott',
  business: "Scott's Development",
  email: 'scott@scottsdevelopment.com',
  location: 'Ferndale, Michigan',
  calendly: 'https://calendly.com/scottsdevelopment',
  github: 'https://github.com/scottsdevelopment',
}

/** The one-paragraph position statement. Used on the home page and services. */
export const positioning = {
  short: 'We do marketing and development for companies.',
  long:
    'Development today is less about typing code and more about directing AI agents so the work gets done fast, on proven platforms, at a cost that makes sense. We look at your vertical and your return on investment first, then build. The offer is simple: we manage the agents for you, end to end, and bring fifteen-plus years of hands-on engineering to the decisions.',
}

/** How we work: the spine of the services page. Plain words, owner's order. */
export const process = [
  {
    step: '01',
    title: 'Start simple',
    body: 'We build you a website or a basic landing page, and set up your analytics and Google Search Console so you can see who is finding you.',
  },
  {
    step: '02',
    title: 'Grow only as far as you want',
    body: 'Staying basic is fine. Need a login? We add it. Need logins plus a CRM to track jobs? We get there, one step at a time.',
  },
  {
    step: '03',
    title: "Don't reinvent the wheel",
    body: 'There is a lot of good open source and prior art. We check licenses and reuse what is proven, then build your custom software or microservices on popular, fully licensable foundations.',
  },
  {
    step: '04',
    title: 'Agentic development makes it fast',
    body: 'You tell us the features you want. We find the solution that is already good and widely used, and we direct AI agents to integrate it quickly, with an engineer reviewing every step.',
  },
  {
    step: '05',
    title: 'Carve out your moat',
    body: 'The goal is custom software that gets you leads, generates business, and makes us an effective partner to your own engineers if you have them.',
  },
]

/** Fractional CTO, in the owner's words. */
export const fractionalCto = {
  quote:
    "I'm not asking to be on your team full time. Let me come in and help you make decisions. If you can't move yet, that's fine; I'll guide you through the move.",
  body: 'It is an engagement you pay for when you need it: architecture reviews, build-or-buy calls, vendor and platform choices, hiring help, and a plan your team can carry without me.',
}

/** What the price covers. Shown next to every price slot. */
export const pricingModel = {
  heading: 'What you pay for',
  body: 'My time, my costs (running the AI agents, hosting, tools) and materials, plus the knowledge. You could try to do it yourself, and that is fine, but you probably do not have all the answers. I have the engineering answers, the prompts and the workflows. I know how to build this well, effectively and fast.',
}

/** The three offers. `price` renders only when set. */
export const offers = [
  {
    slug: 'website',
    title: 'A fixed-scope website',
    who: 'For a local business that needs a site that loads fast, looks right on a phone and shows up in search.',
    includes: [
      'Design and build, usually 3–6 pages',
      'Contact form, maps, booking links',
      'Analytics and Search Console set up',
      'Launch on AWS with SSL',
    ],
    price: null, // owner to confirm, e.g. 'from $X'
    priceLabel: 'Fixed price',
  },
  {
    slug: 'engagement',
    title: 'A technical engagement or Fractional CTO',
    who: 'For a problem that needs an experienced engineer for a few days, a few weeks, or a few hours a month, not a hire.',
    includes: [
      'Fix, audit or integrate an existing system',
      'Custom software, CRMs, automations, data work',
      'AI agents directed and reviewed by an engineer',
      'Architecture and platform decisions as your part-time CTO',
    ],
    price: null, // owner to confirm, e.g. '$X/day' or 'by quote'
    priceLabel: 'Day rate or project quote',
  },
  {
    slug: 'care',
    title: 'The care plan',
    who: 'For any site we build or take over: it stays hosted, patched and visible, and you get a short monthly report.',
    includes: [
      'Hosting on AWS (S3 + CloudFront), SSL, backups',
      'Dependency and security updates',
      'Monthly analytics and Search Console report',
      'Small content and copy changes',
    ],
    price: null, // owner to confirm, ~$100/mo was discussed
    priceLabel: 'Monthly',
  },
]

/**
 * Anonymous industry examples. No names, no links to the sites or repos.
 * `href` is only used for the one example that already has a public write-up.
 */
export const industryWork = [
  {
    industry: 'Moving company',
    title: 'A full marketing site for a moving business',
    summary:
      'Residential, apartment, commercial and loading-only service pages, pricing, reviews and a contact path, built as a fast server-rendered React site with automated visual tests so nothing ships broken.',
    stack: ['React', 'TanStack Start', 'Tailwind', 'Visual regression tests'],
  },
  {
    industry: 'Lawn care and snow removal',
    title: 'A seasonal service brand, from idea to paid jobs in 48 hours',
    summary:
      'Brand, site, pricing and intake built over a weekend with LLM help, launched during a storm and taking paid jobs within two days. The write-up explains the process.',
    stack: ['Static site', 'LLM-assisted design', 'Rapid validation'],
    href: '/blog/rapid-vertical-validation-ferndale-seasonal',
    hrefLabel: 'Read the write-up',
  },
  {
    industry: 'Home cleaning',
    title: 'Website, analytics and local SEO for a cleaning business',
    summary:
      'A static site on AWS with GA4 and Search Console wired in, so the owner can see where bookings come from. Looked after on the care plan.',
    stack: ['Next.js', 'S3 + CloudFront', 'GA4', 'Local SEO'],
  },
  {
    industry: 'Marketing',
    title: 'A product customizer for a dimensional marketing firm',
    summary:
      'An interactive configurator that lets customers build and preview a custom product before ordering, built into the client’s existing marketing workflow.',
    stack: ['Web app', 'Interactive preview', 'Order handoff'],
  },
  {
    industry: 'Repair services',
    title: 'An AI phone agent, CRM and job tracker for repair work (prototype)',
    summary:
      'Customers call a number and talk to an AI agent that takes the job; a CRM stores it; models track each repair through to completion. Built as a prototype and not launched; the architecture is ready to reuse.',
    stack: ['Voice AI agent', 'CRM', 'Job-tracking models', 'Postgres'],
  },
  {
    industry: 'Content creators',
    title: 'Cross-posting automation for short video',
    summary:
      'A script that downloads clips with their metadata and republishes them to a second platform on a schedule. Small, boring and useful: the kind of automation most businesses have waiting.',
    stack: ['Python', 'Platform APIs', 'Scheduled jobs'],
  },
]

/** Own products, anonymised. Audiences are kept separate from this brand. */
export const ownProducts = [
  {
    title: 'Market analytics platform with ML price models',
    summary:
      'Scrapers collect marketplace listings around the clock, Postgres keeps the history, and pricing models turn it into prices people can act on. FastAPI backend on AWS.',
    stack: ['FastAPI', 'PostgreSQL', 'ML pricing models', 'Scrapers', 'AWS'],
  },
  {
    title: 'Static site serving about 30,000 pages',
    summary:
      'A programmatic Next.js site, one page per item, regenerated from a live data feed. Fast to load, pennies to host, indexed by search engines at scale.',
    stack: ['Next.js', 'Static export', 'S3 + CloudFront', 'Search Console'],
  },
  {
    title: 'Voice and AI companion app',
    summary:
      'A web app, a voice interface, a chat bot, a desktop companion and plugins that all talk to one backend. One product across five surfaces.',
    stack: ['Web app', 'Voice', 'Chat bot', 'Desktop app', 'LLM tooling'],
  },
]

/** Expertise areas. `evidence` points at work described on this site. */
export const expertise = [
  {
    title: 'Directing AI agents to build software',
    summary:
      'Choosing the proven platform, writing the prompts and workflows, reviewing every change. The agents do the typing; an engineer owns the result.',
    evidence: ['every build since 2024', 'agent starter templates on GitHub'],
  },
  {
    title: 'Websites and web applications',
    summary:
      'React and Next.js on the front; FastAPI, NestJS, Django, Laravel, Rails or .NET on the back; Postgres underneath. Static where possible, dynamic where needed.',
    evidence: ['service-business sites', 'own products', 'federal and healthcare platforms'],
  },
  {
    title: 'Data pipelines, ingestion and validation',
    summary:
      'Collecting messy data on a schedule, validating it, keeping history, building reports and models on top. Queues and workers when volume calls for it.',
    evidence: ['healthcare ingestion pipelines', 'market analytics platform', 'supply-chain ETL'],
  },
  {
    title: 'AWS hosting that stays cheap',
    summary:
      'S3 and CloudFront for static sites, ECS on Graviton for services, RDS for data, all in Terraform. Small bills, no surprises.',
    evidence: ['everything we run'],
  },
  {
    title: 'Analytics, SEO and pages at scale',
    summary:
      'GA4 and Search Console from day one; sitemaps that cover every page; structures that let search engines and AI agents index tens of thousands of pages.',
    evidence: ['30k-page static site', 'client sites'],
  },
  {
    title: 'E-commerce platforms',
    summary:
      'Shopify Plus, WooCommerce, BigCommerce, Volusion and Magento: custom plugins, checkout work, fraud detection, REST integrations.',
    evidence: ['agency years 2013–2020', 'Shopify Hydrogen demo on GitHub'],
  },
]

/** Blog posts. Slugs must match the folders under src/app/blog. */
export const posts = [
  {
    slug: 'why-vibe-coding-isnt-enough',
    title: "Why Vibe Coding Isn't Enough: The Case for the Fractional CTO in 2026",
    summary:
      'Ferndale veteran dev Scott explains why Detroit businesses need more than just no-code tools. Learn how to leverage a Fractional CTO for 20x growth in 2026.',
    date: '2026-02-01',
    readTime: '8 min',
  },
  {
    slug: 'rapid-vertical-validation-ferndale-seasonal',
    title: 'From Blizzard to Business: Validating Vertical SaaS in 48 Hours',
    summary:
      'How we used LLMs and agentic workflows to architect, build, and monetize a service brand over a single weekend. A case study in rapid vertical validation.',
    date: '2026-01-28',
    readTime: '12 min',
  },
]

export function formatDate(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
