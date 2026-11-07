/**
 * HEALTHCARE SECTION CONTENT (owner to fill in)
 * ------------------------------------------------
 * This file drives the "Healthcare" section on the home page and the link in
 * the navigation. The section is hidden automatically while `entries` is
 * empty, so the site ships fine before this is written.
 *
 * Rules of thumb while filling it in:
 *  - Only name employers, clients, systems or outcomes you are allowed to share.
 *  - Keep each `summary` to two or three sentences; this is a portfolio, not a resume.
 *  - `links` are optional. Public repos or live sites only.
 *  - Do not claim certifications or compliance status (HIPAA, SOC 2, ...)
 *    here unless you hold the paperwork and want it on the public site.
 */

export const healthcare = {
  // Short section heading. Shown when entries exist.
  heading: 'Work in healthcare',

  // One or two neutral sentences that frame the section. Edit freely.
  intro:
    'Some of my background is in healthcare software: systems that move patient and claims data between organisations, and tools that help people read it.',

  // One entry per role, project or system. Example shape:
  // {
  //   title: 'Claims ingestion pipeline',          // what it was
  //   organisation: '',                             // employer or client, if shareable
  //   period: '',                                   // e.g. '2021 – 2023'
  //   role: '',                                     // e.g. 'Lead engineer'
  //   summary: '',                                  // 2–3 sentences: problem, what you built, result
  //   stack: [],                                    // e.g. ['C#/.NET', 'SQL Server']
  //   links: [{ label: '', url: '' }],              // optional
  // },
  entries: [],
}

/** True when there is something worth rendering. */
export function hasHealthcareContent(content = healthcare) {
  return Array.isArray(content.entries) && content.entries.length > 0
}
