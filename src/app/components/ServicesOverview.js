'use client'

import { motion } from 'framer-motion'
import { colors } from '../../config/colors'
import Card from './ui/Card'
import { LineChart, ShieldCheck, Cpu } from 'lucide-react'

export default function ServicesOverview() {
    const services = [
        {
            icon: <LineChart className="w-6 h-6 text-white" />,
            title: "Fractional CTO & Revenue Strategy",
            description: "We don't just take tickets. We identify your North Star and build the 20% of features that drive 80% of your growth.",
            gradient: "from-cyan-500 to-blue-500"
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-white" />,
            title: "Project Rescue & Modernization",
            description: "Legacy systems aren't just technical debt—they are leaky revenue pipes. We modernize enterprise platforms with zero downtime.",
            gradient: "from-violet-500 to-purple-500"
        },
        {
            icon: <Cpu className="w-6 h-6 text-white" />,
            title: "GEO & AI-Enabled Growth",
            description: "If your business isn't visible to Generative AI agents, you're invisible. We optimize your data for the 2026 search landscape.",
            gradient: "from-emerald-500 to-teal-500"
        }
    ]

    return (
        <section className={`py-24 ${colors.bg.primary}`}>
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className={`text-3xl sm:text-4xl font-bold ${colors.text.heading} mb-4`}>
                        Modernizing Legacy Systems & Rescuing Failed Projects.
                    </h2>
                    <p className={`text-xl ${colors.text.secondary}`}>
                        We bridge the gap between business strategy and technical execution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Card className="h-full flex flex-col relative overflow-hidden group">
                                {/* Hover Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                <div className={`relative z-10 rounded-xl w-14 h-14 flex items-center justify-center bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                                    {service.icon}
                                </div>

                                <h3 className={`relative z-10 text-xl font-bold ${colors.text.heading} mb-3`}>
                                    {service.title}
                                </h3>

                                <p className={`relative z-10 ${colors.text.secondary} leading-relaxed flex-grow`}>
                                    {service.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
