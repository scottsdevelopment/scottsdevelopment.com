'use client'

import { useFormspree } from '../hooks/useFormspree'
import { colors } from '../../config/colors'
import Button from './ui/Button'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function ContactSection({
    title = "Let's Build Something Great",
    subtitle = "Ready to modernize your legacy systems or build a new web application? Tell us about your project.",
    formId = "xbljqeop",
    context = {}
}) {
    const { handleSubmit, status, submitting } = useFormspree(formId)

    if (status === "Thanks for your submission!") {
        return (
            <section className={`py-24 px-6 ${colors.bg.primary}`}>
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-8 h-8" />
                        </div>
                        <h2 className={`text-3xl font-bold ${colors.text.heading} mb-4`}>Message Received</h2>
                        <p className={`text-xl ${colors.text.secondary}`}>
                            Thanks for reaching out. We'll be in touch shortly to discuss your project.
                        </p>
                    </motion.div>
                </div>
            </section>
        )
    }

    return (
        <section className={`py-24 px-6 ${colors.bg.primary}`} id="contact">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className={`text-3xl md:text-4xl font-bold ${colors.text.heading} mb-4`}>
                        {title}
                    </h2>
                    <p className={`text-xl ${colors.text.secondary}`}>
                        {subtitle}
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Hidden context fields */}
                        {Object.entries(context).map(([key, value]) => (
                            <input key={key} type="hidden" name={key} value={value} />
                        ))}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className={`block text-sm font-medium ${colors.text.heading} mb-2`}>
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className={`block text-sm font-medium ${colors.text.heading} mb-2`}>
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                                    placeholder="jane@company.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className={`block text-sm font-medium ${colors.text.heading} mb-2`}>
                                Project Details
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                                placeholder="Tell us about your goals, timeline, and any specific challenges you're facing..."
                            />
                        </div>

                        {status && status !== "Thanks for your submission!" && (
                            <div className="p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
                                <AlertCircle className="w-5 h-5" />
                                <span>{status}</span>
                            </div>
                        )}

                        <div className="flex justify-end">
                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full md:w-auto h-14 px-8 text-lg"
                                disabled={submitting}
                            >
                                {submitting ? (
                                    <span className="flex items-center gap-2">
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </span>
                                ) : (
                                    "Send Message"
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
