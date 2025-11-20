'use client'

import { motion } from 'framer-motion'
import { colors } from '../../config/colors'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { Mail, Phone, MapPin, Calendar } from 'lucide-react'
import { useFormspree } from '../hooks/useFormspree'

export default function Contact() {
    const { handleSubmit, status, submitting } = useFormspree("mgvnddpv")

    return (
        <main className={`min-h-screen ${colors.bg.primary}`}>
            <Header />

            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className={`absolute inset-0 opacity-30 ${colors.bg.gradient} blur-3xl`} />
                <div className="relative max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-4xl md:text-6xl font-bold ${colors.text.heading} mb-6`}
                    >
                        Let's Build Something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600">
                            Scalable.
                        </span>
                    </motion.h1>
                    <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto`}>
                        Whether you need a Fractional CTO, a Staff Engineer, or a team to modernize your legacy system, we're ready to help.
                    </p>
                </div>
            </section>

            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
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
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                                        <a href="mailto:scott@scottsdevelopment.com" className="text-lg text-gray-600 hover:text-cyan-600 transition-colors">
                                            scott@scottsdevelopment.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-violet-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                                        <a href="tel:+1***REMOVED***" className="text-lg text-gray-600 hover:text-violet-600 transition-colors">
                                            ***REMOVED***
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                                        <p className="text-lg text-gray-600">
                                            ***REMOVED***<br />
                                            ***REMOVED***
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                                        <Calendar className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Availability</h3>
                                        <p className="text-lg text-gray-600">
                                            Accepting new fractional clients and full-time inquiries for Q4 2025.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Card className="h-full p-8 md:p-12 bg-white border-gray-200">
                            <h2 className={`text-2xl font-bold ${colors.text.heading} mb-8`}>
                                Send a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
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
                                        <option>Full-Time Role Inquiry</option>
                                        <option>Legacy Modernization Project</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 h-40 transition-shadow"
                                        placeholder="Tell me about your project or team needs..."
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

            <Footer />
        </main>
    )
}
