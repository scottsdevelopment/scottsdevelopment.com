'use client'

import { motion } from 'framer-motion'
import { Check, X, Minus } from 'lucide-react'
import { colors } from '../../config/colors'

export default function FractionalEngineeringTable() {
    const features = [
        {
            name: "Cost Efficiency",
            scott: { text: "High", sub: "Pay for value", icon: Check, color: "text-emerald-600" },
            agency: { text: "Low", sub: "High overhead", icon: X, color: "text-rose-500" },
            hire: { text: "Medium", sub: "Salary + Benefits", icon: Minus, color: "text-amber-500" }
        },
        {
            name: "Onboarding Speed",
            scott: { text: "Immediate", sub: "Day 1 Impact", icon: Check, color: "text-emerald-600" },
            agency: { text: "Weeks", sub: "Contract negotiation", icon: Minus, color: "text-amber-500" },
            hire: { text: "Months", sub: "Hiring process", icon: X, color: "text-rose-500" }
        },
        {
            name: "Strategic Focus",
            scott: { text: "CTO-Level Strategy", sub: "Execution + Vision", icon: Check, color: "text-emerald-600" },
            agency: { text: "Execution Only", sub: "Task completion", icon: Minus, color: "text-amber-500" },
            hire: { text: "Varies", sub: "Role dependent", icon: Minus, color: "text-amber-500" }
        },
        {
            name: "Commitment",
            scott: { text: "Flexible", sub: "Fractional / On-demand", icon: Check, color: "text-emerald-600" },
            agency: { text: "Project-Based", sub: "Scope locked", icon: Minus, color: "text-amber-500" },
            hire: { text: "Long-term", sub: "Binding contract", icon: Minus, color: "text-amber-500" }
        }
    ]

    return (
        <div className="w-full overflow-hidden rounded-3xl shadow-xl border border-gray-200 bg-white">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="p-8 text-left w-1/4 bg-gray-50/50">
                                <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Comparison</span>
                            </th>
                            <th className="p-8 text-left w-1/4 bg-cyan-50/30 relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-violet-500"></div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-cyan-900">Scott's Development</span>
                                    <span className="text-sm font-medium text-cyan-600 mt-1">Fractional Engineering</span>
                                </div>
                            </th>
                            <th className="p-8 text-left w-1/4">
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-gray-900">Traditional Agency</span>
                                    <span className="text-sm font-medium text-gray-500 mt-1">Outsourced Teams</span>
                                </div>
                            </th>
                            <th className="p-8 text-left w-1/4">
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-gray-900">Full-Time Hire</span>
                                    <span className="text-sm font-medium text-gray-500 mt-1">In-house Senior</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {features.map((feature, index) => (
                            <motion.tr
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group hover:bg-gray-50/50 transition-colors"
                            >
                                <td className="p-8 bg-gray-50/30 group-hover:bg-gray-50/80 transition-colors">
                                    <span className="font-bold text-gray-900 text-lg">{feature.name}</span>
                                </td>

                                {/* Scott's Development Column - Highlighted */}
                                <td className="p-8 bg-cyan-50/10 group-hover:bg-cyan-50/20 transition-colors border-x border-cyan-100/50 relative">
                                    <div className="flex items-start gap-3">
                                        <div className={`mt-1 p-1 rounded-full bg-white shadow-sm ${feature.scott.color}`}>
                                            <feature.scott.icon size={16} strokeWidth={3} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 text-lg">{feature.scott.text}</div>
                                            <div className="text-sm text-cyan-700 font-medium mt-1">{feature.scott.sub}</div>
                                        </div>
                                    </div>
                                </td>

                                <td className="p-8">
                                    <div className="flex items-start gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
                                        <div className={`mt-1 p-1 rounded-full bg-gray-100 ${feature.agency.color}`}>
                                            <feature.agency.icon size={16} strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-700">{feature.agency.text}</div>
                                            <div className="text-sm text-gray-500 mt-1">{feature.agency.sub}</div>
                                        </div>
                                    </div>
                                </td>

                                <td className="p-8">
                                    <div className="flex items-start gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
                                        <div className={`mt-1 p-1 rounded-full bg-gray-100 ${feature.hire.color}`}>
                                            <feature.hire.icon size={16} strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-700">{feature.hire.text}</div>
                                            <div className="text-sm text-gray-500 mt-1">{feature.hire.sub}</div>
                                        </div>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
