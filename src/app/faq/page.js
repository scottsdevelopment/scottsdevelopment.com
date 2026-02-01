'use client'

import { colors } from '../../config/colors'
import Script from 'next/script'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
    {
        category: "General & Strategic",
        items: [
            {
                question: "What exactly is a Fractional CTO?",
                answer: "A Fractional CTO is a principal-level technical executive who provides leadership and strategy on a part-time or on-demand basis. Unlike a full-time hire, we provide the same high-level oversight—architecture, scaling, and team mentoring—at a fraction of the cost, typically 10–20 hours per week."
            },
            {
                question: "Why should I hire an individual expert over a Ferndale web agency?",
                answer: "Most agencies bill you for a project manager, a junior developer, and their Woodward office rent. When you work with Scott’s Development, you skip the line and get 15 years of senior engineering experience directly. You get Silicon Valley speed and Principal mindset without the agency markup or the ticket-taker bureaucracy."
            }
        ]
    },
    {
        category: "Technical & Execution",
        items: [
            {
                question: "What does Project Rescue mean?",
                answer: "Project rescue is a specialized service for businesses with software that is failing, over budget, or stalled. We have a track record of stepping into high-stakes situations—including multi-million dollar initiatives at risk—to audit the code, secure the infrastructure, and get the product back on a revenue-generating track."
            },
            {
                question: "What is the difference between Vibe Coding and Engineering Ceremony?",
                answer: "<strong>Vibe coding</strong> (using AI to prompt code quickly) is an incredible shortcut, but it often lacks structure. Without <strong>engineering ceremony</strong>—proper documentation, security audits, and scalable architecture—vibe-coded apps eventually break under their own weight. We bring the adult in the room ownership to ensure your AI-enabled shortcuts remain stable and secure for the long term."
            },
            {
                question: "How do you achieve 20x development speed?",
                answer: "In 2026, we leverage advanced agentic workflows and custom automation that weren't industry standard just two years ago. By combining 15 years of veteran experience with these latest tools, we can complete in 10 hours what would take a traditional team 40+ hours to execute."
            },
            {
                question: "How do you ensure code maintainability (Technical Handover)?",
                answer: "We don't just write code and disappear. Our process includes a strict <strong>Technical Handover</strong> phase where we implement proper <strong>Observability</strong> (logging, error tracking) and create Engineering Ceremony documentation. This ensures your internal team or future hires can maintain the system without us, preventing the <strong>black box</strong> problem common with agency work."
            },
            {
                question: "Who actually writes the code?",
                answer: "Every project is directly led by Scott as your Principal Architect. Depending on the scale and speed required, we leverage our own 20x development workflows or lead a hand-picked team of specialists. The difference? We maintain absolute ownership of the outcomes, the architecture, and the <strong>Engineering Ceremony</strong>—ensuring your project never suffers from the lost context or sloppy standards common in traditional outsourcing."
            }
        ]
    },
    {
        category: "Logistics & Local",
        items: [
            {
                question: "Are you local to the Detroit area?",
                answer: "Yes. We are based in Ferndale, Michigan, right at the 8 Mile and Woodward corridor. While we work with Silicon Valley startups and international clients, we are dedicated partners for Metro Detroit businesses that want high-performance technical leadership."
            },
            {
                question: "How do I start with the Free 1-Hour Technical Debt Audit?",
                answer: "Simply <a href=\"/contact\" class=\"text-cyan-600 hover:underline hover:text-cyan-500 font-medium\">Book a Discovery Call</a>. We’ll spend 60 minutes looking over your technical roadmap, your SEO/GEO performance, or your existing code. If we can’t identify a way to save you money or increase your revenue in that hour, we aren't a fit."
            }
        ]
    }
]

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`border-b ${colors.border.subtle} last:border-0`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-start justify-between text-left group"
            >
                <h3 className={`text-lg font-semibold ${colors.text.heading} pr-8 group-hover:text-cyan-600 transition-colors`}>
                    {question}
                </h3>
                <span className={`flex-shrink-0 mt-1 ${isOpen ? 'text-cyan-600' : 'text-gray-400'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div
                    className={`pb-6 ${colors.text.secondary} leading-relaxed`}
                    dangerouslySetInnerHTML={{ __html: answer }}
                />
            </motion.div>
        </div>
    )
}


export default function FAQ() {
    // Generate valid FAQ JSON-LD Schema
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.flatMap(cat => cat.items).map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer.replace(/<[^>]+>/g, '') // Strip HTML for schema
            }
        }))
    }

    return (
        <main className={`min-h-screen ${colors.bg.primary}`}>
            {/* JSON-LD Schema */}
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-[600px] opacity-30 ${colors.bg.gradient} blur-3xl`} />

                <div className="relative max-w-4xl mx-auto text-center">
                    <h1 className={`text-4xl sm:text-5xl font-extrabold ${colors.text.heading} mb-6 tracking-tight`}>
                        Common Questions & <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600">
                            Methodology.
                        </span>
                    </h1>
                    <p className={`text-xl ${colors.text.secondary} max-w-2xl mx-auto`}>
                        Answers about Fractional CTO services, Project Rescue, and how we achieve 20x development speed for Detroit startups.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 px-6">
                <div className="mx-auto max-w-4xl space-y-12">
                    {faqs.map((section, idx) => (
                        <div key={idx} className={`bg-white rounded-2xl shadow-sm border ${colors.border.subtle} p-8`}>
                            <h2 className={`text-xl font-bold ${colors.text.accent} mb-6 uppercase tracking-wider text-sm`}>
                                {section.category}
                            </h2>
                            <div>
                                {section.items.map((item, i) => (
                                    <FAQItem key={i} question={item.question} answer={item.answer} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="mt-16 text-center">
                <ContactSection
                    title="Still have questions?"
                    subtitle="Whether you need a full audit or just a quick opinion, we're happy to chat."
                    context={{ page_source: 'FAQ' }}
                />
            </div>
        </main>
    )
}
