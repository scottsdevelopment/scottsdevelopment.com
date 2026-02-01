'use client'

import { motion } from 'framer-motion'
import { colors } from '../../config/colors'
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
            title: "Fractional CTO / Principal Architect",
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

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className={`absolute inset-0 opacity-30 ${colors.bg.gradient} blur-3xl`} />
                <div className="relative max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-4xl md:text-6xl font-bold ${colors.text.heading} mb-6`}
                    >
                        Principal Engineering Leadership. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600">
                            On Your Terms.
                        </span>
                    </motion.h1>
                    <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto mb-10`}>
                        Whether you need a Fractional CTO to guide your strategy or a Principal Architect to crush your backlog, we deliver enterprise-grade results without the overhead.
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

            {/* About Section */}
            <section className={`py-20 px-6 ${colors.bg.secondary} border-y ${colors.border.subtle}`}>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl font-bold ${colors.text.heading} mb-6`}>
                            About Scott’s Development: <br className="hidden sm:block" />
                            <span className={colors.text.accent}>High-Stakes Technical Partner</span>
                        </h2>
                        <p className={`text-xl ${colors.text.secondary} leading-relaxed`}>
                            Scott’s Development was founded to solve a specific problem in the Detroit tech ecosystem: the <strong>Value Gap</strong>. Too often, businesses are forced to choose between overpriced agencies that deploy junior talent or full-time executives they aren't ready to hire.
                        </p>
                        <p className={`mt-6 text-xl ${colors.text.heading} font-medium`}>
                            We provide a third way. By operating as a <strong>Principal Architect and Fractional CTO</strong>, we bring 15+ years of Silicon Valley engineering standards directly to your business roadmaps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
                        <div>
                            <h3 className={`text-xl font-bold ${colors.text.heading} mb-4 flex items-center gap-2`}>
                                <Shield className="w-5 h-5 text-emerald-600" />
                                The <strong>Adult in the Room</strong> Philosophy
                            </h3>
                            <p className={`${colors.text.secondary} mb-4 leading-relaxed`}>
                                In an era of <strong>vibe coding</strong> and rapid AI prototyping, technical context is easily lost. Without <strong>Engineering Ceremony</strong>—the structured processes of documentation, security auditing, and architectural foresight—today’s shortcuts become tomorrow’s liabilities.
                            </p>
                            <p className={`${colors.text.secondary} leading-relaxed`}>
                                We serve as the technical anchor for your company, ensuring that every move we make is secure, scalable, and—most importantly—aligned with your <strong>North Star revenue goals</strong>.
                            </p>
                        </div>
                        <div>
                            <h3 className={`text-xl font-bold ${colors.text.heading} mb-4 flex items-center gap-2`}>
                                <Layout className="w-5 h-5 text-violet-600" />
                                Local Roots, Global Standards
                            </h3>
                            <p className={`${colors.text.secondary} leading-relaxed`}>
                                Based at the <strong>Woodward and 8 Mile</strong> corridor in Ferndale, we are dedicated partners for the Greater Metro Detroit area. While our mindset is shaped by the pace of California startups, our commitment is to the growth and technical modernization of our local business community.
                            </p>
                        </div>
                    </div>

                    <div className={`p-8 rounded-2xl ${colors.bg.primary} border ${colors.border.subtle} shadow-sm`}>
                        <h3 className={`text-2xl font-bold ${colors.text.heading} mb-6 text-center`}>
                            Why the Fractional Model Works
                        </h3>
                        <p className={`${colors.text.secondary} mb-8 text-center max-w-2xl mx-auto`}>
                            We don't believe in <strong>butt-in-seat</strong> billing. We believe in <strong>impact</strong>. By focusing on 10–20 hour high-velocity engagements, we provide:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="text-center">
                                <div className="font-bold text-cyan-600 mb-2">Silicon Valley Speed</div>
                                <div className={`text-sm ${colors.text.secondary}`}>Leveraging agentic workflows to deliver at a <strong>20x pace</strong> compared to traditional manual development.</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-violet-600 mb-2">Direct Principal Access</div>
                                <div className={`text-sm ${colors.text.secondary}`}>You never deal with a project manager or a junior dev. You deal with the Architect-in-Chief.</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-emerald-600 mb-2">Project Stabilization</div>
                                <div className={`text-sm ${colors.text.secondary}`}>We specialize in <strong>Project Rescue</strong>—stepping into stalled builds to restore architectural velocity.</div>
                            </div>
                        </div>

                        <blockquote className={`border-l-4 ${colors.border.accent} pl-6 italic ${colors.text.heading} text-lg md:text-xl`}>
                            "Tech should never be a black box or a bottleneck. It should be a transparent, high-performance engine that drives your business forward."
                        </blockquote>
                    </div>
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
        </main>
    )
}
