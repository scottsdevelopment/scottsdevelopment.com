import { colors } from '../../config/colors'
import Link from 'next/link'
import Card from '../components/ui/Card'
import ContactSection from '../components/ContactSection'

export const metadata = {
    title: 'Blog | Scott’s Development',
    description: 'Insights on software architecture, fractional CTO leadership, and the future of web development.',
}

export default function BlogListing() {
    const articles = [
        {
            slug: 'rapid-vertical-validation-ferndale-seasonal',
            title: 'From Blizzard to Business: Validating Vertical SaaS in 48 Hours',
            summary: 'How we used LLMs and agentic workflows to architect, build, and monetize a service brand over a single weekend. A case study in rapid vertical validation.',
            date: 'January 28, 2026',
            readTime: '12 min read'
        },
        {
            slug: 'why-vibe-coding-isnt-enough',
            title: 'Why Vibe Coding Isn\'t Enough: The Case for the Fractional CTO in 2026',
            summary: 'Ferndale veteran dev Scott explains why Detroit businesses need more than just no-code tools. Learn how to leverage a Fractional CTO for 20x growth in 2026.',
            date: 'February 1, 2026',
            readTime: '8 min read'
        }
    ]

    return (
        <main className={`min-h-screen ${colors.bg.primary}`}>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-[600px] opacity-30 ${colors.bg.gradient} blur-3xl`} />
                <div className="relative max-w-7xl mx-auto text-center">
                    <h1 className={`text-5xl sm:text-6xl font-extrabold ${colors.text.heading} mb-6 leading-tight`}>
                        Insights & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600">Architecture.</span>
                    </h1>
                    <p className={`text-xl ${colors.text.secondary} max-w-2xl mx-auto`}>
                        Thoughts on building scalable systems, leading high-performance teams, and the future of software.
                    </p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-12 px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => (
                            <Link key={article.slug} href={`/blog/${article.slug}`} className="block h-full group">
                                <Card className="h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-cyan-500/10 hover:border-cyan-200">
                                    <div className="flex flex-col h-full">
                                        <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
                                            <span>{article.date}</span>
                                            <span>{article.readTime}</span>
                                        </div>

                                        <h2 className={`text-2xl font-bold ${colors.text.heading} mb-4 group-hover:text-cyan-600 transition-colors`}>
                                            {article.title}
                                        </h2>

                                        <p className={`${colors.text.secondary} mb-6 flex-grow leading-relaxed`}>
                                            {article.summary}
                                        </p>

                                        <div className={`mt-auto font-medium text-cyan-600 flex items-center gap-2 group-hover:gap-3 transition-all`}>
                                            Read Article
                                            <span className="text-lg">→</span>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <div className="border-t border-gray-100">
                <ContactSection
                    title="Start building better today."
                    subtitle="Let's discuss your engineering challenges."
                    context={{ page_source: 'Blog Listing' }}
                />
            </div>
        </main>
    )
}
