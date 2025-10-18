import { colors } from '../../config/colors'
import { ArticleCard } from './Card'

export default function Services() {
  return (
    <section id="services" className={`py-12 border-t ${colors.border.primary}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`text-2xl font-semibold ${colors.text.heading}`}>Service Pillars / Capabilities</h2>
          <p className={`mt-2 ${colors.text.secondary}`}>Comprehensive enterprise development services designed for mission-critical environments.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ArticleCard>
            <div className="flex items-start gap-4">
              <div className={`rounded-md p-2 ${colors.bg.secondary}`}>
                <svg className={`h-6 w-6 ${colors.text.accent}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10M21 7v10M7 7h10v10H7z"/>
                </svg>
              </div>
              <div>
                <h3 className={`text-lg font-medium ${colors.text.heading}`}>Custom Enterprise Web Solutions</h3>
                <p className={`mt-1 ${colors.text.secondary} text-sm`}>
                  We deliver custom enterprise web solutions, cloud-native architectures, and scalable platforms optimized for long-term business growth. From high-availability systems to complex APIs and data pipelines, our solutions ensure performance, reliability, and adaptability. Whether optimizing existing infrastructure or building new systems from the ground up, we create technology that grows with your business and supports long-term success.
                </p>
              </div>
            </div>
          </ArticleCard>

          <ArticleCard>
            <div className="flex items-start gap-4">
              <div className={`rounded-md p-2 ${colors.bg.secondary}`}>
                <svg className={`h-6 w-6 ${colors.text.accent}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18"/>
                </svg>
              </div>
              <div>
                <h3 className={`text-lg font-medium ${colors.text.heading}`}>Legacy System Modernization & Migration</h3>
                <p className={`mt-1 ${colors.text.secondary} text-sm`}>We revitalize legacy systems—C#, PHP, Java, and other platforms—using Node.js, Next.js, Django, and microservices for scalable, maintainable web applications. The result: faster, more secure, maintainable, and readable systems built to grow with your business.</p>
              </div>
            </div>
          </ArticleCard>

          <ArticleCard>
            <div className="flex items-start gap-4">
              <div className={`rounded-md p-2 ${colors.bg.secondary}`}>
                <svg className={`h-6 w-6 ${colors.text.accent}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className={`text-lg font-medium ${colors.text.heading}`}>Compliant App Development & Security</h3>
                <p className={`mt-1 ${colors.text.secondary} text-sm`}>We build robust web and mobile applications while ensuring HIPAA, PCI, SOC2, and other relevant compliance standards are met. Our systems are secure, audit-ready, and designed with up-to-date best practices, delivering platforms that are both reliable and engaging for your users.</p>
              </div>
            </div>
          </ArticleCard>

          <ArticleCard>
            <div className="flex items-start gap-4">
              <div className={`rounded-md p-2 ${colors.bg.secondary}`}>
                <svg className={`h-6 w-6 ${colors.text.accent}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                </svg>
              </div>
              <div>
                <h3 className={`text-lg font-medium ${colors.text.heading}`}>AI-Powered Automation & GPT Pipelines</h3>
                <p className={`mt-1 ${colors.text.secondary} text-sm`}>
                  Leverage AI-powered automation and GPT pipelines to automate workflows, streamline processes, and enhance decision-making. Combined with cloud-native infrastructure—containerization, Kubernetes, serverless architectures, and real-time systems—we deliver scalable, reliable, and intelligent platforms that boost productivity and future-proof your systems.
                </p>
              </div>
            </div>
          </ArticleCard>
        </div>
      </div>
    </section>
  )
}
