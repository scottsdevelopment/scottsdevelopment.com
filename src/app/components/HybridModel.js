'use client'

import { motion } from 'framer-motion'
import { colors } from '../../config/colors'
import Card from './ui/Card'
import { Briefcase, Terminal } from 'lucide-react'

export default function HybridModel() {
    const strategies = [
        {
            icon: <Briefcase className="w-6 h-6 text-white" />,
            title: "Strategic Advisory (Fractional CTO)",
            description: "The Business Brain. We align your technology with North Star metrics—managing roadmaps, budgets, and maximizing Technical ROI. We ensure your tech investment drives profit, not just code.",
            gradient: "from-amber-500 to-orange-500"
        },
        {
            icon: <Terminal className="w-6 h-6 text-white" />,
            title: "Deep-Dive Execution (Principal Architect)",
            description: "The Technical Muscle. We are the adults in the room who build the un-buildable. We specialize in 20x velocity, secure architecture, and purging technical debt that slows you down.",
            gradient: "from-rose-500 to-red-500"
        }
    ]

    return (
        <section className={`py-24 bg-white border-y ${colors.border.subtle}`}>
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className={`text-3xl sm:text-4xl font-bold ${colors.text.heading} mb-4`}>
                        The Lead-from-the-Front Model.
                    </h2>
                    <p className={`text-xl ${colors.text.secondary}`}>
                        Most agencies ask you to choose between high-level strategy and low-level coding. We deliver both.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {strategies.map((strategy, index) => (
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
                                <div className={`absolute inset-0 bg-gradient-to-br ${strategy.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                <div className={`relative z-10 rounded-xl w-14 h-14 flex items-center justify-center bg-gradient-to-br ${strategy.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                                    {strategy.icon}
                                </div>

                                <h3 className={`relative z-10 text-xl font-bold ${colors.text.heading} mb-3`}>
                                    {strategy.title}
                                </h3>

                                <p className={`relative z-10 ${colors.text.secondary} leading-relaxed flex-grow`}>
                                    {strategy.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
