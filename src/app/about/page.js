import { GraduationCap, Sparkles } from 'lucide-react'
import { colors } from '../../config/colors'
import Card from '../components/ui/Card'
import Section from '../components/Section'
import Timeline from '../components/Timeline'
import Healthcare from '../components/Healthcare'
import GithubShowcase from '../components/GithubShowcase'
import ContactSection from '../components/ContactSection'
import { story, education, skills, interests, showEmployers } from '../../content/career'
import { owner } from '../../content/site'

export default function About() {
  return (
    <main className={`min-h-screen ${colors.bg.primary}`}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className={`absolute inset-0 opacity-30 ${colors.bg.gradient} blur-3xl`} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl font-bold ${colors.text.heading} mb-6`}>
            About Scott. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-600">
              The engineer behind the agents.
            </span>
          </h1>
          <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto`}>
            Fifteen-plus years of building software for e-commerce, government and healthcare, now spent directing AI agents
            and leading engineers. Based in {owner.location}.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className={`py-20 px-6 bg-white border-y ${colors.border.subtle}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold ${colors.text.heading} mb-8`}>How I got here</h2>
          {story.map((p) => (
            <p key={p.slice(0, 24)} className={`${colors.text.secondary} text-lg leading-relaxed mb-6`}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <Section
        eyebrow="Experience"
        title="Where I've worked."
        lede="The resume, in order. Agencies in Michigan, public-trust systems in Washington, D.C., and healthcare today."
      >
        <div className={`max-w-4xl mx-auto rounded-2xl ${colors.bg.secondary} border ${colors.border.subtle} p-8 md:p-12 shadow-sm`}>
          <Timeline />
          {!showEmployers && (
            <p className={`mt-8 text-sm ${colors.text.muted}`}>Employer names available on request.</p>
          )}
        </div>
      </Section>

      {/* Education and interests */}
      <section className={`py-20 px-6 bg-white border-y ${colors.border.subtle}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className={`rounded-xl w-12 h-12 flex items-center justify-center ${colors.bg.primary}`}>
                <GraduationCap className="w-6 h-6 text-cyan-600" />
              </div>
              <h2 className={`text-2xl font-bold ${colors.text.heading}`}>Education</h2>
            </div>
            <ul className="space-y-3">
              {education.map((e) => (
                <li key={e.school}>
                  <div className={`font-semibold ${colors.text.heading}`}>{e.school}</div>
                  <div className={colors.text.secondary}>
                    {e.detail} · {e.years}
                  </div>
                </li>
              ))}
            </ul>
            <p className={`mt-6 text-sm ${colors.text.muted}`}>
              Most of what I know came from shipping: the agency years, the public-trust work and the products I run.
            </p>
          </Card>
          <Card className="h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className={`rounded-xl w-12 h-12 flex items-center justify-center ${colors.bg.primary}`}>
                <Sparkles className="w-6 h-6 text-violet-600" />
              </div>
              <h2 className={`text-2xl font-bold ${colors.text.heading}`}>What I'm into now</h2>
            </div>
            <ul className={`space-y-3 ${colors.text.secondary}`}>
              {interests.map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <Section eyebrow="Skills" title="The toolbox." lede="Grouped by what they are for. If it is on this list, I have shipped with it.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((g) => (
            <Card key={g.group} className="h-full">
              <h3 className={`text-sm font-bold uppercase tracking-wider ${colors.text.accent} mb-4`}>{g.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-xs font-semibold">
                    {s}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Healthcare tone="white" />
      <GithubShowcase />

      <ContactSection
        title="Want to talk it through?"
        subtitle="Whether it is a first website or a decision your team is stuck on, I reply to every message myself."
        context={{ page_source: 'About' }}
      />
    </main>
  )
}
