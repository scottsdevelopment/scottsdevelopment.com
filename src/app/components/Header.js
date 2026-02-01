'use client'

import { useState } from 'react'
import Link from 'next/link'
import { colors } from '../../config/colors'
import LogoIcon from './LogoIcon'
import Button from './ui/Button'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className={`sticky top-0 z-40 ${colors.bg.header} backdrop-blur-md border-b ${colors.border.inverse}`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <LogoIcon />
          <span className={`font-semibold tracking-tight ${colors.text.inverse}`}>Scott's Development</span>
        </Link>

        <nav className={`hidden md:flex items-center gap-8 ${colors.text.inverse}`}>
          <Link href="/services" className={`${colors.link.inverse} ${colors.link.inverseHover} font-medium transition-colors`}>Our Services</Link>
          <Link href="/work" className={`${colors.link.inverse} ${colors.link.inverseHover} font-medium transition-colors`}>Our Work</Link>
          <Link href="/blog" className={`${colors.link.inverse} ${colors.link.inverseHover} font-medium transition-colors`}>Blog</Link>
          <Link href="/faq" className={`${colors.link.inverse} ${colors.link.inverseHover} font-medium transition-colors`}>FAQ</Link>
          <Link href="/contact" className={`${colors.link.inverse} ${colors.link.inverseHover} font-medium transition-colors`}>Contact Us</Link>
        </nav>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded hover:bg-gray-800`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${colors.text.inverse}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${colors.text.inverse}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen
        ? 'max-h-96 opacity-100'
        : 'max-h-0 opacity-0'
        }`}>
        <div className={`px-6 py-4 ${colors.bg.header} border-b ${colors.border.inverse}`}>
          <nav className={`flex flex-col space-y-4 ${colors.text.inverse}`}>
            <Link
              href="/services"
              className={`py-2 ${colors.link.inverse} ${colors.link.inverseHover} transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Services
            </Link>
            <Link
              href="/work"
              className={`py-2 ${colors.link.inverse} ${colors.link.inverseHover} transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Work
            </Link>
            <Link
              href="/blog"
              className={`py-2 ${colors.link.inverse} ${colors.link.inverseHover} transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className={`py-2 ${colors.link.inverse} ${colors.link.inverseHover} transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className={`mt-4 w-full text-center`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button variant="primary" className="w-full justify-center">
                Connect with us
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
