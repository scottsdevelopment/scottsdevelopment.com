/**
 * Site content: everything the owner may want to edit without touching
 * components. Copy is plain and first person where it reads naturally.
 *
 * Privacy rule from the owner ("opaque, not invisible"): own products and
 * client work are described by what they do. No product names, client names,
 * links, logos or screenshots. Add a name only when the owner says so.
 */

export const owner = {
  name: 'Scott',
  business: "Scott's Development",
  email: 'scott@scottsdevelopment.com',
  location: 'Ferndale, Michigan',
  calendly: 'https://calendly.com/scottsdevelopment',
  github: 'https://github.com/scottsdevelopment',
}

/** What the site sells. Prices are null until the owner confirms them. */
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
    price: null, // e.g. 'from $1,500'
  },
  {
    slug: 'engagement',
    title: 'A quick technical engagement',
    who: 'For a problem that needs an experienced engineer for a few days or weeks, not a hire.',
    includes: [
      'Fix, audit or integrate an existing system',
      'Data work: scrapers, pipelines, reports',
      'Automations and small internal tools',
      'Clear scope and a written summary at the end',
    ],
    price: null, // e.g. '$X/day' or 'project quote'
  },
  {
    slug: 'care',
    title: 'The care plan',
    who: 'For any site I build or take over: it stays hosted, patched and visible.',
    includes: [
      'Hosting on AWS (S3 + CloudFront), SSL, backups',
      'Dependency and security updates',
      'Monthly analytics and Search Console report',
      'Small content and copy changes',
    ],
    price: null, // e.g. '$100/mo' (discussed, not confirmed)
  },
]

/** Own products and client builds, anonymised. */
export const work = [
  {
    kind: 'Own product',
    title: 'Market analytics platform with ML price models',
    summary:
      'Scrapers collect marketplace listings around the clock, Postgres keeps the history, and pricing models turn it into prices people can act on. FastAPI backend, hosted on AWS.',
    stack: ['FastAPI', 'PostgreSQL', 'ML pricing models', 'Scrapers', 'AWS'],
  },
  {
    kind: 'Own product',
    title: 'Static site serving about 30,000 pages',
    summary:
      'A programmatic Next.js site, one page per item, regenerated from a live data feed. Fast to load, pennies to host, indexed by search engines at scale.',
    stack: ['Next.js', 'Static export', 'S3 + CloudFront', 'Search Console'],
  },
  {
    kind: 'Own product',
    title: 'Voice and AI companion app',
    summary:
      'A web app, a voice interface, a chat bot, a desktop companion and plugins that all talk to one backend. One product across five surfaces.',
    stack: ['Web app', 'Voice', 'Chat bot', 'Desktop app', 'LLM tooling'],
  },
  {
    kind: 'Client',
    title: 'Local home-cleaning business',
    summary:
      'A fast static website, analytics and local SEO set up so the owner can see where bookings come from. Hosted and looked after on the care plan.',
    stack: ['Next.js', 'S3 + CloudFront', 'GA4', 'Local SEO'],
  },
]

/** Expertise areas; `evidence` points at work that exists on this site. */
export const expertise = [
  {
    title: 'Websites and web applications',
    summary:
      'React and Next.js on the front; FastAPI, NestJS, Django, Laravel or Node on the back; Postgres underneath. Static where possible, dynamic where needed.',
    evidence: ['own products', 'client sites', 'agentic-nestjs-react-postgres'],
  },
  {
    title: 'Data pipelines, scrapers and models',
    summary:
      'Collecting messy data on a schedule, keeping history, building models on top. Event-driven ETL with queues when volume calls for it.',
    evidence: ['market analytics platform', 'django-aws-etl'],
  },
  {
    title: 'AWS hosting that stays cheap',
    summary:
      'S3 and CloudFront for static sites, ECS on Graviton for services, RDS for data, all in Terraform. Small bills, no surprises.',
    evidence: ['everything I run'],
  },
  {
    title: 'Analytics, SEO and pages at scale',
    summary:
      'GA4 and Search Console from day one; sitemaps that cover every page; site structures that let search engines index tens of thousands of pages.',
    evidence: ['30k-page static site', 'client sites'],
  },
  {
    title: 'E-commerce platforms',
    summary:
      'Shopify, WooCommerce, BigCommerce, Volusion and Magento: custom plugins, checkout work, REST integrations.',
    evidence: ['shopify-christmas-theme-demo', 'earlier client work'],
  },
  {
    title: 'LLM tooling and automation',
    summary:
      'Context management, tool calling and session memory around GPT-class models; automation has been a thread since the start.',
    evidence: ['companion app', 'gpt-engine', 'fhir-summary-gpt'],
  },
]

/** Convenience alias used by the care-plan section. */
export const carePlan = offers.find((o) => o.slug === 'care')

/**
 * Named client work. Empty on purpose: add entries only when a client has
 * agreed to be named. Each entry needs `name`, `url` and `summary`.
 */
export const clients = []

/** Blog posts. Slugs must match the folders under src/app/blog. */
export const posts = [
  {
    slug: 'why-vibe-coding-isnt-enough',
    title: "Why Vibe Coding Isn't Enough: The Case for the Fractional CTO in 2026",
    summary: 'Why businesses need more than no-code tools, and how a fractional CTO fits.',
    date: '2026-02-01',
    readTime: '8 min',
  },
  {
    slug: 'rapid-vertical-validation-ferndale-seasonal',
    title: 'From Blizzard to Business: Validating Vertical SaaS in 48 Hours',
    summary: 'Building, launching and monetising a snow-removal service brand over one weekend.',
    date: '2026-01-28',
    readTime: '12 min',
  },
]

export function formatDate(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
