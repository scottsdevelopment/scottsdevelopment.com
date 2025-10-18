import { colors } from '../../config/colors.dark'
import { ArticleCard } from './Card'

export default function FeaturedWork() {
  return (
    <section id="work" className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6">
          <div>
            <h2 className={`text-2xl font-semibold ${colors.text.heading}`}>Featured Case Studies</h2>
            <p className={`mt-2 ${colors.text.secondary}`}>Real-world results from government, healthcare, and enterprise modernization projects.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ArticleCard>
            <div className="flex items-center justify-between">
              <div>
                <h3 className={`text-lg font-medium ${colors.text.heading}`}>Government Web Platform Modernization – U.S. Department of Veterans Affairs</h3>
                <p className={`${colors.text.secondary} text-sm`}>Enterprise Pension Library System Development</p>
              </div>
              <div className="text-right">
                <div className={`text-3xl font-extrabold ${colors.status.success}`}>+30%</div>
                <div className={`${colors.text.secondary} text-sm`}>processing efficiency</div>
              </div>
            </div>
            <div className={`mt-4 ${colors.text.secondary} text-sm`}>Ruby on Rails + React, built modular form to PDF generation and streamlined benefit workflows.</div>
          </ArticleCard>

          <ArticleCard>
            <div className="flex items-center justify-between">
              <div>
                <h3 className={`text-lg font-medium ${colors.text.heading}`}>Healthcare Platform Modernization – PAN Foundation</h3>
                <p className={`${colors.text.secondary} text-sm`}>HIPAA-Compliant Healthcare System Development</p>
              </div>
              <div className="text-right">
                <div className={`text-2xl font-extrabold ${colors.status.success}`}>+30%</div>
                <div className={`${colors.text.secondary} text-sm`}>performance increase</div>
              </div>
            </div>
            <div className={`mt-4 ${colors.text.secondary} text-sm`}>Rebuilt critical backend services, introduced caching, concurrency improvements, and cloud-optimized architecture.</div>
          </ArticleCard>

          <ArticleCard>
            <div className="flex items-center justify-between">
              <div>
                <h3 className={`text-lg font-medium ${colors.text.heading}`}>Enterprise Security & Observability – Library of Congress</h3>
                <p className={`${colors.text.secondary} text-sm`}>Secure Government Web Application Development</p>
              </div>
              <div className="text-right">
                <div className={`text-3xl font-extrabold ${colors.status.success}`}>–25%</div>
                <div className={`${colors.text.secondary} text-sm`}>MTTR (mean time to resolution)</div>
              </div>
            </div>
            <div className={`mt-4 ${colors.text.secondary} text-sm`}>Deployed observability dashboards (Grafana, New Relic), hardened security, and AWS S3 integrations.</div>
          </ArticleCard>
        </div>
      </div>
    </section>
  )
}
