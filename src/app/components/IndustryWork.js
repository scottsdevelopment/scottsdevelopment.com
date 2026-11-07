import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { colors } from '../../config/colors'
import Card from './ui/Card'
import Section from './Section'
import { industryWork } from '../../content/site'

/**
 * Anonymous industry examples. Names and links to the businesses are left
 * out on purpose (owner rule); the one `href` points at a public write-up.
 */
export default function IndustryWork({ id = 'industries', tone = 'primary', limit, title, lede }) {
  const items = limit ? industryWork.slice(0, limit) : industryWork
  return (
    <Section
      id={id}
      tone={tone}
      eyebrow="Who we work with"
      title={title || 'Marketing and development for companies like yours.'}
      lede={
        lede ||
        'Cleaning, moving, lawn care and snow removal, repair services, marketing firms. The names are left out; the work is real.'
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((w) => (
          <Card key={w.title} className="h-full flex flex-col">
            <div className={`text-xs font-bold uppercase tracking-wider ${colors.text.accent} mb-3`}>{w.industry}</div>
            <h3 className={`text-xl font-bold ${colors.text.heading} mb-3 leading-snug`}>{w.title}</h3>
            <p className={`${colors.text.secondary} leading-relaxed flex-grow`}>{w.summary}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {w.stack.map((s) => (
                <span key={s} className="px-3 py-1 bg-white border border-cyan-100 text-cyan-700 rounded-full text-xs font-semibold">
                  {s}
                </span>
              ))}
            </div>
            {w.href && (
              <Link href={w.href} className="mt-5 inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700">
                {w.hrefLabel || 'Read more'} <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </Card>
        ))}
      </div>
      {limit && limit < industryWork.length && (
        <p className="text-center mt-10">
          <Link href="/work" className="inline-flex items-center gap-2 font-bold text-cyan-600 hover:text-cyan-700">
            See all the work <ArrowRight className="w-4 h-4" />
          </Link>
        </p>
      )}
    </Section>
  )
}
