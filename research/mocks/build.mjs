#!/usr/bin/env node
/**
 * Builds the static design mockups in this folder from real site data.
 *
 *   node research/mocks/build.mjs
 *
 * Output: a-ledger-home.html, a-ledger-work.html, b-desk-home.html,
 * c-notes-home.html. Plain HTML/CSS, not wired into Next.js. CSS lives in
 * ./css. Repo data comes from src/content/github.json (npm run github:sync).
 *
 * Content rules (owner): own products and client work are described as
 * capabilities with no names or links; healthcare is generic; dashed SLOT
 * boxes mark text the owner still has to supply. See README.md.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(here, '..', '..')
const gh = JSON.parse(readFileSync(path.join(root, 'src/content/github.json'), 'utf8'))
const css = (n) => readFileSync(path.join(here, 'css', `${n}.css`), 'utf8')

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const when = (iso) => new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })

/* ---------- content (anonymised) ---------- */

const work = [
  { kind: 'Own product', title: 'Market analytics platform with ML price models', summary: 'Scrapers collect marketplace listings around the clock, Postgres keeps the history, and pricing models turn it into prices people can act on. FastAPI backend, hosted on AWS.', stack: ['FastAPI', 'PostgreSQL', 'ML pricing models', 'Scrapers', 'AWS'] },
  { kind: 'Own product', title: 'Static site serving about 30,000 pages', summary: 'A programmatic Next.js site, one page per item, regenerated from a live data feed. Fast to load, pennies to host, indexed by search engines at scale.', stack: ['Next.js', 'Static export', 'S3 + CloudFront', 'Search Console'] },
  { kind: 'Own product', title: 'Voice and AI companion app', summary: 'A web app, a voice interface, a chat bot, a desktop companion and plugins that all talk to one backend. One product across five surfaces.', stack: ['Web app', 'Voice', 'Chat bot', 'Desktop app', 'LLM tooling'] },
  { kind: 'Client', title: 'Local home-cleaning business', summary: 'A fast static website, analytics and local SEO set up so the owner can see where bookings come from. Hosted and looked after on the care plan.', stack: ['Next.js', 'S3 + CloudFront', 'GA4', 'Local SEO'] },
]

const offers = [
  { title: 'A fixed-scope website', who: 'For a local business that needs a site that loads fast, looks right on a phone and shows up in search.', includes: ['Design and build, usually 3–6 pages', 'Contact form, maps, booking links', 'Analytics and Search Console set up', 'Launch on AWS with SSL'], price: 'SLOT: fixed price, owner to confirm' },
  { title: 'A quick technical engagement', who: 'For a problem that needs an experienced engineer for a few days or weeks, not a hire.', includes: ['Fix, audit or integrate an existing system', 'Data work: scrapers, pipelines, reports', 'Automations and small internal tools', 'Clear scope and a written summary at the end'], price: 'SLOT: day or project rate, owner to confirm' },
  { title: 'The care plan', who: 'For any site I build or take over: it stays hosted, patched and visible.', includes: ['Hosting on AWS (S3 + CloudFront), SSL, backups', 'Dependency and security updates', 'Monthly analytics and Search Console report', 'Small content and copy changes'], price: 'SLOT: monthly price, owner to confirm (~$100/mo discussed)' },
]

const expertise = [
  { title: 'Websites and web applications', summary: 'React and Next.js on the front; FastAPI, NestJS, Django, Laravel or Node on the back; Postgres underneath. Static where possible, dynamic where needed.', evidence: 'own products, client sites, agentic-nestjs-react-postgres' },
  { title: 'Data pipelines, scrapers and models', summary: 'Collecting messy data on a schedule, keeping history, building models on top. Event-driven ETL with queues when volume calls for it.', evidence: 'market analytics platform, django-aws-etl' },
  { title: 'AWS hosting that stays cheap', summary: 'S3 and CloudFront for static sites, ECS on Graviton for services, RDS for data, all in Terraform. Small bills, no surprises.', evidence: 'everything I run' },
  { title: 'Analytics, SEO and pages at scale', summary: 'GA4 and Search Console from day one; sitemaps that cover every page; site structures that let search engines index tens of thousands of pages.', evidence: '30k-page static site, client sites' },
  { title: 'E-commerce platforms', summary: 'Shopify, WooCommerce, BigCommerce, Volusion and Magento: custom plugins, checkout work, REST integrations.', evidence: 'shopify-christmas-theme-demo, earlier client work' },
  { title: 'LLM tooling and automation', summary: 'Context management, tool calling and session memory around GPT-class models; automation has been a thread since the start.', evidence: 'companion app, gpt-engine, fhir-summary-gpt' },
]

