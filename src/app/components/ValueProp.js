'use client'

import { motion } from 'framer-motion'
import { colors } from '../../config/colors'
import Card from './ui/Card'
import { Code2, Users, ShieldCheck } from 'lucide-react'

export default function ValueProp() {
    const features = [
        {
            icon: <Code2 className="w-8 h-8 text-cyan-600" />,
            title: "Technical Strategy",
            description: "Architecture decisions that scale. We help you choose the right tools and patterns to avoid technical debt."
        },
        {
            icon: <Users className="w-8 h-8 text-violet-600" />,
            title: "Team Mentorship",
            description: "Elevating your team's capabilities through code reviews, pair programming, and engineering culture."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
            title: "Legacy Modernization",
            description: "Transforming monolithic legacy systems into modern, microservices-based architectures without downtime."
        }
    ]

    return (
        <section className={`py-24 ${colors.bg.primary}`}>
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className={`text-3xl font-bold ${colors.text.heading} mb-4`}>
                        More Than Just Code.
                    </h2>
                    <p className={`text-xl ${colors.text.secondary}`}>
                        We bring senior engineering leadership to your team, whether you need a Fractional CTO or a hands-on Principal Architect.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full">
                                <div className={`rounded-xl w-14 h-14 flex items-center justify-center ${colors.bg.primary} mb-6`}>
                                    {feature.icon}
                                </div>
                                <h3 className={`text-xl font-bold ${colors.text.heading} mb-3`}>
                                    {feature.title}
                                </h3>
                                <p className={`${colors.text.secondary} leading-relaxed`}>
                                    {feature.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
