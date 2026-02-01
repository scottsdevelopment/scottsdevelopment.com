'use client'

import { colors } from '../../config/colors'
import { Check, ShieldCheck, Cpu, Zap, Briefcase } from 'lucide-react'

export default function AgencyAlternative() {
    return (
        <section className={`py-16 ${colors.bg.primary} border-y ${colors.border.subtle}`}>
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className={`text-3xl font-bold ${colors.text.heading} mb-6`}>
                            The <strong>Technical Adult</strong> for Your Detroit Business.
                        </h2>
                        <p className={`${colors.text.secondary} text-lg mb-8 leading-relaxed`}>
                            We are not junior devs learning on your dime. We are <strong>Principal Architects</strong> who work while your competition sleeps. We specialize in 10–20 hour fractional engagements, delivering the kind of precision and impact that usually requires a $200k/year executive.
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="mt-1 text-cyan-600 font-bold">01.</div>
                                <p className={`${colors.text.secondary}`}><strong>Revenue Over Tickets:</strong> We don't just clear backlogs; we identify the features that actually move your North Star metrics.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-cyan-600 font-bold">02.</div>
                                <p className={`${colors.text.secondary}`}><strong>Engineering Ceremony:</strong> We bring structure to <strong>vibe-coded</strong> startups, ensuring context is never lost and code remains an asset, not a liability.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-cyan-600 font-bold">03.</div>
                                <p className={`${colors.text.secondary}`}><strong>Extreme Reliability:</strong> Our reputation is built on rescuing multi-million dollar projects on the brink of failure and turning them into scalable platforms.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group max-w-4xl mx-auto">
                        <div className={`absolute -inset-1 ${colors.bg.gradient} rounded-3xl blur-xl opacity-20`}></div>

                        <div className={`relative ${colors.bg.secondary} border ${colors.border.primary} rounded-2xl overflow-hidden shadow-2xl`}>
                            <div className="grid grid-cols-1 md:grid-cols-4">

                                <div className={`${colors.bg.primary} border-r ${colors.border.subtle} p-8 flex flex-col justify-center items-center text-center`}>
                                    <div className={`text-4xl font-black ${colors.text.heading} mb-1`}>20x</div>
                                    <div className={`text-[10px] uppercase tracking-[0.2em] font-bold ${colors.text.accent} mb-4`}>Delivery Velocity</div>
                                    <div className={`h-px w-8 ${colors.border.primary} bg-gray-200 mb-4`}></div>
                                    <div className={`text-xs ${colors.text.muted} font-medium leading-relaxed`}>
                                        Proprietary agentic workflows built for 2026 scale.
                                    </div>
                                </div>

                                <div className="md:col-span-3 p-8 md:p-10">
                                    <h3 className={`text-2xl md:text-3xl font-bold ${colors.text.heading} mb-4 tracking-tight`}>
                                        Turning stalled technical debt into <span className={`${colors.text.accent}`}>production-ready assets.</span>
                                    </h3>

                                    <p className={`${colors.text.secondary} text-lg leading-relaxed mb-8`}>
                                        We specialize in salvaging enterprise platforms that have lost momentum. By purging critical debt and re-introducing architectural ceremony, we transform failing development cycles into secure, high-velocity launches.
                                    </p>

                                    <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8 border-t ${colors.border.subtle}`}>
                                        <a href="/contact/" className={`group/btn inline-flex items-center gap-2 ${colors.text.heading} font-bold hover:${colors.text.accent} transition-colors`}>
                                            <span>Claim your 1-hour Technical Audit</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className={`py-5 px-6 text-sm uppercase tracking-wider font-semibold ${colors.text.secondary}`}>Feature</th>
                                    <th className={`py-5 px-6 text-sm uppercase tracking-wider font-semibold ${colors.text.secondary}`}>Local Ferndale Agencies</th>
                                    <th className={`py-5 px-6 text-sm uppercase tracking-wider font-bold ${colors.text.heading} bg-cyan-50 border-l border-cyan-100`}>Scott’s Development</th>
                                </tr>
                            </thead>
                            <tbody className={`text-base ${colors.text.body}`}>
                                <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                    <td className="py-5 px-6 font-medium text-gray-900">Primary Talent</td>
                                    <td className="py-5 px-6 text-red-500/80">Junior/Mid-level Devs</td>
                                    <td className="py-5 px-6 font-bold text-emerald-600 bg-cyan-50/30 border-l border-cyan-100">Principal Architect</td>
                                </tr>
                                <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                    <td className="py-5 px-6 font-medium text-gray-900">Availability</td>
                                    <td className="py-5 px-6">9-5 Gatekeepers</td>
                                    <td className="py-5 px-6 font-bold text-emerald-600 bg-cyan-50/30 border-l border-cyan-100">Asynchronous / On-Demand</td>
                                </tr>
                                <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                    <td className="py-5 px-6 font-medium text-gray-900">Outcome</td>
                                    <td className="py-5 px-6">Code Completion</td>
                                    <td className="py-5 px-6 font-bold text-emerald-600 bg-cyan-50/30 border-l border-cyan-100">Revenue & Scalability</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