const blurbs = {
  'django-aws-etl': 'Event-driven ETL for healthcare CSV drops: S3 event, SQS queue, Celery worker, Postgres.',
  'fhir-summary-gpt': 'CLI that turns structured patient data into a readable health summary with an LLM, exported via Pandoc.',
  'developer-directory': 'Developer profile CRUD app: Go (Gin, GORM, SQLite, Swagger) with an Angular front end.',
  'agentic-nestjs-react-postgres': 'Docker starter: NestJS and TypeORM API, React front end, Postgres.',
  'gpt-engine': 'Session memory, tool orchestration and pluggable providers around GPT-class models.',
  bege: 'Browser tool for clean, themed code screenshots. Live demo on GitHub Pages.',
  'tiktok-to-youtube-automation': 'Downloads short clips with metadata and republishes them to another platform.',
  'shopify-christmas-theme-demo': 'Holiday storefront on Shopify Hydrogen, React Router 7, TypeScript, Tailwind.',
  'ng-isbn-validator': 'ISBN validation for Angular, usable as a plain module.',
  'scottsdevelopment.com': 'This site. Next.js static export on S3 and CloudFront.',
}
const repos = gh.repos.map((r) => ({ ...r, blurb: blurbs[r.name] || r.description }))

/** DRAFT from the owner's notes only: no dates, no employer names. He will send final text. */
const timeline = [
  { era: 'Early', title: 'AOL, BASIC and Visual Basic', body: 'Got curious about computers very young: AOL tooling, BASIC and Visual Basic, and a first taste of how programs could be poked at from outside.' },
  { era: 'Early teens', title: 'Game internals, C, C++ and Java', body: 'Games as the hook for learning C, C++ and Java. Not yet good at memory or data structures; very interested.' },
  { era: 'IT', title: 'Computer repair and diagnosis', body: 'Building machines, diagnosing faults, removing malware, fixing the common problems.' },
  { era: 'Web', title: 'PHP, Perl, HTML, WordPress, Linux servers', body: 'Web forms and sites in the PHP 4 era. First custom jobs. Learned to stand up and run Linux boxes.' },
  { era: 'E-commerce', title: 'Stores, plugins and integrations', body: 'Shopify, Volusion, BigCommerce, WooCommerce. Custom plugins and integrations in PHP, JavaScript, C# and ColdFusion.' },
  { era: 'Stacks', title: 'Node.js, Python, Django, Laravel, CRMs', body: 'Front and back ends across stacks; a long stretch of custom Laravel applications and CRM work. A couple of startup attempts that did not take.' },
  { era: 'Public trust', title: 'Healthcare and benefits systems', body: 'C# and Ruby on Rails work on public-trust systems in Washington, D.C. The start of a healthcare focus.' },
  { era: 'Now', title: 'Products, healthcare, AI agents', body: 'Running my own products alongside a full-time role. Studying ML and economic models. Interested in healthcare quality measurement, digital transformation and in-home care.' },
]

/** DRAFT, generic: no employer or client names, no compliance claims. */
const healthcareDraft = [
  { title: 'Benefits platform modernisation', body: 'Moved a federal benefits system off legacy infrastructure onto services built with React and Ruby on Rails, with accessibility and federal security requirements throughout.' },
  { title: 'Patient platform modernisation', body: 'Zero-downtime modernisation of a patient-facing platform: security audit, SQL performance work in C#/.NET, staged migration to Salesforce.' },
  { title: 'Claims and quality data', body: 'Ingestion pipelines for claims files, and an interest in quality measurement programmes (NCQA, HEDIS) and in-home care.' },
  { title: 'Public code', body: 'django-aws-etl (claims ingestion pipeline on S3, SQS, Celery) and fhir-summary-gpt (patient health summaries with an LLM).' },
]

