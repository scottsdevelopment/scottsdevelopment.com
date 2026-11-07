import { colors } from '../../config/colors'
import Card from './ui/Card'
import Section from './Section'
import { process, positioning } from '../../content/site'

/** How we work: the five steps, in the owner's words. */
export default function Process({ id = 'how-we-work', tone = 'white' }) {
  return (
    <Section
      id={id}
      tone={tone}
      eyebrow="How we work"
      title="Start simple. Grow only as far as you want."
      lede={positioning.long}
    >
      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {process.map((p) => (
          <li key={p.step} className="h-full">
            <Card className="h-full flex flex-col">
              <div className="text-sm font-bold text-cyan-600 tracking-wider mb-3">{p.step}</div>
              <h3 className={`text-lg font-bold ${colors.text.heading} mb-3 leading-snug`}>{p.title}</h3>
              <p className={`${colors.text.secondary} text-[15px] leading-relaxed`}>{p.body}</p>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  )
}
