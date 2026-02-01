import { colors } from '../../../config/colors'
import Link from 'next/link'
import ContactSection from '../../components/ContactSection'
import { Sparkles, Map, ShieldCheck, Briefcase, Check, X, Minus } from 'lucide-react'

export const metadata = {
    title: 'Why Vibe Coding Isn\'t Enough: The Case for the Fractional CTO in 2026',
    description: 'Ferndale veteran dev Scott explains why Detroit businesses need more than just no-code tools. Learn how to leverage a Fractional CTO for 20x growth in 2026.',
    keywords: ['Fractional CTO Ferndale', 'Detroit Web Development', 'Generative Experience Optimization', '20x Developer', 'Web Security Audit Michigan'],
}

function ComparisonTable() {
    const features = [
        {
            name: "Model",
            agency: { text: "Heavy retainers & long contracts", icon: Minus, color: "text-amber-500" },
            scott: { text: "Flexible, fractional, and asynchronous", icon: Check, color: "text-emerald-600" }
        },
        {
            name: "Management",
            agency: { text: "Ticket Takers who need constant management", icon: X, color: "text-rose-500" },
            scott: { text: "A CTO mindset that identifies your North Star", icon: Check, color: "text-emerald-600" }
        },
        {
            name: "Efficiency",
            agency: { text: "40 hours of billing for 10 hours of work", icon: Minus, color: "text-amber-500" },
            scott: { text: "20x output using cutting-edge AI automation", icon: Check, color: "text-emerald-600" }
        },
        {
            name: "Tech Stack",
            agency: { text: "Post-COVID staleness", icon: Minus, color: "text-gray-400" },
            scott: { text: "Silicon Valley speed & 2026 tooling", icon: Check, color: "text-emerald-600" }
        }
    ]

    return (
        <div className="w-full overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white my-12 not-prose">
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-100 divide-x divide-gray-100">
                            <th className="p-4 bg-gray-50/50 w-1/4"></th>
                            <th className="p-4 text-left w-1/3 bg-gray-50/20">
                                <span className="font-bold text-gray-900">The Agency Way</span>
                            </th>
                            <th className="p-4 text-left w-1/3 bg-cyan-50/30 relative">
                                <span className="font-bold text-cyan-900">The Scott’s Development Way</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {features.map((feature, index) => (
                            <tr key={index} className="divide-x divide-gray-100">
                                <td className="p-4 font-semibold text-gray-700 bg-gray-50/30">{feature.name}</td>
                                <td className="p-4 text-gray-600">{feature.agency.text}</td>
                                <td className="p-4 font-medium text-gray-900 bg-cyan-50/10">{feature.scott.text}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function ServicesList() {
    const services = [
        {
            title: "SEO to GEO",
            description: "Moving beyond search results into the Generative Experience Optimization era."
        },
        {
            title: "Technical Roadmapping",
            description: "Turning disorganized thoughts into consistent, high-quality outcomes."
        },
        {
            title: "Security & Scaling",
            description: "Real-world experience with applications serving millions of users."
        },
        {
            title: "Fractional Leadership",
            description: "The executive mindset without the $200k W2 commitment."
        }
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 not-prose">
            {services.map((service, index) => (
                <div key={index} className={`p-6 rounded-xl border border-gray-100 ${colors.bg.secondary}`}>
                    <h3 className={`font-bold ${colors.text.heading} mb-2`}>{service.title}</h3>
                    <p className={`text-sm ${colors.text.secondary}`}>{service.description}</p>
                </div>
            ))}
        </div>
    )
}

export default function BlogPost() {
    return (
        <main className={`min-h-screen ${colors.bg.primary}`}>
            {/* Hero Section */}
            <section className="relative pt-32 pb-12 px-6 overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-[600px] opacity-30 ${colors.bg.gradient} blur-3xl pointer-events-none`} />

                <div className="relative max-w-3xl mx-auto text-center">
                    <h1 className={`text-4xl sm:text-5xl font-extrabold ${colors.text.heading} mb-8 leading-tight`}>
                        Why Vibe Coding Isn't Enough: The Case for the Fractional CTO in 2026
                    </h1>
                    <p className={`text-xl ${colors.text.secondary} italic`}>
                        The barrier to entry has vanished. The barrier to scale has never been higher.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 px-6">
                <div className="mx-auto max-w-3xl">
                    <div className={`prose prose-lg max-w-none ${colors.text.body} prose-headings:${colors.text.heading} prose-strong:${colors.text.heading} prose-a:${colors.text.accent} prose-blockquote:border-cyan-500 prose-blockquote:bg-cyan-50/30 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg`}>

                        <p className="lead text-xl">
                            If you’re driving down Woodward or 8 Mile right now, you’re passing dozens of businesses that are technically online but strategically invisible.
                        </p>

                        <blockquote>
                            "If we told you this entire page was built, optimized, and deployed in under an hour, would you believe us? In 2026, the gap between the fast and the slow is widening. Don't get left on the wrong side of the curve."
                        </blockquote>

                        <p>
                            In 2026, the barrier to entry for tech has vanished. Between no-code platforms and vibe coding (using AI to prompt your way to a functional site), anyone can build a blog or a basic storefront. But here is the reality: The easier it is to build, the easier it is to build something broken, insecure, and unscalable.
                        </p>

                        <h2>The Vibe Coding Trap</h2>
                        <p>
                            We are veteran engineers. We’ve seen the inside of the big Ferndale agencies, and we currently work as Principal Architects for Silicon Valley startups. We see people vibe coding applications every day. It’s great for a prototype. It’s a nightmare for a secure, row-level protected, high-traffic infrastructure.
                        </p>
                        <p>
                            If you’ve built a brand in 48 hours but don't know if your database is leaking private info, you don't have a business—you have a liability.
                        </p>

                        <h2>From SEO to GEO</h2>
                        <p>
                            Most agencies in town are still talking about SEO like it’s 2018. They want to sell you a retainer to get you on Page 1. But today, we live in the era of <strong>GEO: Generative Experience Optimization.</strong>
                        </p>
                        <p>
                            When a user asks an AI, "Who is the best Fractional CTO in Ferndale?" or "Where is the best burger on 9 Mile?", the AI isn't just looking at your keywords. It’s looking at your facts, your reviews, and your digital authority. We don't just optimize for Google; we optimize for the AI agents that are actually making the decisions for your customers.
                        </p>

                        <ServicesList />

                        <h2>The Ticket Taker vs. The Partner</h2>
                        <p>
                            Most business owners think they need a developer to fix their website. They go to a local agency, get put into a ticketing system, and wait. You pay a high hourly rate for someone to do exactly what you told them to do—even if what you told them to do was a bad business move.
                        </p>
                        <p>
                            We don’t want to be your ticket taker. We want to be your <strong>North Star.</strong>
                        </p>

                        <ComparisonTable />

                        <p>
                            As your fractional CTO team, we look at your business through a vertical lens. If you’re a restaurant owner in Ferndale, you don't just need a QR menu. You need a streamlined point-of-sale system that feeds data into an automated marketing loop to increase your Tuesday night revenue. You need <strong>Impact.</strong>
                        </p>

                        <h2>The 20x Reality of 2026</h2>
                        <p>
                            The industry used to talk about the 10x Developer. In 2026, with the custom workflows and AI-shortcuts we’ve developed, we’re operating at a <strong>20x pace.</strong>
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>What takes an average agency developer 40 hours of billing? We finish it in 10.</li>
                            <li>Why? Because we’re not just typing code; we’re orchestrating systems.</li>
                            <li>We work while Detroit sleeps. Because we are remote-first and technically optimized, we drive value asynchronously. By the time you start your workday on Woodward, the problems from yesterday are already solved.</li>
                        </ul>

                        <h2>Skip the Line. Direct to Executive.</h2>
                        <p>
                            Why pay for the agency's office space and project managers when you can go directly to the team they used to hire to do the heavy lifting?
                        </p>
                        <p>
                            We’re looking for a few more fractional partnerships with businesses that are ready to stop playing catch-up and start leading. Whether it's an automated ticketing system, a custom mobile app, or a complete technical audit of your vibe-coded startup, let’s talk.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="text-center border-t border-gray-100 pt-16">
                <ContactSection
                    title="Ready to upgrade your infrastructure?"
                    subtitle="Book a Discovery Call to discuss your architecture."
                    context={{ page_source: 'Blog: Vibe Coding' }}
                />
            </div>
        </main>
    )
}
