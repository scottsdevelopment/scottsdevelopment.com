'use client'

import { useState } from 'react'
import Link from 'next/link'
import LogoIcon from './LogoIcon'
import { hasHealthcareContent } from '../../content/healthcare'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  ...(hasHealthcareContent() ? [{ href: '/#healthcare', label: 'Healthcare' }] : []),
  { href: '/blog', label: 'Writing' },
  { href: '/faq', label: 'FAQ' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoIcon size="w-8 h-8" />
          <span className="font-heading text-lg font-semibold tracking-tight text-ink">
            Scott's Development
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-ink px-4 py-1.5 text-[15px] font-medium text-paper transition-colors hover:bg-moss-deep"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded p-2 text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div id="mobile-nav" hidden={!open} className="border-t border-rule bg-paper md:hidden">
        <nav aria-label="Primary mobile" className="ledger mx-auto flex max-w-site flex-col px-5 sm:px-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="py-3.5 text-base text-ink"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="py-3.5 text-base font-medium text-moss" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
