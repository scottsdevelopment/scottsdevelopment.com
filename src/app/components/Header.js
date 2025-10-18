'use client'

import { useState } from 'react'
import { colors } from '../../config/colors.dark'
import LogoIcon from './LogoIcon'

export default function Header() {
  const [dark, setDark] = useState(true)

  return (
    <header className={`sticky top-0 z-40 ${colors.bg.primary}/80 backdrop-blur-sm border-b ${colors.border.primary}`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <LogoIcon />
          <span className={`font-semibold tracking-tight ${colors.section.heading}`}>Scott's Development</span>
        </a>

        <nav className={`hidden md:flex items-center gap-6 ${colors.text.body}`}>
          <a href="#services" className={`hover:${colors.text.heading}`}>Services</a>
          <a href="#work" className={`hover:${colors.text.heading}`}>Work</a>
          <a href="#process" className={`hover:${colors.text.heading}`}>Process</a>
          <a href="#pricing" className={`hover:${colors.text.heading}`}>Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className={`hidden md:inline-block rounded-md ${colors.button.primary} px-4 py-2 text-sm font-medium shadow`}>
            Contact Us
          </a>

          <button className={`md:hidden p-2 rounded hover:${colors.bg.hover}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${colors.text.body}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
