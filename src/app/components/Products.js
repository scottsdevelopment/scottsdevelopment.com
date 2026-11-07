import { colors } from '../../config/colors'
import Card from './ui/Card'
import Section from './Section'
import { ownProducts } from '../../content/site'

/** Own products, described by capability only. No names or links (owner rule). */
export default function Products({ id = 'products', tone = 'white' }) {
  return (
    <Section
      id={id}
      tone={tone}
      eyebrow="Products we run"
      title="We also build and run our own."
      lede="Three live products, each a complete business: data collection, backend, front end, hosting, analytics. Their audiences are kept separate from this one, so they are described rather than named."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ownProducts.map((p) => (
          <Card key={p.title} className="h-full flex flex-col">
            <h3 className={`text-xl font-bold ${colors.text.heading} mb-3 leading-snug`}>{p.title}</h3>
            <p className={`${colors.text.secondary} leading-relaxed flex-grow`}>{p.summary}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {p.stack.map((s) => (
                <span key={s} className="px-3 py-1 bg-white border border-violet-100 text-violet-700 rounded-full text-xs font-semibold">
                  {s}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
