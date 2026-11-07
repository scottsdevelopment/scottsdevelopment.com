import { hasHealthcareContent, healthcare } from '@/content/healthcare'
import { featuredRepos, profile } from '@/content/github'
import { offers, industryWork, ownProducts, expertise, process } from '@/content/site'
import { timeline } from '@/content/career'

describe('healthcare content', () => {
  it('hides the section when there are no entries', () => {
    expect(hasHealthcareContent({ entries: [] })).toBe(false)
    expect(hasHealthcareContent({})).toBe(false)
  })

  it('has entries and makes no compliance or certification claims', () => {
    expect(hasHealthcareContent(healthcare)).toBe(true)
    const text = JSON.stringify(healthcare)
    expect(text).not.toMatch(/hipaa[- ]compliant|soc ?2|certified/i)
  })

  it('never names an employer or client', () => {
    const text = JSON.stringify(healthcare)
    for (const t of timeline) {
      if (t.unnamed) continue
      expect(text).not.toContain(t.employer)
    }
    expect(text).not.toMatch(/easyhealth|molina|humana|kaiser|veterans affairs/i)
  })
})

describe('github showcase data', () => {
  it('is committed JSON with the fields the table needs', () => {
    const repos = featuredRepos()
    expect(repos.length).toBeGreaterThan(0)
    for (const r of repos) {
      expect(r.url).toMatch(/^https:\/\/github\.com\/scottsdevelopment\//)
      expect(typeof r.stars).toBe('number')
      expect(r.blurb.length).toBeGreaterThan(10)
      expect(() => new Date(r.pushedAt).toISOString()).not.toThrow()
    }
    expect(profile.url).toBe('https://github.com/scottsdevelopment')
  })

  it('does not feature repos tied to the owner’s separately branded products', () => {
    const names = featuredRepos().map((r) => r.name.toLowerCase())
    for (const hidden of ['pullcall', 'geflip', 'd2rst', 'warlocktaxi', 'betterraidbuffs', 'lightcord', 'clutchkey']) {
      expect(names.some((n) => n.includes(hidden))).toBe(false)
    }
  })
})

describe('privacy rule: no project or client names in site copy', () => {
  const text = JSON.stringify({ offers, industryWork, ownProducts, expertise, process })

  it('never names a product, client or repo', () => {
    expect(text).not.toMatch(/d2rst|geflip|pullcall|gracefulgleam|clif|ferndale seasonal|autobot|nudg/i)
  })

  it('only links inside the site', () => {
    const links = text.match(/"href":"([^"]+)"/g) || []
    for (const l of links) expect(l).toMatch(/"href":"\//)
    expect(text).not.toMatch(/https?:\/\//)
  })

  it('keeps prices unset until the owner confirms them', () => {
    for (const o of offers) expect(o.price === null || (typeof o.price === 'string' && o.price.length > 0)).toBe(true)
  })

  it('has five process steps in order', () => {
    expect(process.map((p) => p.step)).toEqual(['01', '02', '03', '04', '05'])
  })
})
