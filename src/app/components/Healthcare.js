import { HeartPulse } from 'lucide-react'
import { colors } from '../../config/colors'
import Card from './ui/Card'
import Section from './Section'
import { healthcare, hasHealthcareContent } from '../../content/healthcare'

/** Renders nothing if src/content/healthcare.js has no entries. */
export default function Healthcare({ content = healthcare, tone = 'white', id = 'healthcare' }) {
  if (!hasHealthcareContent(content)) return null

  return (
    <Section id={id} tone={tone} eyebrow="Healthcare" title={content.heading} lede={content.intro}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {content.entries.map((e, i) => (
          <Card key={`${e.title}-${i}`} className="h-full flex flex-col">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className={`rounded-lg w-10 h-10 flex items-center justify-center ${colors.bg.primary} flex-shrink-0`}>
                  <HeartPulse className="w-5 h-5 text-rose-500" />
                </div>
                <h3 className={`text-xl font-bold ${colors.text.heading} leading-snug`}>{e.title}</h3>
              </div>
              {e.period && (
                <span className={`text-sm font-semibold ${colors.text.accent} whitespace-nowrap`}>{e.period}</span>
              )}
            </div>
            {e.role && <p className={`text-sm font-medium ${colors.text.muted} mb-2`}>{e.role}</p>}
            <p className={`${colors.text.secondary} leading-relaxed flex-grow`}>{e.summary}</p>
            {e.stack?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {e.stack.map((s) => (
                  <span key={s} className="px-3 py-1 bg-white border border-rose-100 text-rose-700 rounded-full text-xs font-semibold">
                    {s}
                  </span>
                ))}
              </div>
            )}
            {e.links?.length > 0 && (
              <p className="mt-4 flex flex-wrap gap-x-5 text-sm">
                {e.links.map((l) => (
                  <a key={l.url} className="font-semibold text-cyan-600 hover:text-cyan-700" href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label} ↗
                  </a>
                ))}
              </p>
            )}
          </Card>
        ))}
      </div>
    </Section>
  )
}
