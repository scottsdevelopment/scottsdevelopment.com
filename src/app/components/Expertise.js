import { Bot, Layout, Database, Cloud, LineChart, ShoppingCart } from 'lucide-react'
import { colors } from '../../config/colors'
import Card from './ui/Card'
import Section from './Section'
import { expertise } from '../../content/site'

const icons = [
  { Icon: Bot, color: 'text-cyan-600' },
  { Icon: Layout, color: 'text-violet-600' },
  { Icon: Database, color: 'text-emerald-600' },
  { Icon: Cloud, color: 'text-amber-600' },
  { Icon: LineChart, color: 'text-blue-600' },
  { Icon: ShoppingCart, color: 'text-rose-600' },
]

export default function Expertise({ id = 'expertise', tone = 'primary' }) {
  return (
    <Section
      id={id}
      tone={tone}
      eyebrow="Expertise"
      title="What we're good at."
      lede="Each area lists the work that shows it, so you can check the claim instead of taking our word for it."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertise.map((e, i) => {
          const { Icon, color } = icons[i % icons.length]
          return (
            <Card key={e.title} className="h-full flex flex-col">
              <div className={`rounded-xl w-14 h-14 flex items-center justify-center ${colors.bg.primary} mb-6`}>
                <Icon className={`w-7 h-7 ${color}`} />
              </div>
              <h3 className={`text-xl font-bold ${colors.text.heading} mb-3`}>{e.title}</h3>
              <p className={`${colors.text.secondary} leading-relaxed flex-grow`}>{e.summary}</p>
              <p className={`mt-4 text-sm ${colors.text.muted}`}>
                <span className="font-semibold">Shown in:</span> {e.evidence.join(', ')}
              </p>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
