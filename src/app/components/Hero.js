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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight ${colors.text.heading} mb-6`}
          >
            Principal Architect & <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600">
              Fractional CTO.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-xl sm:text-2xl ${colors.text.body} mx-auto leading-relaxed mb-8`}
          >
            Engineering Leadership that Drives Revenue. Modernizing legacy systems and rescuing stalled projects for Detroit startups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-start items-center gap-6"
          >
            <Link href="/contact">
              <Button variant="primary" className="h-14 px-8 text-lg shadow-lg shadow-cyan-500/20 font-bold">
                Get a Free 1-Hour Debt Audit
              </Button>
            </Link>
          </motion.div>

          <div className="mt-12 flex flex-wrap items-center gap-8 text-sm font-medium text-gray-500">
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
                  <span className="text-amber-500">r3scu3d</span> status: Recovered multi-million dollar project
                  <br /><span className="text-amber-500">opt1m1z</span> feat: Automated 80% of manual workflows for retail partner
                  <br /><span className="text-amber-500">arch1tct</span> chore: Implementing ceremony & structure for agentic workflows
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
              Open for Fractional Roles (Q1 2026)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
