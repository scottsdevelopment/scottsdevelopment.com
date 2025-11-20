'use client'

import { motion } from 'framer-motion'
import { colors } from '../../config/colors'
import Card from './ui/Card'
import { Cpu, Globe, Zap } from 'lucide-react'

export default function ServicesOverview() {
    const services = [
        {
            icon: <Cpu className="w-8 h-8 text-violet-600" />,
            title: "Fractional CTO & Staff Engineering",
            description: "On-demand senior engineering leadership. We guide strategy, mentor teams, and deliver enterprise-grade results without full-time overhead."
        },
        {
            icon: <Globe className="w-8 h-8 text-cyan-600" />,
            title: "Custom Web Solutions",
            description: "Scalable, secure applications tailored to your business. From internal dashboards to customer portals, we build solutions that grow with you."
        },
        {
            icon: <Zap className="w-8 h-8 text-emerald-600" />,
            title: "Workflow Automation & Intelligence",
            description: "Automate complex processes, reduce manual effort, and streamline operations with intelligent, scalable solutions."
        }
    ]

    return (
        <section className={`py-24 ${colors.bg.primary}`}>
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className={`text-3xl sm:text-4xl font-bold ${colors.text.heading} mb-4`}>
                        High-Impact Technical Services.
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
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className={`relative z-10 rounded-xl w-14 h-14 flex items-center justify-center ${colors.bg.primary} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
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
