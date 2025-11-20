'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { colors } from '../../config/colors'
import Button from './ui/Button'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className={`absolute inset-0 opacity-30 ${colors.bg.gradient} blur-3xl`} />

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >


          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight ${colors.text.heading} mb-6`}>
            Staff Engineering <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600">
              Leadership.
            </span>
          </h1>

          <p className={`text-xl sm:text-2xl ${colors.text.body} max-w-2xl leading-relaxed mb-8`}>
            We specialize in modernizing legacy systems, scaling enterprise platforms, and mentoring high-performance teams.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button variant="primary" className="h-14 px-8 text-lg shadow-lg shadow-cyan-500/20">
                Book a Discovery Call
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="outline" className="h-14 px-8 text-lg bg-white/80 backdrop-blur-sm">
                View Experience
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Enterprise Scale</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Legacy Modernization</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>Team Leadership</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-2xl blur opacity-20"></div>
            <div className={`relative rounded-2xl ${colors.bg.secondary} shadow-2xl border border-gray-100 overflow-hidden`}>
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50/80 backdrop-blur-sm">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="ml-2 text-xs text-gray-400 font-mono">staff-engineer-portfolio — -zsh — 80x24</div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="flex gap-2">
                </div>
                <div className={`mt-2 ${colors.text.secondary}`}>
                  <span className="text-amber-500">a1b2c3d</span> feat: Scale VA benefits platform to 100k+ users
                  <br /><span className="text-amber-500">e5f6g7h</span> fix: Zero-downtime migration for healthcare SaaS
                  <br /><span className="text-amber-500">i9j0k1l</span> chore: Mentor junior devs to senior level
                </div>

                <div className="flex gap-2 mt-4">
                  <span className="text-emerald-500">➜</span>
                  <span className="text-cyan-600">~</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <div className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${colors.bg.secondary} ${colors.text.accent} shadow-sm ring-1 ring-gray-200`}>
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
              Available for Fractional & Full-Time Roles
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
