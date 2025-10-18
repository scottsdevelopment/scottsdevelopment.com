'use client'

import { useState } from 'react'
import { colors } from '../../config/colors.dark'
import LogoIcon from './LogoIcon'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className={`sticky top-0 z-40 ${colors.bg.primary80} backdrop-blur-sm border-b ${colors.border.primary}`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <LogoIcon />
          <span className={`font-semibold tracking-tight ${colors.section.heading}`}>Scott's Development</span>
        </a>

        <nav className={`hidden md:flex items-center gap-6 ${colors.text.body}`}>
          <a href="#services" className={`${colors.link.default} ${colors.link.hover}`}>Services</a>
          <a href="#work" className={`${colors.link.default} ${colors.link.hover}`}>Work</a>
          <a href="#process" className={`${colors.link.default} ${colors.link.hover}`}>Process</a>
          <a href="#pricing" className={`${colors.link.default} ${colors.link.hover}`}>Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className={`hidden md:inline-block rounded-md ${colors.button.primary} px-4 py-2 text-sm font-medium shadow`}>
            Contact Us
          </a>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded ${colors.bg.hover}`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${colors.text.body}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${colors.text.body}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className={`px-6 py-4 ${colors.border.primary}`}>
          <nav className={`flex flex-col space-y-4 ${colors.text.body}`}>
            <a 
              href="#services" 
              className={`py-2 ${colors.link.default} ${colors.link.hover} transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#work" 
              className={`py-2 ${colors.link.default} ${colors.link.hover} transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </a>
            <a 
              href="#process" 
              className={`py-2 ${colors.link.default} ${colors.link.hover} transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Process
            </a>
            <a 
              href="#pricing" 
              className={`py-2 ${colors.link.default} ${colors.link.hover} transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className={`mt-4 inline-block rounded-md ${colors.button.primary} px-4 py-2 text-sm font-medium shadow text-center`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
