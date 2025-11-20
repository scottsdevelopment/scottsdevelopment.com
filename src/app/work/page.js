'use client'

import { motion } from 'framer-motion'
import { colors } from '../../config/colors'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/ui/Card'
import ContactSection from '../components/ContactSection'
import { Database, Globe, Lock, Layout, Code2, ShoppingCart, Server, Zap } from 'lucide-react'

export default function Work() {
    const caseStudies = [
        {
            title: "Custom Web Applications",
            impact: "Delivering scalable, high-performance solutions that drive business growth.",
            description: "We craft bespoke web applications tailored to your enterprise needs. Depending on your requirements, we leverage React, Next.js, Angular, or Vue for dynamic front-ends, Node.js, C#/.NET, Laravel, Rails, or Django for robust back-ends, and cloud-native architectures for reliability and scalability. From internal dashboards to high-traffic customer portals, our solutions are designed to evolve with your business and solve complex operational challenges.",
            tags: ["React", "Next.js", "Angular", "Vue", "Node.js", "C#/.NET", "Laravel", "Rails", "Django"],
            icon: <Code2 className="w-6 h-6 text-cyan-600" />
        },
        {
            title: "Federal Government Benefits Platform",
            impact: "Streamlined benefits processing for 100k+ veterans.",
            description: "In a high-stakes modernization initiative for the Department of Veterans Affairs, we led the transition of a critical pension system from legacy infrastructure to a robust microservices architecture. Utilizing React and Ruby on Rails, we engineered a solution that not only streamlined benefits processing for over 100,000 veterans but also ensured strict adherence to Section 508 accessibility standards and federal security compliance.",
            tags: ["React", "Ruby on Rails", "Microservices", "Accessibility"],
            icon: <Globe className="w-6 h-6 text-blue-600" />
        },
        {
            title: "Healthcare and Insurance Modernization",
            impact: "Zero downtime for critical patient-facing systems.",
            description: "For a rapidly growing healthcare provider, we executed a zero-downtime modernization of a mission-critical patient management platform. Our team performed deep security audits and optimized SQL performance within a legacy C#/.NET environment before orchestrating a seamless migration to Salesforce. This initiative enhanced system reliability, secured sensitive patient data, and laid the groundwork for future scalability.",
            tags: ["C# / .NET", "Salesforce", "Security", "SQL Optimization"],
            icon: <Lock className="w-6 h-6 text-emerald-600" />
        },
        {
            title: "Workflow & Intelligence Tooling",
            impact: "Tooling diagnosis cutting resolution time by 60%.",
            description: "To eliminate operational bottlenecks, we designed and deployed a suite of intelligent tools using Node.js and TypeScript. We reduced claim ticket resolution times by 60%. This project transformed manual, error-prone processes into a streamlined, automated workflow backed by comprehensive unit testing and real-time analytics.",
            tags: ["Node.js", "TypeScript", "SQL", "Jira"],
            icon: <Database className="w-6 h-6 text-violet-600" />
        },
        {
            title: "Marketing Automation Platform",
            impact: "Scaled outreach to thousands of users.",
            description: "We architected a high-volume marketing automation engine capable of scaling outreach to thousands of users simultaneously. By integrating Angular-based front-ends with powerful Node.js back-ends and Salesforce, we created a seamless ecosystem for campaign management. The solution featured secure, dynamic email templating and a documented system architecture that empowered the marketing team to execute complex campaigns with precision.",
            tags: ["Angular", "Salesforce", "Node.js", "SaaS"],
            icon: <Layout className="w-6 h-6 text-amber-600" />
        },
        {
            title: "Enterprise eCommerce & B2B Architecture",
            impact: "Securing transactions and scaling high-volume commerce with confidence.",
            description: "We build sophisticated eCommerce platforms that do more than just sell online. Specializing in Shopify Plus, Magento, WooCommerce, BigCommerce, and custom B2B solutions, we create complex integrations with REST APIs and custom plugins. Our work includes optimizing checkout flows, implementing fraud detection systems, and establishing robust development workflows to ensure stability, performance, and scalability across high-volume operations.",
            tags: ["Shopify Plus", "Magento", "WooCommerce", "BigCommerce", "Custom B2B", "REST APIs", "Custom Plugins"],
            icon: <ShoppingCart className="w-6 h-6 text-rose-600" />
        },
        {
            title: "Supply Chain & Data Automation",
            impact: "Reliable ETL pipelines powering real-time operations across hundreds of large databases.",
            description: "We streamline supply chain processes by building robust ETL pipelines that ingest, transform, and deliver critical logistics data in real time. From automated ingestion of EDI files to complex data transformations, our solutions ensure accurate, timely insights for inventory management, reporting, and operational decision-making.",
            tags: ["ETL", "Data Ingestion", "Workflow Automation", "Supply Chain Intelligence", "Real-Time Analytics"],
            icon: <Server className="w-6 h-6 text-slate-600" />
        }
    ]

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
                        Selected Engagements.
                    </motion.h1>
                    <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto`}>
                        A track record of modernizing legacy systems, scaling platforms, and delivering mission-critical software for government and enterprise.
                    </p>
                </div>
            </section>

            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="p-8 md:p-12 border-gray-200 hover:border-cyan-200 transition-colors">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className={`p-4 rounded-xl ${colors.bg.secondary} border border-gray-100 shadow-sm`}>
                                        {study.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                            <h3 className={`text-2xl font-bold ${colors.text.heading}`}>
                                                {study.title}
                                            </h3>
                                        </div>

                                        <p className={`text-lg font-semibold text-cyan-700 mb-4`}>
                                            Impact: {study.impact}
                                        </p>

                                        <p className={`${colors.text.secondary} text-lg leading-relaxed mb-6`}>
                                            {study.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {study.tags.map((tag, i) => (
                                                <span key={i} className="px-4 py-1.5 bg-white border border-cyan-100 text-cyan-700 rounded-full text-sm font-semibold shadow-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            <ContactSection
                title="Start Your Project"
                subtitle="Tell us about your project goals and timeline."
                context={{ page_source: 'Work' }}
            />

            <Footer />
        </main>
    )
}