/* ---------- shared fragments ---------- */

const slot = (label, note) => `<div class="slot"><strong>${esc(label)}</strong> ${esc(note)}</div>`

const repoTable = (list) => `
<table class="repos">
  <thead><tr><th>Repository</th><th class="what">What it is</th><th>Language</th><th class="num">Updated</th><th class="num">Stars</th></tr></thead>
  <tbody>
  ${list.map((r) => `<tr>
    <td><a href="${r.url}">${esc(r.name)}</a></td>
    <td class="what">${esc(r.blurb)}${r.homepage ? ` <a href="${r.homepage}">Demo</a>` : ''}</td>
    <td>${esc(r.language || '—')}</td>
    <td class="num">${when(r.pushedAt)}</td>
    <td class="num">${r.stars}</td>
  </tr>`).join('')}
  </tbody>
</table>`

const timelineList = () => `
<ol class="timeline">
${timeline.map((t) => `<li><span class="era">${esc(t.era)}</span><div><h3>${esc(t.title)}</h3><p>${esc(t.body)}</p></div></li>`).join('')}
</ol>`

const healthcareList = () => `
<ul class="hc">
${healthcareDraft.map((h) => `<li><h3>${esc(h.title)}</h3><p>${esc(h.body)}</p></li>`).join('')}
</ul>`

const offersList = () => `
<div class="offers">
${offers.map((o) => `<div class="offer"><h3>${esc(o.title)}</h3><p>${esc(o.who)}</p><ul>${o.includes.map((i) => `<li>${esc(i)}</li>`).join('')}</ul><div class="price">${esc(o.price)}</div></div>`).join('')}
</div>`

