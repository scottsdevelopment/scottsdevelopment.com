#!/usr/bin/env node
/**
 * Pulls public repo metadata from GitHub and writes src/content/github.json.
 *
 * The site is a static export, so nothing calls GitHub at request time.
 * Run `npm run github:sync` whenever you want the showcase refreshed, then
 * commit the JSON. Only repos listed in FEATURED are included, and private or
 * forked repos are skipped even if listed. Repos tied to the owner's
 * separately-branded products (game addons, chat tooling) are left out on
 * purpose; see research/mocks/README.md.
 *
 * Auth is optional (60 unauthenticated requests/hour is plenty). If the `gh`
 * CLI is logged in, its token is used so the run never hits rate limits.
 */
import { writeFileSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const OWNER = 'scottsdevelopment'

// Order here is the display order on the site.
const FEATURED = [
  'django-aws-etl',
  'fhir-summary-gpt',
  'agentic-nestjs-react-postgres',
  'developer-directory',
  'gpt-engine',
  'bege',
  'shopify-christmas-theme-demo',
  'tiktok-to-youtube-automation',
  'ng-isbn-validator',
  'scottsdevelopment.com',
]

function token() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN
  try {
    return execSync('gh auth token', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim()
  } catch {
    return null
  }
}

async function api(route) {
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'scottsdevelopment.com-sync' }
  const t = token()
  if (t) headers.Authorization = `Bearer ${t}`
  const res = await fetch(`https://api.github.com${route}`, { headers })
  if (!res.ok) throw new Error(`${route}: ${res.status} ${res.statusText}`)
  return res.json()
}

const user = await api(`/users/${OWNER}`)
const repos = []
for (const name of FEATURED) {
  const r = await api(`/repos/${OWNER}/${name}`)
  if (r.private || r.fork || r.archived) {
    console.warn(`skipping ${name} (private/fork/archived)`)
    continue
  }
  repos.push({
    name: r.name,
    description: r.description ?? '',
    url: r.html_url,
    homepage: r.homepage || null,
    language: r.language,
    stars: r.stargazers_count,
    pushedAt: r.pushed_at,
    topics: r.topics ?? [],
  })
}

const out = {
  generatedAt: new Date().toISOString(),
  profile: {
    login: user.login,
    url: user.html_url,
    publicRepos: user.public_repos,
  },
  repos,
}

const here = path.dirname(fileURLToPath(import.meta.url))
const target = path.join(here, '..', 'src', 'content', 'github.json')
writeFileSync(target, JSON.stringify(out, null, 2) + '\n')
console.log(`wrote ${repos.length} repos to ${path.relative(process.cwd(), target)}`)
