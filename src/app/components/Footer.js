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
    <footer className={`border-t ${colors.border.inverse} ${colors.bg.footer}`}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Branding Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <LogoIcon />
              <div>
                <div className={`font-semibold ${colors.text.inverse}`}>Scott's Development</div>
                <div className={`${colors.text.inverseSecondary} text-xs`}>Detroit • Michigan • Remote</div>
              </div>
            </Link>
            <p className={`mt-4 ${colors.text.inverseSecondary} text-sm leading-relaxed`}>
              Staff Engineering Leadership & Fractional CTO Services.
            </p>

            <div className={`mt-6 space-y-3 text-sm ${colors.text.inverseSecondary}`}>
              <div>
                <a href="mailto:scott@scottsdevelopment.com" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>
                  scott@scottsdevelopment.com
                </a>
              </div>
              <div>
                <a href="https://calendly.com/scottsdevelopment" target="_blank" rel="noopener noreferrer" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Service Section */}
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wider ${colors.text.inverse} mb-4`}>Services</h4>
            <ul className={`space-y-3 text-sm ${colors.text.inverseSecondary}`}>
              <li><Link href="/services" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>Custom Web Solutions</Link></li>
              <li><Link href="/services" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>Legacy Modernization</Link></li>
              <li><Link href="/services" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>Fractional CTO</Link></li>
              <li><Link href="/services" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>Compliance & Security</Link></li>
              <li><Link href="/services" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>Team Augmentation</Link></li>
              <li><Link href="/services" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>eCommerce Intelligence</Link></li>
            </ul>
          </div>

          {/* Industries Section */}
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wider ${colors.text.inverse} mb-4`}>Industries</h4>
            <ul className={`space-y-3 text-sm ${colors.text.inverseSecondary}`}>
              <li><Link href="/work" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>Healthcare</Link></li>
              <li><Link href="/work" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>Government</Link></li>
              <li><Link href="/work" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>eCommerce & Retail</Link></li>
              <li><Link href="/work" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>Supply Chain & Logistics</Link></li>
              <li><Link href="/work" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>SaaS & Startups</Link></li>
            </ul>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wider ${colors.text.inverse} mb-4`}>Navigation</h4>
            <ul className={`space-y-3 text-sm ${colors.text.inverseSecondary}`}>
              <li><Link href="/" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>Home</Link></li>
              <li><Link href="/work" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>Our Work</Link></li>
              <li><Link href="/services" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>Our Services</Link></li>
              <li><Link href="/locations/detroit" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>Our Location</Link></li>
              <li><Link href="/contact" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`border-t ${colors.border.inverse} py-8`}>
        <div className={`mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs ${colors.text.inverseSecondary}`}>
          <div className="flex items-center gap-1">
            <span>&copy; <span id="year"></span> Scott's Development</span>
          </div>
          <div className="flex gap-6">
            <Link href="/locations/detroit" className={`${colors.link.inverse} ${colors.link.inverseHover}`}>
              Web Development Greater Metro Detroit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
