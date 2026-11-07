import Link from 'next/link'
import { offers } from '../../content/site'
import Section from './Section'

/** The three offers. Prices render only when set in src/content/site.js. */
export default function CarePlan() {
  return (
    <Section
      id="services"
      title="Three ways to work with me"
      lede="Small, fixed and clear. No retainers you don't understand."
    >
      <div className="grid gap-px border border-rule bg-rule sm:grid-cols-3">
        {offers.map((o) => (
          <div key={o.slug} id={o.slug} className="bg-white p-6">
            <h3 className="font-heading text-xl font-semibold tracking-tight text-ink">{o.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{o.who}</p>
            <ul className="ledger mt-4 border-t border-rule text-sm text-ink-soft">
              {o.includes.map((item) => (
                <li key={item} className="py-2">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-heading text-lg font-semibold text-ink tnum">
              {o.price ?? 'Ask for pricing'}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-[15px]">
        <Link href="/contact" className="link">
          Tell me what you need
        </Link>
      </p>
    </Section>
  )
}
