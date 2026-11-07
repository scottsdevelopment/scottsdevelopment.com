import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { colors } from '../../config/colors'
import Section from './Section'
import Timeline from './Timeline'
import { story } from '../../content/career'

/** Home-page teaser for /about: the first paragraphs plus a compact timeline. */
export default function Background({ tone = 'primary' }) {
  return (
    <Section id="background" tone={tone} eyebrow="Background" title="Fifteen-plus years of hands-on engineering.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          {story.slice(0, 3).map((p) => (
            <p key={p.slice(0, 24)} className={`${colors.text.secondary} text-lg leading-relaxed mb-5`}>
              {p}
            </p>
          ))}
          <Link href="/about" className="inline-flex items-center gap-2 font-bold text-cyan-600 hover:text-cyan-700">
            The full story, skills and resume <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className={`rounded-2xl ${colors.bg.secondary} border ${colors.border.subtle} p-8 shadow-sm`}>
          <Timeline compact />
          <p className={`mt-6 text-sm ${colors.text.muted}`}>Recent roles. The full timeline runs back to 2008.</p>
        </div>
      </div>
    </Section>
  )
}
