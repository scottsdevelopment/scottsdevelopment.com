'use client'

import { motion } from 'framer-motion'
import { colors } from '../../../config/colors'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import Link from 'next/link'
import { MapPin, Code, Coffee, ArrowRight } from 'lucide-react'
import { useFormspree } from '../../hooks/useFormspree'

export default function Detroit() {
    const { handleSubmit, status, submitting } = useFormspree("mgvnddpv")

    return (
        <main className={`min-h-screen ${colors.bg.primary}`}>
            <Header />

            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className={`absolute inset-0 opacity-30 ${colors.bg.gradient} blur-3xl`} />

                <div className="relative max-w-7xl mx-auto text-center z-10">


                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-4xl md:text-6xl font-bold ${colors.text.heading} mb-6`}
                    >
                        Premier Web Development & <br />
                        Fractional Engineering in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600">Metro Detroit</span>.
                    </motion.h1>

                    <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto mb-10`}>
                        Local expertise for global scale. We help Detroit-area businesses and enterprises modernize their technology stack, scale their teams, and build mission-critical software.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-sm font-medium text-gray-600 shadow-sm">
                            <MapPin className="w-4 h-4 text-rose-500" />
                            <span>Serving Greater Metro Detroit and Southeast Michigan</span>
                        </div>
                        <div className="flex justify-center gap-4">
                            <Link href="/contact">
                                <Button variant="primary" className="h-14 px-8 text-lg shadow-lg shadow-cyan-500/20">
                                    Book a Local Consultation
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 bg-white">
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

            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className={`text-3xl font-bold ${colors.text.heading} mb-6`}>
                        Let's grab coffee in Detroit.
                    </h2>
                    <p className={`text-xl ${colors.text.secondary} mb-8`}>
                        Or a Zoom call. Whatever works for you.
                    </p>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-left">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        name="name"
                                        required
                                        type="text"
                                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        name="email"
                                        required
                                        type="email"
                                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-32"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>
                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full"
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
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    )
}
