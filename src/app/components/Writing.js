import Link from 'next/link'
import { posts, formatDate } from '../../content/site'
import Section from './Section'

export default function Writing() {
  return (
    <Section id="writing" title="Writing" lede="Occasional notes on building and running software." tone="white">
      <ul className="ledger -mt-6 border-b border-rule">
        {posts.map((p) => (
          <li key={p.slug} className="py-6 first:pt-0">
            <div className="flex flex-wrap items-baseline gap-x-4 text-sm text-ink-mute tnum">
              <time dateTime={p.date}>{formatDate(p.date)}</time>
              <span>{p.readTime} read</span>
            </div>
            <h3 className="mt-1 font-heading text-xl font-semibold tracking-tight text-ink">
              <Link href={`/blog/${p.slug}`} className="hover:text-moss">
                {p.title}
              </Link>
            </h3>
            <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-ink-soft">{p.summary}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[15px]">
        <Link className="link" href="/blog">
          All posts
        </Link>
      </p>
    </Section>
  )
}
