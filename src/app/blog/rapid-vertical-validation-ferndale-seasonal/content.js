'use client'

import { motion } from 'framer-motion'
import { colors } from '../../../config/colors'
import ContactSection from '../../components/ContactSection'
import { ArrowLeft, Clock, DollarSign, TrendingUp, Zap, Layout, Users, Instagram } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import heroImage from './images/hero.jpg'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import image6 from './images/image6.jpg'
import image7 from './images/image7.jpg'
import image8 from './images/image8.jpg'
import image9 from './images/image9.jpg'

const ImageStrip = ({ images, altPrefix }) => (
    <div className="grid grid-cols-3 gap-4 pt-8">
        {images.map((img, index) => (
            <div key={index} className={`relative aspect-square ${colors.bg.subtle} rounded-xl overflow-hidden border ${colors.border.subtle} shadow-sm hover:shadow-lg transition-all duration-500 group`}>
                <Image
                    src={img}
                    alt={`${altPrefix} ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 33vw, 20vw"
                />
                <div className={`absolute inset-0 ${colors.bg.overlayBrand} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
        ))}
    </div>
)

export default function FerndaleSeasonalContent() {
    // JSON-LD for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Rapid Vertical Validation: How We Built Ferndale Seasonal in 48 Hours",
        "image": "https://scottsdevelopment.com/blog/rapid-vertical-validation-ferndale-seasonal/images/hero.jpg",
        "author": {
            "@type": "Person",
            "name": "Scott"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Scott's Development",
            "logo": {
                "@type": "ImageObject",
                "url": "https://scottsdevelopment.com/logo.png"
            }
        },
        "datePublished": "2026-01-28",
        "description": "How we used LLMs and agentic workflows to architect, build, and monetize a service brand over a single weekend."
    }

    return (
        <main className={`min-h-screen ${colors.bg.primary}`}>
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImage}
                        alt="Ferndale Seasonal Background"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                </div>
                <div className={`absolute inset-0 z-0 opacity-30 ${colors.bg.gradient} blur-3xl`} />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-4xl md:text-6xl font-bold ${colors.text.heading} mb-6`}
                    >
                        Rapid Vertical Validation: <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600">
                            Ferndale Seasonal
                        </span>
                    </motion.h1>
                    <p className={`text-xl md:text-2xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
                        From Blizzard to Business in 48 Hours: How we leveraged LLMs and rapid deployment to build a profitable service brand over a weekend.
                    </p>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="px-6 pb-20">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`p-6 rounded-2xl ${colors.bg.secondary} border ${colors.border.subtle}`}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <Clock className={`w-5 h-5 ${colors.interactive.primary}`} />
                            <h3 className={`font-semibold ${colors.text.heading}`}>Time to Launch</h3>
                        </div>
                        <p className={`text-2xl font-bold ${colors.text.heading}`}>&lt; 48 Hours</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`p-6 rounded-2xl ${colors.bg.secondary} border ${colors.border.subtle}`}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <DollarSign className={`w-5 h-5 ${colors.status.success}`} />
                            <h3 className={`font-semibold ${colors.text.heading}`}>Investment</h3>
                        </div>
                        <p className={`text-2xl font-bold ${colors.text.heading}`}>$12.00</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className={`p-6 rounded-2xl ${colors.bg.secondary} border ${colors.border.subtle}`}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <TrendingUp className={`w-5 h-5 ${colors.interactive.secondary}`} />
                            <h3 className={`font-semibold ${colors.text.heading}`}>Outcome</h3>
                        </div>
                        <p className={`text-2xl font-bold ${colors.text.heading}`}>Validated scalable blueprint</p>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="px-6 pb-24">
                <div className="max-w-3xl mx-auto space-y-16">

                    {/* 1. The Thesis */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className={`text-3xl font-bold ${colors.text.heading} border-l-4 ${colors.border.accent} pl-4`}>1. The Thesis: Architecture Over Labor</h2>
                        <p className={`text-lg ${colors.text.secondary} leading-relaxed`}>
                            The <a href="https://ferndaleseasonal.com" target="_blank" rel="noopener noreferrer" className={`font-semibold ${colors.interactive.primary} ${colors.interactive.primaryHover} transition-colors`}>Ferndale Seasonal</a> project was an experiment in <strong className={colors.text.heading}>rapid vertical validation</strong>. Most founders get stuck in feature creep, building complex tools for problems they haven't proven exist. We set out to prove that with a $12 budget and 48 hours, we could architect a service business that generated $300 in net revenue before the first snowflake hit the ground in Detroit.
                        </p>
                        <div className={`p-6 rounded-xl ${colors.bg.secondary} border ${colors.border.subtle}`}>
                            <p className={`${colors.text.secondary} italic`}>
                                <strong className={`not-italic ${colors.text.heading}`}>The Goal:</strong> Transition from a person with a shovel to a <strong className={colors.text.heading}>Managerial System</strong> that handles lead gen, quality assurance, and dispatching while maintaining a healthy managerial cut.
                            </p>
                        </div>
                    </motion.div>

                    {/* 2. The Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className={`text-3xl font-bold ${colors.text.heading} border-l-4 ${colors.border.accent} pl-4`}>2. The Tech Stack: AI-Driven Polish</h2>
                        <p className={`text-lg ${colors.text.secondary} leading-relaxed`}>
                            To compete with established landscaping firms, the brand needed to look institutional, not amateur. We leveraged a High-Leverage stack to bypass weeks of design work:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className={`p-2 ${colors.features.design.bg} rounded-lg h-fit flex-shrink-0`}>
                                    <Layout className={`w-5 h-5 ${colors.features.design.text}`} />
                                </div>
                                <p className={`${colors.text.secondary} leading-relaxed`}>
                                    <strong className={colors.text.heading}>Design Engineering:</strong> We used LLMs (Gemini/Claude) not just for code, but for <strong className={colors.text.heading}>Color Theory</strong>. By feeding the AI industry-standard landscaping sites, we generated a custom Tailwind CSS framework that communicated Reliability and Safety.
                                </p>
                            </li>
                            <li className="flex gap-4">
                                <div className={`p-2 ${colors.features.ai.bg} rounded-lg h-fit flex-shrink-0`}>
                                    <Zap className={`w-5 h-5 ${colors.features.ai.text}`} />
                                </div>
                                <p className={`${colors.text.secondary} leading-relaxed`}>
                                    <strong className={colors.text.heading}>Asset Syntheticism:</strong> We used generative AI to create high-fidelity background images and gradients. This allowed for professional-grade web design without the overhead of a photographer or a graphic designer.
                                </p>
                            </li>
                            <li className="flex gap-4">
                                <div className={`p-2 ${colors.features.marketing.bg} rounded-lg h-fit flex-shrink-0`}>
                                    <Users className={`w-5 h-5 ${colors.features.marketing.text}`} />
                                </div>
                                <p className={`${colors.text.secondary} leading-relaxed`}>
                                    <strong className={colors.text.heading}>The 24-Hour GTM Window:</strong> We identified the Market Trigger—the 24-hour period before a major weather event. Using this, we deployed a multi-channel social engine (Nextdoor, Facebook, Reddit, Instagram) to capture intent exactly when the pain point was highest.
                                </p>
                            </li>
                        </ul>

                        <ImageStrip
                            images={[image1, image2, image3]}
                            altPrefix="Ferndale Seasonal Brand Identity"
                        />
                    </motion.div>

                    {/* 3. The Human Friction */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className={`text-3xl font-bold ${colors.text.heading} border-l-4 ${colors.border.accent} pl-4`}>3. The Human Friction: High-Resolution vs. Low-Resolution</h2>
                        <p className={`text-lg ${colors.text.secondary} leading-relaxed`}>
                            The greatest challenge wasn't the code or the marketing; it was the <strong className={colors.text.heading}>human interface</strong>.
                        </p>
                        <blockquote className={`border-l-4 ${colors.border.accent} pl-6 py-2 my-6 italic ${colors.text.secondary}`}>
                            "We business-dumped into someone who just wanted to shovel driveways."
                        </blockquote>
                        <p className={`text-lg ${colors.text.secondary} leading-relaxed`}>
                            As a CTO/Principal level engineer, your brain operates in High Resolution—you see the systems, the scaling, the marketing loops, and the future pivots. However, we learned a hard lesson in <strong className={colors.text.heading}>Partner Alignment</strong>:
                        </p>
                        <ul className={`grid gap-4 ${colors.text.secondary}`}>
                            <li className={`p-4 rounded-xl border ${colors.border.subtle} ${colors.bg.secondary}`}>
                                <strong className={`block mb-1 ${colors.text.heading}`}>The Over-Explanation Trap</strong>
                                We tried to coach a contractor to be a partner. We shared the Vision when they just wanted The Task.
                            </li>
                            <li className={`p-4 rounded-xl border ${colors.border.subtle} ${colors.bg.secondary}`}>
                                <strong className={`block mb-1 ${colors.text.heading}`}>The Lesson</strong>
                                You cannot coach someone to care about the North Star if they are only there for the hourly rate. This friction taught us that to scale, you must build idiot-proof systems, not better partners.
                            </li>
                            <li className={`p-4 rounded-xl border ${colors.border.subtle} ${colors.bg.secondary}`}>
                                <strong className={`block mb-1 ${colors.text.heading}`}>Standing on Business</strong>
                                We had to learn to protect our energy. If a partner or contractor is low-resolution, you don't over-explain—you move on.
                            </li>
                        </ul>
                    </motion.div>

                    {/* 4. Unit Economics */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className={`text-3xl font-bold ${colors.text.heading} border-l-4 ${colors.border.accent} pl-4`}>4. The Unit Economics: The Managerial Cut</h2>
                        <p className={`text-lg ${colors.text.secondary} leading-relaxed`}>
                            We established a rigid pricing structure to ensure the system remained profitable regardless of the labor involved:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className={`p-4 ${colors.bg.secondary} border ${colors.border.primary} rounded-xl`}>
                                <span className={`text-sm ${colors.text.muted} uppercase tracking-wider font-semibold`}>The Service</span>
                                <div className={`text-2xl font-bold ${colors.text.heading} mt-1`}>$45 <span className={`text-base font-normal ${colors.text.muted}`}>flat rate</span></div>
                            </div>
                            <div className={`p-4 ${colors.bg.secondary} border ${colors.border.primary} rounded-xl`}>
                                <span className={`text-sm ${colors.text.muted} uppercase tracking-wider font-semibold`}>The Labor</span>
                                <div className={`text-2xl font-bold ${colors.status.success} mt-1`}>$30 <span className={`text-base font-normal ${colors.text.muted}`}>to contractor</span></div>
                            </div>
                            <div className={`p-4 ${colors.bg.secondary} border ${colors.border.primary} rounded-xl`}>
                                <span className={`text-sm ${colors.text.muted} uppercase tracking-wider font-semibold`}>The Spread</span>
                                <div className={`text-2xl font-bold ${colors.text.accent} mt-1`}>$15 <span className={`text-base font-normal ${colors.text.muted}`}>managerial profit</span></div>
                            </div>
                            <div className={`p-4 ${colors.bg.secondary} border ${colors.border.primary} rounded-xl`}>
                                <span className={`text-sm ${colors.text.muted} uppercase tracking-wider font-semibold`}>The Upsell</span>
                                <div className={`text-2xl font-bold ${colors.interactive.secondary} mt-1`}>+$15-30 <span className={`text-base font-normal ${colors.text.muted}`}>Salt / Ice</span></div>
                            </div>
                            <div className={`p-4 col-span-full ${colors.bg.gradient} rounded-xl text-white shadow-lg`}>
                                <span className="text-xs uppercase opacity-80 font-bold">The System Advantage</span>
                                <div className="text-xl font-bold">100% Scalable Lead Gen & Dispatch</div>
                            </div>
                        </div>
                        <p className={`${colors.text.secondary} italic`}>
                            This structure proved that the value isn't in the shoveling; it’s in the <strong className={colors.text.heading}>Dispatch and Trust.</strong>
                        </p>
                    </motion.div>

                    {/* 5. The Seasonal Pivot */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className={`text-3xl font-bold ${colors.text.heading} border-l-4 ${colors.border.accent} pl-4`}>5. The Seasonal Pivot: The One-Vertical Rule</h2>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {['Winter: Snow', 'Summer: Lawn', 'Fall: Leaves', 'Spring: Power Wash'].map((v) => (
                                <span key={v} className={`px-3 py-1 ${colors.highlight.primary} text-xs font-bold rounded-full uppercase tracking-widest`}>
                                    {v}
                                </span>
                            ))}
                        </div>
                        <p className={`text-lg ${colors.text.secondary} leading-relaxed`}>
                            A common failure point in startups is the Feature Trap—trying to be everything to everyone at once. While Ferndale Seasonal was born in the snow, the system was designed for modularity.
                        </p>
                        <ul className={`space-y-4 text-lg ${colors.text.secondary}`}>
                            <li className="flex gap-3">
                                <span className={`w-1.5 h-1.5 rounded-full ${colors.brand.bullet} mt-2.5 flex-shrink-0`} />
                                <span><strong className={colors.text.heading}>The Seasonal Roadmap:</strong> The infrastructure built for snow (Dispatch, Billing, Lead Gen) is the exact same infrastructure needed for Lawn Care in the summer and Leaf Removal in the fall.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className={`w-1.5 h-1.5 rounded-full ${colors.brand.bullet} mt-2.5 flex-shrink-0`} />
                                <span><strong className={colors.text.heading}>The Discipline of Focus:</strong> The temptation is to offer power washing, gutter cleaning, and landscaping all at once. However, we learned that validation requires picking one vertical and winning it. You don't need a full feature set; you need a single, high-impact solution that works.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className={`w-1.5 h-1.5 rounded-full ${colors.brand.bullet} mt-2.5 flex-shrink-0`} />
                                <span><strong className={colors.text.heading}>The Strategy:</strong> Pick one vertical per season. Validate it. Prove the unit economics. Only then do you move the Managerial Cut logic to the next seasonal trigger.</span>
                            </li>
                        </ul>

                        <ImageStrip
                            images={[image4, image5, image6]}
                            altPrefix="Ferndale Seasonal Operations"
                        />
                    </motion.div>

                    {/* 6. The "Minimum Wage" CTO */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className={`text-3xl font-bold ${colors.text.heading} border-l-4 ${colors.border.accent} pl-4`}>6. The Minimum Wage CTO: A Lesson in Worth</h2>
                        <p className={`text-lg ${colors.text.secondary} leading-relaxed`}>
                            One of the most profound takeaways was the reality of the Founder's Hourly Rate. Even with a functional, automated-looking front end, a Minimal Viable Business still demands manual heavy lifting in the early stages.
                        </p>
                        <div className="space-y-4">
                            <div className={`p-4 rounded-xl border-l-4 ${colors.border.warning} ${colors.bg.warningLight}`}>
                                <h3 className={`font-bold ${colors.status.warning} mb-1`}>The Reality Check</h3>
                                <p className={`${colors.status.warning} leading-relaxed`}>Despite the $300 in revenue, the time spent on dispatching, quality assurance, and handling unhappy customers meant we were essentially earning $10 an hour for our time.</p>
                            </div>
                            <div className={`p-4 rounded-xl border-l-4 ${colors.border.success} ${colors.bg.successLight}`}>
                                <h3 className={`font-bold ${colors.status.success} mb-1`}>Knowing Your Worth</h3>
                                <p className={`${colors.status.success} leading-relaxed`}>This experiment reinforced the importance of pricing for value. When a customer complained that $45 wasn't worth the shovel, the response had to be rooted in the system's worth: <em>"Salting is an extra $15. Ice chipping is an extra $30. We know the value of the work we provide."</em></p>
                            </div>
                            <div className={`p-4 rounded-xl border-l-4 ${colors.border.info} ${colors.bg.infoLight}`}>
                                <h3 className={`font-bold ${colors.status.info} mb-1`}>The Automation Mandate</h3>
                                <p className={`${colors.status.info} leading-relaxed`}>To scale, the CTO must move from Dispatching to Systematizing. If the goal is to stop earning $10 an hour, the next step is building a self-correcting loop where contractors verify work via photos that automatically trigger payments and marketing posts.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* 7. The Crossroads */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className={`text-3xl font-bold ${colors.text.heading} border-l-4 ${colors.border.accent} pl-4`}>7. The Crossroads: Growth vs. Exit</h2>
                        <p className={`text-lg ${colors.text.secondary} leading-relaxed`}>
                            At the end of the 72-hour cycle, we stood at a crossroads that every founder eventually faces:
                        </p>
                        <ol className={`space-y-4 list-decimal pl-5 text-lg ${colors.text.secondary}`}>
                            <li className="pl-2"><strong className={colors.text.heading}>Iterate and Scale:</strong> Grow the contractor pool, move into paid advertisements (now that we have the ammunition of successful job photos), and automate the dispatch logic.</li>
                            <li className="pl-2"><strong className={colors.text.heading}>The Affiliate Model:</strong> Sell the leads to existing snowplow companies. We met reliable people with trucks who valued our marketing engine more than their own. In this model, we move from Business Owner to High-Value Funnel Architect.</li>
                            <li className="pl-2"><strong className={colors.text.heading}>The Case Study Exit:</strong> Recognizing that the true value of this 48-hour sprint wasn't the $300, but the <strong className={colors.text.heading}>validation of the process</strong>.</li>
                        </ol>
                    </motion.div>

                    {/* 8. Final Verdict */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className={`p-8 rounded-3xl ${colors.bg.secondary} border border-gray-200 mt-12`}
                    >
                        <h2 className={`text-3xl font-bold ${colors.text.heading} border-l-4 ${colors.border.accent} pl-4 mb-6`}>8. Final Verdict: Standing on Business</h2>
                        <p className={`text-lg ${colors.text.secondary} leading-relaxed mb-6`}>
                            The <strong className={colors.text.heading}>Ferndale Seasonal</strong> experiment proved that a Fractional CTO is more than a technical lead—they are a <strong className={colors.text.heading}>Growth Catalyst</strong>.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3">
                                <Zap className={`w-6 h-6 ${colors.status.warning} flex-shrink-0`} />
                                <span className={colors.text.secondary}><strong className={colors.text.heading}>Technology is a Shortcut:</strong> We used LLMs to bypass the need for artistic talent and weeks of design work.</span>
                            </li>
                            <li className="flex gap-3">
                                <Zap className={`w-6 h-6 ${colors.status.warning} flex-shrink-0`} />
                                <span className={colors.text.secondary}><strong className={colors.text.heading}>Story Beats Product:</strong> People bought the narrative of the "Local, High-Tech Neighborhood Shoveler" before they ever saw a shovel.</span>
                            </li>
                            <li className="flex gap-3">
                                <Zap className={`w-6 h-6 ${colors.status.warning} flex-shrink-0`} />
                                <span className={colors.text.secondary}><strong className={colors.text.heading}>The CTO Edge:</strong> By applying Principal-level engineering logic to a low-tech problem, we uncovered inefficiencies that local competitors had missed for years.</span>
                            </li>
                        </ul>
                        <div className={`bg-white p-8 rounded-2xl border-l-8 ${colors.border.accent} shadow-lg transform -skew-x-1`}>
                            <p className={`text-xl md:text-2xl font-bold ${colors.text.heading} leading-snug`}>
                                "The takeaway for our clients? If we can turn a snowstorm into a profitable business engine in 48 hours, we can certainly find the market triggers and technical shortcuts needed to scale your startup."
                            </p>
                        </div>

                        {/* Image Strip 3: Results & Link */}
                        <div className={`space-y-8 pt-8 border-t ${colors.border.subtle} mt-8`}>
                            <ImageStrip
                                images={[image7, image8, image9]}
                                altPrefix="Ferndale Seasonal Results"
                            />

                            <div className="flex justify-center">
                                <a
                                    href="https://www.instagram.com/ferndaleseasonal/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 ${colors.features.marketing.text} hover:text-pink-700 font-medium transition-colors group ${colors.features.marketing.bg} px-6 py-3 rounded-full hover:bg-pink-100`}
                                >
                                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Check out Ferndale Seasonal on Instagram</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section >

            <ContactSection
                title="Want to build something fast?"
                subtitle="Let's apply this same agility to your next project."
                context={{ page_source: 'Ferndale Seasonal Case Study' }}
            />

        </main >
    )
}
