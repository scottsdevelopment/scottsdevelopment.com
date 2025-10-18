'use client'

import { useEffect } from 'react'
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
    <footer id="contact" className={`mt-12 border-t ${colors.border.primary} ${colors.bg.secondary}/40`}>
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <LogoIcon />
            <div>
              <div className={`font-semibold ${colors.text.heading}`}>Scott's Development</div>
              <div className={`${colors.text.secondary} text-sm`}>Detroit • Michigan • Remote</div>
            </div>
          </div>

          <p className={`mt-4 ${colors.text.secondary} text-sm max-w-md`}>
            Modern web applications designed for growth, resilience, and lasting impact.
          </p>
        </div>

        <div>
          <h4 className={`text-sm font-medium ${colors.text.heading}`}>Services</h4>
          <ul className={`mt-3 ${colors.text.secondary} text-sm space-y-2`}>
            <li><a href="#services" className={`hover:${colors.text.heading}`}>Enterprise Solutions</a></li>
            <li><a href="#services" className={`hover:${colors.text.heading}`}>Legacy System Modernization</a></li>
            <li><a href="#services" className={`hover:${colors.text.heading}`}>App Development & Compliance</a></li>
            <li><a href="#services" className={`hover:${colors.text.heading}`}>AI & Automation Integration</a></li>
          </ul>
        </div>

        <div>
          <h4 className={`text-sm font-medium ${colors.text.heading}`}>Contact</h4>
          <div className={`mt-3 ${colors.text.secondary} text-sm space-y-2`}>
            <div>
              <a 
                href="mailto:scott@scottsdevelopment.com" 
                className={`hover:${colors.text.heading} underline`}
              >
                scott@scottsdevelopment.com
              </a>
            </div>
            <div>
              <a 
                href="tel:+1***REMOVED***" 
                className={`hover:${colors.text.heading} underline`}
              >
                ***REMOVED***
              </a>
            </div>
            <div>Detroit, MI</div>
          </div>
        </div>
      </div>

      <div className={`border-t ${colors.border.primary}/60 py-4 text-center ${colors.text.secondary} text-xs`}>
        &copy; <span id="year"></span> Scott's Development
      </div>
    </footer>
  )
}
