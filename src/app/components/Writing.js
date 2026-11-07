import Link from 'next/link'
import { colors } from '../../config/colors'
import Card from './ui/Card'
import Section from './Section'
import { posts, formatDate } from '../../content/site'

export default function Writing({ tone = 'white' }) {
  return (
    <Section id="writing" tone={tone} eyebrow="Blog" title="Insights & Architecture." lede="Thoughts on building scalable systems, leading teams, and where software is going.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block h-full group">
            <Card className="h-full flex flex-col hover:border-cyan-200">
              <div className={`mb-4 flex items-center justify-between text-sm ${colors.text.muted}`}>
                <time dateTime={p.date}>{formatDate(p.date)}</time>
                <span>{p.readTime} read</span>
              </div>
              <h3 className={`text-2xl font-bold ${colors.text.heading} mb-4 group-hover:text-cyan-600 transition-colors`}>{p.title}</h3>
              <p className={`${colors.text.secondary} mb-6 flex-grow leading-relaxed`}>{p.summary}</p>
              <div className="mt-auto font-medium text-cyan-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                Read Article <span className="text-lg">→</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  )
}
