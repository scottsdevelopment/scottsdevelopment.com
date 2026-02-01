'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { colors } from '../../config/colors'
import LogoIcon from './LogoIcon'

export default function Footer() {
  useEffect(() => {
    const yearElement = document.getElementById('year')
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear()
    }
  }, [])

  return (
    <footer className={`border-t ${colors.border.onDark} ${colors.bg.footer}`}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Branding Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <LogoIcon />
              <div>
                <div className={`font-semibold ${colors.text.onDark}`}>Scott's Development</div>
                <div className={`${colors.text.onDarkSecondary} text-xs`}>Detroit • Michigan • Remote</div>
              </div>
            </Link>
            <p className={`text-sm ${colors.text.onDarkSecondary} leading-relaxed mb-6`}>
              Senior software engineering and architectural consulting for businesses that need to scale.
            </p>
            <p className={`text-xs ${colors.text.onDarkSecondary} leading-relaxed opacity-80`}>
              Providing Fractional CTO services to the Greater Metro Detroit area, including Ferndale, Royal Oak, and Detroit. Remote-first, results-driven.
            </p>

            <div className={`mt-6 space-y-3 text-sm ${colors.text.onDarkSecondary}`}>
              <div>
                <a href="mailto:scott@scottsdevelopment.com" className={`hover:text-cyan-400 transition-colors`}>
                  scott@scottsdevelopment.com
                </a>
              </div>
              <div>
                <a href="https://calendly.com/scottsdevelopment" target="_blank" rel="noopener noreferrer" className={`hover:text-cyan-400 transition-colors`}>
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Service Section */}
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wider ${colors.text.onDark} mb-4`}>Services</h4>
            <ul className={`space-y-3 text-sm ${colors.text.onDarkSecondary}`}>
              <li><Link href="/services" className={`${colors.link.hover} transition-colors`}>Custom Web Solutions</Link></li>
              <li><Link href="/services" className={`${colors.link.hover} transition-colors`}>Legacy Modernization</Link></li>
              <li><Link href="/services" className={`${colors.link.hover} transition-colors`}>Fractional CTO</Link></li>
              <li><Link href="/services" className={`${colors.link.hover} transition-colors`}>Compliance & Security</Link></li>
              <li><Link href="/services" className={`${colors.link.hover} transition-colors`}>Team Augmentation</Link></li>
              <li><Link href="/services" className={`${colors.link.hover} transition-colors`}>eCommerce Intelligence</Link></li>
            </ul>
          </div>

          {/* Industries Section */}
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wider ${colors.text.onDark} mb-4`}>Industries</h4>
            <ul className={`space-y-3 text-sm ${colors.text.onDarkSecondary}`}>
              <li><Link href="/work" className={`${colors.link.hover} transition-colors`}>Healthcare</Link></li>
              <li><Link href="/work" className={`${colors.link.hover} transition-colors`}>Government</Link></li>
              <li><Link href="/work" className={`${colors.link.hover} transition-colors`}>eCommerce & Retail</Link></li>
              <li><Link href="/work" className={`${colors.link.hover} transition-colors`}>Supply Chain & Logistics</Link></li>
              <li><Link href="/work" className={`${colors.link.hover} transition-colors`}>SaaS & Startups</Link></li>
            </ul>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wider ${colors.text.onDark} mb-4`}>Navigation</h4>
            <ul className={`space-y-3 text-sm ${colors.text.onDarkSecondary}`}>
              <li><Link href="/" className={`${colors.link.hover} transition-colors`}>Home</Link></li>
              <li><Link href="/work" className={`${colors.link.hover} transition-colors`}>Our Work</Link></li>
              <li><Link href="/blog" className={`${colors.link.hover} transition-colors`}>Blog</Link></li>
              <li><Link href="/faq" className={`${colors.link.hover} transition-colors`}>FAQ</Link></li>
              <li><Link href="/services" className={`${colors.link.hover} transition-colors`}>Our Services</Link></li>
              <li><Link href="/contact" className={`${colors.link.hover} transition-colors`}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`border-t ${colors.border.onDark} py-8`}>
        <div className={`mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs ${colors.text.onDarkSecondary}`}>
          <div className="flex items-center gap-1">
            <span>&copy; <span id="year"></span> Scott's Development</span>
          </div>
          <div className="flex gap-6">
            <Link href="/contact" className={`${colors.link.hover} transition-colors`}>
              Web Development Greater Metro Detroit
            </Link>
          </div>
        </div>
      </div>
    </footer >
  )
}
