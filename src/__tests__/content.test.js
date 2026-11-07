import { hasHealthcareContent, healthcare } from '@/content/healthcare'
import { featuredRepos, profile } from '@/content/github'
import { offers, work, expertise } from '@/content/site'

describe('healthcare content gate', () => {
  it('hides the section while the owner has not added entries', () => {
    expect(hasHealthcareContent({ entries: [] })).toBe(false)
    expect(hasHealthcareContent({})).toBe(false)
  })

  it('shows the section once there is at least one entry', () => {
    expect(hasHealthcareContent({ entries: [{ title: 'x', summary: 'y' }] })).toBe(true)
  })

  it('ships hidden by default and makes no compliance claims', () => {
    expect(hasHealthcareContent(healthcare)).toBe(false)
    expect(JSON.stringify(healthcare)).not.toMatch(/hipaa[- ]compliant|soc ?2 compliant/i)
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
})

describe('privacy rule: own products stay unnamed', () => {
  const text = JSON.stringify({ offers, work, expertise })
  it('never links out to or names a product domain', () => {
    expect(text).not.toMatch(/https?:\/\//)
    expect(text).not.toMatch(/\.(com|io|gg|app)/i)
  })
  it('keeps prices null until confirmed', () => {
    for (const o of offers) expect(o.price).toBeNull()
  })
})
