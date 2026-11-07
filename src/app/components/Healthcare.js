import { healthcare, hasHealthcareContent } from '../../content/healthcare'
import Section from './Section'

/**
 * Renders nothing until src/content/healthcare.js has at least one entry.
 */
export default function Healthcare({ content = healthcare }) {
  if (!hasHealthcareContent(content)) return null

  return (
    <Section id="healthcare" title={content.heading} lede={content.intro} tone="white">
      <ul className="ledger -mt-6">
        {content.entries.map((e, i) => (
          <li key={`${e.title}-${i}`} className="py-7 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-heading text-xl font-semibold tracking-tight text-ink">{e.title}</h3>
              {e.period && <span className="text-sm text-ink-mute tnum">{e.period}</span>}
            </div>
            {(e.organisation || e.role) && (
              <p className="mt-1 text-[15px] text-ink-soft">
                {[e.role, e.organisation].filter(Boolean).join(', ')}
              </p>
            )}
            {e.summary && (
              <p className="mt-3 max-w-prose text-[16px] leading-relaxed text-ink-soft">{e.summary}</p>
            )}
            {e.stack?.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-mute" aria-label={`${e.title} stack`}>
                {e.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            )}
            {e.links?.length > 0 && (
              <p className="mt-3 flex flex-wrap gap-x-5 text-[15px]">
                {e.links.map((l) => (
                  <a key={l.url} className="link" href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                ))}
              </p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}