const workList = () => `
<ul class="ledger">${work.map((w) => `<li><span class="kind">${esc(w.kind)}</span><h3>${esc(w.title)}</h3><p>${esc(w.summary)}</p><ul class="stack">${w.stack.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></li>`).join('')}</ul>`

const nav = (items, ctaClass = 'cta') =>
  `<nav>${items.map((i) => `<a href="#">${i}</a>`).join('')}<a class="${ctaClass}" href="#">Contact</a></nav>`

const head = (title, fonts, cssName) => `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="${fonts}" rel="stylesheet"><style>${css(cssName)}</style></head><body>`

/* ---------- Direction A: Ledger ---------- */

const fontsA = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..700&family=Inter:wght@400;500&display=swap'
const headerA = `<header><div class="wrap"><a class="brand" href="#">Scott's Development</a>${nav(['Work', 'Services', 'Healthcare', 'Writing', 'FAQ'])}<button class="burger" aria-label="Open menu">☰</button></div></header>`
const footA = `<footer><div class="wrap"><div class="cols">
<div><strong>Scott's Development</strong><p>Websites, small software and cheap-to-run hosting for local businesses, built by one engineer in Ferndale, Michigan.</p><a href="#">scott@scottsdevelopment.com</a><br><a href="${gh.profile.url}">github.com/scottsdevelopment</a></div>
<div><h2>Services</h2><ul><li><a href="#">Fixed-scope websites</a></li><li><a href="#">Technical engagements</a></li><li><a href="#">Care plan</a></li></ul></div>
<div><h2>Site</h2><ul><li><a href="#">Work</a></li><li><a href="#">Writing</a></li><li><a href="#">FAQ</a></li><li><a href="#">Contact</a></li></ul></div>
</div><div class="fine"><span>© 2026 Scott's Development LLC</span><span>Ferndale, Michigan. Remote-friendly.</span></div></div></footer></body></html>`

const sectionA = (title, lede, body, cls = '', id = '') =>
  `<section class="${cls}" ${id ? `id="${id}"` : ''}><div class="wrap"><div><h2>${title}</h2>${lede ? `<p class="lede">${lede}</p>` : ''}</div><div>${body}</div></div></section>`

const homeA = `${head('Direction A: Ledger — home', fontsA, 'a')}${headerA}
<main>
<div class="hero"><div class="wrap">
<h1>Websites and small software for local businesses, built to last and cheap to run.</h1>
<div class="grid">
<p class="lede">I'm Scott, a full-stack engineer in Ferndale, Michigan. Alongside my day job I build sites and systems for small businesses, host them on AWS for very little, and send a monthly note on how they're doing.</p>
<div class="live"><small>What I do</small><ul>${offers.map((o) => `<li><a href="#">${o.title}</a><span>${o.who}</span></li>`).join('')}</ul></div>
</div>
<div class="actions"><a class="btn" href="#">Tell me what you need</a><a href="#">See the work</a></div>
</div></div>

${sectionA('Three ways to work with me', 'Small, fixed and clear. No retainers you don’t understand.', offersList())}
${sectionA('Work', 'My own products and client builds, described by what they do rather than by name. I keep those audiences separate from this one.', workList(), 'white')}
${sectionA("What I'm good at", 'Each area lists the work that shows it, so you can check the claim instead of taking my word for it.', `<dl>${expertise.map((e) => `<div><dt>${e.title}</dt><dd>${e.summary}</dd><dd class="ev">Shown in: ${e.evidence}</dd></div>`).join('')}</dl>`)}
${sectionA('Public code', `${gh.profile.publicRepos} public repositories on <a href="${gh.profile.url}">GitHub</a>. These are the ones worth your time. Stars and dates come from GitHub, not typed in.`, `<div class="tablewrap">${repoTable(repos.slice(0, 8))}</div><p><a href="${gh.profile.url}">Everything else on GitHub</a></p>`, 'deep')}
${sectionA('Background', 'How I got here, in order. Short on purpose.', slot('SLOT: career history.', 'Drafted from Scott’s notes; no dates or employers shown. He will send the final text.') + timelineList(), 'white')}
${sectionA('Work in healthcare', 'Systems that move patient, claims and benefits data between organisations, and tools that help people read it.', slot('SLOT: healthcare.', 'Hidden on the live site until content exists. Generic draft; no employer names, no compliance claims.') + healthcareList(), '', 'healthcare')}
${sectionA('Tell me what you need', 'A new site, something broken, a data problem, or just hosting. I reply to every message myself.', `<form><div><label>What's the problem you want solved?</label><textarea rows="3"></textarea></div><div class="two"><div><label>Name</label><input></div><div><label>Email</label><input type="email"></div></div><div><label>Anything else: timeline, budget, links</label><textarea rows="4"></textarea></div><div><a class="btn" href="#">Send message</a></div></form>`, 'white')}
</main>${footA}`

const workA = `${head('Direction A: Ledger — work page', fontsA, 'a')}${headerA}
<main>
<div class="hero" style="padding-bottom:2rem"><div class="wrap">
<h1 style="max-width:18ch;font-size:clamp(2.2rem,5.5vw,3.75rem)">Work: what I've built, by what it does.</h1>
<p class="lede" style="margin-top:1.5rem">Own products, client sites and earlier engagements. Names are left out on purpose; the stack and the result are accurate. Public code is below with live data from GitHub.</p>
</div></div>
${sectionA('Products and client builds', '', workList())}
${sectionA('Earlier engagements', 'Larger systems I worked on before and alongside my own products.', `<ol class="timeline">
<li><span class="era">Government</span><div><h3>Federal benefits platform</h3><p>Moved a benefits system off legacy infrastructure onto services built with React and Ruby on Rails, with accessibility and federal security requirements throughout.</p></div></li>
<li><span class="era">Healthcare</span><div><h3>Patient platform modernisation</h3><p>Zero-downtime modernisation of a patient-facing platform: security audits and SQL performance work in C#/.NET, then a staged migration to Salesforce.</p></div></li>
<li><span class="era">Operations</span><div><h3>Claims workflow tooling</h3><p>Node.js and TypeScript tools that replaced manual, error-prone steps in claim handling. Ticket resolution time dropped by about 60%.</p></div></li>
<li><span class="era">Retail</span><div><h3>E-commerce and B2B integrations</h3><p>Shopify Plus, Magento, WooCommerce, BigCommerce and Volusion stores with custom plugins, REST integrations, checkout optimisation and fraud detection.</p></div></li>
<li><span class="era">Logistics</span><div><h3>Supply chain ETL</h3><p>Pipelines that ingest EDI files and other logistics data and feed inventory and reporting systems in near real time.</p></div></li>
<li><span class="era">Own experiment</span><div><h3>Seasonal service brand in 48 hours</h3><p>A snow-removal service built, launched and taking paid jobs within two days. <a href="#">Read the write-up</a></p></div></li>
</ol>`, 'white')}
${sectionA('Public code', `All ${repos.length} featured repositories. ${gh.profile.publicRepos} public in total.`, `<div class="tablewrap">${repoTable(repos)}</div>`, 'deep')}
</main>${footA}`

/* ---------- Direction B: Trading desk ---------- */

const fontsB = 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..800&display=swap'
const homeB = `${head('Direction B: Trading desk — home', fontsB, 'b')}
<header><div class="wrap"><a class="brand" href="#">SCOTT'S DEVELOPMENT</a>${nav(['Services', 'Work', 'Code', 'Background', 'Healthcare'])}<button class="burger" aria-label="Open menu">☰</button></div></header>
<main>
<div class="hero"><div class="wrap">
<h1>One engineer. Fixed scope. Sites and systems that keep working.</h1>
<p>Scott's Development is a one-person studio in Ferndale, Michigan. I build websites and small software for local businesses, run data-heavy products of my own on lean AWS infrastructure, and look after what I build for a small monthly fee.</p>
<div class="actions"><a class="btn" href="#">Tell me what you need</a><a class="btn ghost" href="#">See the work</a></div>
<div class="board">${offers.map((o) => `<div class="tile"><div class="k">Service</div><h3><a href="#">${o.title}</a></h3><p class="tag">${o.who}</p><ul class="stack">${o.includes.map((i) => `<li>${i}</li>`).join('')}</ul><div class="slot" style="margin:1rem 0 0">${o.price}</div></div>`).join('')}</div>
</div></div>

<section><div class="wrap"><h2>Work</h2><p class="lede">Described by what it does, not by name.</p>
<div class="grid3">${work.map((w) => `<div class="cell"><p class="ev" style="margin:0 0 .3rem">${w.kind}</p><h3>${w.title}</h3><p>${w.summary}</p><p class="ev">${w.stack.join(' · ')}</p></div>`).join('')}</div></div></section>

<section><div class="wrap"><h2>What I'm good at</h2><p class="lede">Each area lists the work that proves it.</p>
<div class="grid3">${expertise.map((e) => `<div class="cell"><h3>${e.title}</h3><p>${e.summary}</p><p class="ev">Shown in: ${e.evidence}</p></div>`).join('')}</div></div></section>

<section><div class="wrap"><h2>Public code</h2><p class="lede">Pulled from GitHub at build time. Nothing here is typed in by hand.</p>
<div class="stats"><div><b>${gh.profile.publicRepos}</b><span>public repos</span></div><div><b>${repos.length}</b><span>featured</span></div><div><b>${repos.reduce((n, r) => n + r.stars, 0)}</b><span>stars on featured</span></div><div><b>${new Set(repos.map((r) => r.language).filter(Boolean)).size}</b><span>languages</span></div></div>
<div class="tablewrap">${repoTable(repos)}</div><p style="margin-top:1rem"><a href="${gh.profile.url}">All repositories on GitHub</a></p></div></section>

<section><div class="wrap"><div class="two">
<div><h2>Background</h2><p class="lede">From AOL and BASIC to healthcare systems and AI agents.</p>${slot('SLOT: career history.', 'Drafted from Scott’s notes; no dates or employers. He will send final text.')}${timelineList()}</div>
<div><h2>Healthcare</h2><p class="lede">Benefits and patient data systems, and where I want to go next in care.</p>${slot('SLOT: healthcare.', 'Hidden on the live site until content exists. Generic draft; no names, no compliance claims.')}${healthcareList()}</div>
</div></div></section>

<section><div class="wrap"><h2>Tell me what you need</h2><p class="lede">I reply to every message myself.</p><form style="max-width:36rem"><div><label>What's the problem?</label><textarea rows="3"></textarea></div><div><label>Email</label><input type="email"></div><div><a class="btn" href="#">Send message</a></div></form></div></section>
</main>
<footer><div class="wrap"><span>© 2026 Scott's Development LLC · Ferndale, Michigan</span><span><a href="#">scott@scottsdevelopment.com</a><a href="${gh.profile.url}">GitHub</a><a href="#">Writing</a></span></div></footer>
</body></html>`

/* ---------- Direction C: Field notes ---------- */

const fontsC = 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=Public+Sans:wght@400;600&display=swap'
const homeC = `${head('Direction C: Field notes — home', fontsC, 'c')}
<header><div class="wrap"><a class="brand" href="#">Scott's Development</a>${nav(['Services', 'Background', 'Work', 'Code', 'Healthcare'])}<button class="burger" aria-label="Open menu">☰</button></div></header>
<main>
<div class="hero"><div class="wrap">
<h1>Your business needs a website that works. <em>I've been building them since the dial-up days.</em></h1>
<p>I'm Scott, an engineer in Ferndale, Michigan. Alongside my day job I build sites and small software for local businesses, host them cheaply on AWS, and send a monthly report so you know what's happening. Fixed scope, plain language, one person to call.</p>
<div class="links"><a class="btn" href="#">Tell me what you need</a><a href="#">Or read how I got here</a></div>
<div class="trio">${offers.map((o) => `<div class="card"><div class="k">Service</div><h3><a href="#">${o.title}</a></h3><p>${o.who}</p><div class="stack">${o.includes.slice(0, 3).join(' · ')}</div><div class="slot" style="margin:1rem 0 0">${o.price}</div></div>`).join('')}</div>
</div></div>

<section id="background"><div class="wrap"><h2>Background</h2><p class="lede">Curiosity first, credentials later. The thread through all of it is automation: making computers do the repetitive part.</p>
${slot('SLOT: career history.', 'Drafted from Scott’s notes. No dates or employers shown. He will send final text.')}${timelineList()}</div></section>

<section><div class="wrap"><h2>Work</h2><p class="lede">Own products and client builds, described by what they do.</p>
<div class="exp">${work.map((w) => `<div class="card"><div class="k">${w.kind}</div><h3>${w.title}</h3><p>${w.summary}</p><p class="stack">${w.stack.join(' · ')}</p></div>`).join('')}</div></div></section>

<section><div class="wrap"><h2>What that adds up to</h2><p class="lede">Six areas, each with the work that shows it.</p>
<div class="exp">${expertise.map((e) => `<div class="card"><h3>${e.title}</h3><p>${e.summary}</p><p class="stack">Shown in: ${e.evidence}</p></div>`).join('')}</div></div></section>

<section id="healthcare"><div class="wrap"><h2>Healthcare</h2><p class="lede">Where I've worked in it, and where I want to go: quality measurement, digital transformation, and in-home care that software can genuinely help with.</p>
${slot('SLOT: healthcare.', 'Hidden on the live site until content exists. Generic draft; no names, no compliance claims.')}${healthcareList()}</div></section>

<section><div class="wrap"><h2>Public code</h2><p class="lede">${gh.profile.publicRepos} public repositories on GitHub; these are the ones worth opening. Data pulled from GitHub, not typed in.</p>
<div class="tablewrap">${repoTable(repos.slice(0, 8))}</div><p style="margin-top:1rem"><a href="${gh.profile.url}">Everything on GitHub</a></p></div></section>

<section><div class="wrap"><h2>Say hello</h2><p class="lede">Tell me about your business and what you need. I reply to everything myself.</p>
<form><div><label>What do you need?</label><textarea rows="3"></textarea></div><div><label>Email</label><input type="email"></div><div><a class="btn" href="#">Send message</a></div></form></div></section>
</main>
<footer><div class="wrap"><span>© 2026 Scott's Development LLC · Ferndale, Michigan</span><span><a href="#">scott@scottsdevelopment.com</a><a href="${gh.profile.url}">GitHub</a><a href="#">Writing</a></span></div></footer>
</body></html>`

/* ---------- write ---------- */

const out = {
  'a-ledger-home.html': homeA,
  'a-ledger-work.html': workA,
  'b-desk-home.html': homeB,
  'c-notes-home.html': homeC,
}
for (const [name, html] of Object.entries(out)) {
  writeFileSync(path.join(here, name), html)
  console.log('wrote', name)
}
