import { colors } from '../../config/colors'
import { CenteredCard } from './Card'

export default function Process() {
  return (
    <section id="process" className={`py-12 border-t ${colors.border.primary}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`text-2xl font-semibold ${colors.text.heading}`}>Process (Enterprise Approach)</h2>
          <p className={`mt-2 ${colors.text.secondary}`}>
            A structured, end-to-end methodology for building secure, scalable, and high-performing applications.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <CenteredCard>
            <div className={`${colors.text.accent} font-semibold text-4xl`}>1</div>
            <h4 className={`mt-3 font-medium ${colors.text.heading}`}>Discovery & Requirements</h4>
            <p className={`mt-2 ${colors.text.secondary} text-sm`}>
              Comprehensive modeling, compliance analysis, and architecture planning to align systems with business goals.
            </p>
          </CenteredCard>
          <CenteredCard>
            <div className={`${colors.text.accent} font-semibold text-4xl`}>2</div>
            <h4 className={`mt-3 font-medium ${colors.text.heading}`}>System Design & Architecture</h4>
            <p className={`mt-2 ${colors.text.secondary} text-sm`}>
              Design modular, scalable cloud architectures, APIs, and data flows that are maintainable and resilient.
            </p>
          </CenteredCard>
          <CenteredCard>
            <div className={`${colors.text.accent} font-semibold text-4xl`}>3</div>
            <h4 className={`mt-3 font-medium ${colors.text.heading}`}>Agile Development & Security</h4>
            <p className={`mt-2 ${colors.text.secondary} text-sm`}>
              Iterative sprints with rigorous testing, code reviews, and automated quality checks to ensure robust, secure software.
            </p>
          </CenteredCard>
          <CenteredCard>
            <div className={`${colors.text.accent} font-semibold text-4xl`}>4</div>
            <h4 className={`mt-3 font-medium ${colors.text.heading}`}>Deployment, Observability & Support</h4>
            <p className={`mt-2 ${colors.text.secondary} text-sm`}>
              Seamless CI/CD rollout, real-time monitoring, incident response, and ongoing maintenance to keep applications reliable and future-ready.
            </p>
          </CenteredCard>
        </div>
      </div>
    </section>
  )
}
