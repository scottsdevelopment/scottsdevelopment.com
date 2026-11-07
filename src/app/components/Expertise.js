import { expertise } from '../../content/site'
import Section from './Section'

export default function Expertise({ id = 'expertise' }) {
  return (
    <Section
      id={id}
      title="What I'm good at"
      lede="Each area lists the work that shows it, so you can check the claim instead of taking my word for it."
      tone="white"
    >
      <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {expertise.map((e) => (
          <div key={e.title}>
            <dt className="font-heading text-xl font-semibold tracking-tight text-ink">{e.title}</dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-ink-soft">{e.summary}</dd>
            <dd className="mt-3 text-sm text-ink-mute">
              <span className="text-ink-soft">Shown in:</span> {e.evidence.join(', ')}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
