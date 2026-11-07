import { work } from '../../content/site'
import Section from './Section'

/**
 * Own products and client builds, described by what they do. No names or
 * links on purpose; see src/content/site.js.
 */
export default function Products({ id = 'work' }) {
  return (
    <Section
      id={id}
      title="Work"
      lede="My own products and client builds, described by what they do rather than by name. I keep those audiences separate from this one."
    >
      <ul className="ledger -mt-6">
        {work.map((w) => (
          <li key={w.title} className="py-8 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-heading text-2xl font-semibold tracking-tight text-ink">{w.title}</h3>
              <span className="text-sm text-ink-mute">{w.kind}</span>
            </div>
            <p className="mt-3 max-w-prose text-[16px] leading-relaxed text-ink-soft">{w.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-mute" aria-label={`${w.title} stack`}>
              {w.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
