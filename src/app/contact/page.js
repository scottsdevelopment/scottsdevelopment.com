'use client'

import { motion } from 'framer-motion'
import { colors } from '../../config/colors'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { Mail, Calendar, MapPin, Coffee, Code, ArrowRight } from 'lucide-react'
import { useFormspree } from '../hooks/useFormspree'

export default function Contact() {
    const { handleSubmit, status, submitting } = useFormspree("mgvnddpv")

    return (
        <main className={`min-h-screen ${colors.bg.primary}`}>

            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className={`absolute inset-0 opacity-30 ${colors.bg.gradient} blur-3xl`} />
                <div className="relative max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-center justify-center gap-2 mb-6 ${colors.text.secondary} font-medium tracking-wide uppercase text-sm`}
                    >
                        <MapPin className="w-4 h-4 text-rose-500" />
                        <span>Serving Greater Metro Detroit and Southeast Michigan</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={`text-4xl md:text-6xl font-bold ${colors.text.heading} mb-6`}
                    >
                        Let's Build Something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600">
                            Scalable.
                        </span>
                    </motion.h1>
                    <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto`}>
                        Whether you need a Fractional CTO, a Principal Architect, or a team to modernize your legacy system, we're ready to help.
                    </p>
                </div>
            </section>

            {/* Local Value Proposition & Map */}
            <section className="py-16 px-6 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className={`text-3xl font-bold ${colors.text.heading} mb-6`}>
                                Why hire a local Fractional CTO?
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center flex-shrink-0">
                                        <Coffee className="w-6 h-6 text-cyan-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Face-to-Face Collaboration</h3>
                                        <p className="text-gray-600">
                                            While remote is great, sometimes you need to whiteboard a complex architecture in person. We are based in Ferndale and available for on-site strategy sessions in Detroit, Royal Oak, and Troy.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
                                        <Code className="w-6 h-6 text-violet-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Deep Technical Roots</h3>
                                        <p className="text-gray-600">
                                            With 15+ years of experience, we bring Silicon Valley-level engineering standards to the Midwest. No outsourcing, no junior devs—just senior leadership.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                                        <div className="w-6 h-6 text-amber-600 flex items-center justify-center font-bold text-lg">AI</div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Vibe Coding Needs an Architect</h3>
                                        <p className="text-gray-600">
                                            Vibe coding is great until the prompts get messy and context is lost. We provide the ownership and technical ceremony required to keep your AI-driven tools high-performing and secure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-2xl transform rotate-3 opacity-10"></div>
                            <Card className="relative border-gray-200 shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-center gap-2">
                                            <ArrowRight className="w-4 h-4 text-cyan-500" /> Detroit & Downtown
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <ArrowRight className="w-4 h-4 text-cyan-500" /> Ferndale & Royal Oak
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <ArrowRight className="w-4 h-4 text-cyan-500" /> Troy & Birmingham
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <ArrowRight className="w-4 h-4 text-cyan-500" /> Ann Arbor & Remote
                                        </li>
                                    </ul>
                                    <div className="w-full h-full min-h-[160px] bg-gray-100 rounded-lg overflow-hidden">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            frameBorder="0"
                                            scrolling="no"
                                            marginHeight="0"
                                            marginWidth="0"
                                            src="https://maps.google.com/maps?q=8+Mile+Rd+and+Woodward+Ave,+Detroit,+MI&t=&z=11&ie=UTF8&iwloc=&output=embed"
                                            title="Service Area Map"
                                            className="h-full w-full"
                                        ></iframe>
                                    </div>
                                </div>
                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <p className="text-sm text-gray-500 italic">
                                        "Scott's Development team brings a level of technical depth that is hard to find locally. Highly recommended for any Detroit business needing serious engineering help."
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full p-8 md:p-12 bg-white border-gray-200">
                            <h2 className={`text-2xl font-bold ${colors.text.heading} mb-8`}>
                                Contact Information
                            </h2>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-cyan-600" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                                        <a href="mailto:scott@scottsdevelopment.com" className="text-lg text-gray-600 hover:text-cyan-600 transition-colors break-words">
                                            scott@scottsdevelopment.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
                                        <Calendar className="w-6 h-6 text-violet-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Schedule a Call</h3>
                                        <a href="https://calendly.com/scottsdevelopment" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-600 hover:text-violet-600 transition-colors">
                                            Book a Consultation
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                                        <Calendar className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Availability</h3>
                                        <p className="text-lg text-gray-600">
                                            Accepting new fractional clients for Q1 2026. We are seeking opportunities to partner with local businesses to help them grow their technical capabilities with a 10-20 hour budget.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full p-8 md:p-12 bg-white border-gray-200">
                            <h2 className={`text-2xl font-bold ${colors.text.heading} mb-8`}>
                                Send a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">What is your #1 technical or revenue bottleneck?</label>
                                    <textarea
                                        name="bottleneck"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-24 transition-shadow placeholder:text-gray-400"
                                        placeholder="e.g. My app crashes during peak traffic, or I need to automate a manual process..."
                                    ></textarea>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input
                                            name="name"
                                            required
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input
                                            name="email"
                                            required
                                            type="email"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <select
                                        name="subject"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow"
                                    >
                                        <option>Fractional Engineering Inquiry</option>
                                        <option>Legacy Modernization Project</option>
                                        <option>Other</option>
                                    </select>

                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-40 transition-shadow"
                                        placeholder="Tell us about your project or team needs..."
                                    ></textarea>
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-full h-12 text-lg"
                                    disabled={submitting}
                                >
                                    {submitting ? "Sending..." : "Send Message"}
                                </Button>

                                {status && (
                                    <p className={`text-center text-sm ${status.includes("Thanks") ? "text-emerald-600" : "text-red-600"}`}>
                                        {status}
                                    </p>
                                )}
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
