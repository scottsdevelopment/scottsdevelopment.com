'use client'

import { motion } from 'framer-motion'
import { colors } from '../../config/colors'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/ui/Card'
import ContactSection from '../components/ContactSection'
import FractionalEngineeringTable from '../components/FractionalEngineeringTable'
import { Code2, Server, Shield, Users, Zap, Layout } from 'lucide-react'


export default function Services() {
    const services = [
        {
            icon: <Layout className="w-8 h-8 text-cyan-600" />,
            title: "Custom Web Solutions",
            description: "We build high-performance web applications tailored to your business needs. From complex dashboards to customer-facing portals, we deliver scalable, secure, and user-centric solutions."
        },
        {
            icon: <Server className="w-8 h-8 text-violet-600" />,
            title: "Legacy Modernization",
            description: "We transform monolithic legacy systems into modern, scalable microservices without downtime, ensuring your infrastructure is ready for the future."
        },
        {
            icon: <Code2 className="w-8 h-8 text-emerald-600" />,
            title: "Fractional CTO / Staff Engineer",
            description: "Strategic technical leadership on a flexible basis. We handle architecture, team mentoring, and roadmap planning to align technology with your business goals."
        },
        {
            icon: <Shield className="w-8 h-8 text-amber-600" />,
            title: "Compliance & Security",
            description: "Building HIPAA, PCI, and SOC2 compliant applications for healthcare, government, and enterprise sectors. We prioritize data integrity and regulatory adherence."
        },
        {
            icon: <Users className="w-8 h-8 text-blue-600" />,
            title: "Team Augmentation",
            description: "Embedding with your existing team to raise code quality, introduce best practices, and accelerate delivery. We work alongside your developers to drive success."
        },
        {
            icon: <Zap className="w-8 h-8 text-rose-600" />,
            title: "Enterprise Workflow Automation",
            description: "We modernize legacy systems and automate complex workflows, delivering secure, scalable solutions that streamline operations and maximize efficiency for enterprise clients."
        }
    ]

    return (
        <main className={`min-h-screen ${colors.bg.primary}`}>
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className={`absolute inset-0 opacity-30 ${colors.bg.gradient} blur-3xl`} />
                <div className="relative max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-4xl md:text-6xl font-bold ${colors.text.heading} mb-6`}
                    >
                        Staff Engineering Leadership. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600">
                            On Your Terms.
                        </span>
                    </motion.h1>
                    <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto mb-10`}>
                        Whether you need a Fractional CTO to guide your strategy or a Staff Engineer to crush your backlog, we deliver enterprise-grade results without the overhead.
                    </p>
                </div>
            </section>

            {/* Service Cards */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-gray-100 shadow-sm hover:shadow-md">
                                <div className={`rounded-xl w-14 h-14 flex items-center justify-center ${colors.bg.primary} mb-6`}>
                                    {service.icon}
                                </div>
                                <h3 className={`text-2xl font-bold ${colors.text.heading} mb-3`}>
                                    {service.title}
                                </h3>
                                <p className={`${colors.text.secondary} text-lg leading-relaxed`}>
                                    {service.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Comparison Table */}
            <section className={`py-24 px-6 ${colors.bg.primary}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl font-bold ${colors.text.heading}`}>Why Fractional Engineering?</h2>
                        <p className={`mt-4 ${colors.text.secondary}`}>The expertise you need, exactly when you need it.</p>
                    </div>

                    <FractionalEngineeringTable />
                </div>
            </section>

            <ContactSection
                title="Need Engineering Leadership?"
                subtitle="Let's discuss how we can help you scale."
                context={{ page_source: 'Services' }}
            />

            <Footer />
        </main>
    )
}
