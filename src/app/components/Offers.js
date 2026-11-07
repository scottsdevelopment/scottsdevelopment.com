import Link from 'next/link'
import { Globe, Wrench, LifeBuoy, Check } from 'lucide-react'
import { colors } from '../../config/colors'
import Card from './ui/Card'
import Section from './Section'
import { offers, pricingModel } from '../../content/site'

const icons = {
  website: { Icon: Globe, gradient: 'from-cyan-500 to-blue-500' },
  engagement: { Icon: Wrench, gradient: 'from-violet-500 to-purple-500' },
  care: { Icon: LifeBuoy, gradient: 'from-emerald-500 to-teal-500' },
}

/** Price cell. Renders the confirmed price, or a clearly marked slot. */
export function PriceSlot({ offer }) {
  if (offer.price) {
    return (
      <div>
        <div className={`text-2xl font-bold ${colors.text.heading}`}>{offer.price}</div>
        <div className={`text-sm ${colors.text.muted}`}>{offer.priceLabel}</div>
      </div>
    )
  }
  return (
    <div className="rounded-lg border-2 border-dashed border-amber-400 bg-amber-50 px-3 py-2 text-sm text-amber-800">
      <span className="font-bold">Price slot:</span> {offer.priceLabel}. Owner to confirm.
    </div>
  )
}

export default function Offers({ id = 'offers', tone = 'primary', showPricingModel = true }) {
  return (
    <Section
      id={id}
      tone={tone}
      eyebrow="Three ways to work with us"
      title="Small, fixed and clear."
      lede="A first website, an engineer when you need one, and a plan that keeps it all running. Pick one; move between them when your business does."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((o) => {
          const { Icon, gradient } = icons[o.slug]
          return (
            <Card key={o.slug} id={o.slug} className="h-full flex flex-col relative overflow-hidden group scroll-mt-24">
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className={`relative z-10 rounded-xl w-14 h-14 flex items-center justify-center bg-gradient-to-br ${gradient} mb-6 shadow-md`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className={`relative z-10 text-xl font-bold ${colors.text.heading} mb-3`}>{o.title}</h3>
              <p className={`relative z-10 ${colors.text.secondary} leading-relaxed mb-6`}>{o.who}</p>
              <ul className="relative z-10 space-y-2 mb-6 flex-grow">
                {o.includes.map((item) => (
                  <li key={item} className={`flex gap-2 text-[15px] ${colors.text.body}`}>
                    <Check className="w-4 h-4 mt-1 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className={`relative z-10 pt-6 border-t ${colors.border.subtle}`}>
                <PriceSlot offer={o} />
              </div>
            </Card>
          )
        })}
      </div>

      {showPricingModel && (
        <div className={`mt-12 max-w-4xl mx-auto rounded-2xl ${colors.bg.secondary} border ${colors.border.subtle} p-8 md:p-10 shadow-sm`}>
          <h3 className={`text-2xl font-bold ${colors.text.heading} mb-4`}>{pricingModel.heading}</h3>
          <p className={`${colors.text.secondary} text-lg leading-relaxed`}>{pricingModel.body}</p>
          <p className="mt-6">
            <Link href="/contact" className="inline-flex items-center gap-2 font-bold text-cyan-600 hover:text-cyan-700">
              Tell us what you need <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      )}
    </Section>
  )
}
