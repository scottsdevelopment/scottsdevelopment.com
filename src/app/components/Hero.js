import Link from 'next/link'
import { offers } from '../../content/site'

export default function Hero() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-site px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-24">
        <h1 className="font-heading text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl md:max-w-[14ch]">
          Websites and small software for local businesses, built to last and cheap to run.
        </h1>

        <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-12">
          <p className="max-w-prose text-lg leading-relaxed text-ink-soft md:col-span-5 md:text-xl">
            I'm Scott, a full-stack engineer in Ferndale, Michigan. Alongside my day job I build sites
            and systems for small businesses, host them on AWS for very little, and send a monthly note
            on how they're doing.
          </p>

          <div className="md:col-span-7 md:col-start-6">
            <p className="text-sm text-ink-mute">What I do</p>
            <ul className="ledger mt-2 border-y border-rule">
              {offers.map((o) => (
                <li key={o.slug} className="grid gap-1 py-3.5 sm:grid-cols-[13rem_1fr] sm:gap-6">
                  <Link href={`/services#${o.slug}`} className="font-heading text-lg font-semibold text-ink hover:text-moss">
                    {o.title}
                  </Link>
                  <span className="text-[15px] leading-snug text-ink-soft">{o.who}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-14">
          <Link
            href="/contact"
            className="rounded-full bg-ink px-6 py-3 text-base font-medium text-paper transition-colors hover:bg-moss-deep"
          >
            Tell me what you need
          </Link>
          <Link href="/work" className="link text-base">
            See the work
          </Link>
        </div>
      </div>
    </section>
  )
}
