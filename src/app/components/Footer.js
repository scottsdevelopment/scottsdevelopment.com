import Link from 'next/link'
import LogoIcon from './LogoIcon'
import { owner, offers } from '../../content/site'
import { hasHealthcareContent } from '../../content/healthcare'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-rule bg-paper-deep">
      <div className="mx-auto max-w-site px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <LogoIcon size="w-8 h-8" />
              <span className="font-heading text-lg font-semibold tracking-tight text-ink">
                Scott's Development
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-soft">
              Websites, small software and cheap-to-run hosting for local businesses, built by one
              engineer in {owner.location}.
            </p>
            <div className="mt-5 flex flex-col gap-1.5 text-[15px]">
              <a className="link" href={`mailto:${owner.email}`}>
                {owner.email}
              </a>
              <a className="link" href={owner.github} rel="noopener noreferrer" target="_blank">
                github.com/scottsdevelopment
              </a>
              <a className="link" href={owner.calendly} rel="noopener noreferrer" target="_blank">
                Book a 30-minute call
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h2 className="font-heading text-base font-semibold text-ink">Services</h2>
            <ul className="mt-3 space-y-2 text-[15px]">
              {offers.map((o) => (
                <li key={o.slug}>
                  <Link className="text-ink-soft hover:text-ink" href={`/services#${o.slug}`}>
                    {o.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-heading text-base font-semibold text-ink">Site</h2>
            <ul className="mt-3 space-y-2 text-[15px]">
              <li><Link className="text-ink-soft hover:text-ink" href="/work">Work</Link></li>
              {hasHealthcareContent() && (
                <li><Link className="text-ink-soft hover:text-ink" href="/#healthcare">Healthcare</Link></li>
              )}
              <li><Link className="text-ink-soft hover:text-ink" href="/blog">Writing</Link></li>
              <li><Link className="text-ink-soft hover:text-ink" href="/faq">FAQ</Link></li>
              <li><Link className="text-ink-soft hover:text-ink" href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-rule pt-6 text-sm text-ink-mute sm:flex-row sm:justify-between">
          <span>&copy; {year} {owner.business} LLC</span>
          <span>{owner.location}. Remote-friendly.</span>
        </div>
      </div>
    </footer>
  )
}
