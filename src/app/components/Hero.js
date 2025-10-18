import { colors } from '../../config/colors'

export default function Hero() {
  return (
    <section className="pt-12 pb-16">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Enterprise Web Development & Modernization Solutions
          </h1>
          <p className={`mt-4 ${colors.text.body} max-w-xl`}>
            We design modern, secure, and compliant web systems for mission-critical environments, built to perform and last.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className={`inline-flex items-center gap-2 rounded-md ${colors.button.primary} px-5 py-3 text-sm font-semibold shadow`}>
              Get Your Free Consultation
            </a>
            <a href="#work" className={`inline-flex items-center gap-2 rounded-md ${colors.button.secondary} px-5 py-3 text-sm`}>
              See Our Work
            </a>
          </div>

          <div
            className={`
              mt-8
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-2
              gap-4
              w-full
              max-w-md
              lg:max-w-full
              text-sm
              ${colors.text.secondary}
            `}
          >
            <div className="min-w-0">
              <div className={`${colors.text.heading} font-medium`}>Typical project</div>
              <div>6–12 weeks to MVP</div>
            </div>
            <div className="min-w-0">
              <div className={`${colors.text.heading} font-medium`}>Trusted by</div>
              <div className="flex flex-wrap gap-2 mt-2">
                <div className={`h-6 px-4 ${colors.bg.secondary} rounded text-xs flex items-center justify-center mb-1`}>
                  ENTERPRISE
                </div>
                <div className={`h-6 px-4 ${colors.bg.secondary} rounded text-xs flex items-center justify-center mb-1`}>
                  HEALTHCARE
                </div>
                <div className={`h-6 px-4 ${colors.bg.secondary} rounded text-xs flex items-center justify-center mb-1`}>
                  ECOMMERCE
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 hidden lg:block">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            {/* Gradient border thicker for visibility */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 p-[2px]" />

            {/* Inner background */}
            <div className={`relative rounded-xl ${colors.bg.secondary}`}>
              <div className="relative w-full py-4 flex items-center justify-center px-4">
                <div className={`absolute inset-0 animate-pulse opacity-20 ${colors.bg.gradient}`} />
                <div className={`relative z-10 font-mono text-sm ${colors.text.accent} rounded-lg p-4 w-full h-40 overflow-hidden ${colors.bg.secondary} backdrop-blur-sm shadow-inner`}>
                  <p>$ yarn deploy</p>
                  <p className={colors.text.muted}>→ Running integration tests...</p>
                  <p className={colors.interactive.secondary}>✓ Build completed successfully</p>
                  <p className={colors.text.accent}>✓ Deploying to AWS region us-east-1...</p>
                  <p className={colors.status.success}>✔ Live at https://yourproject.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
    </section>
  )
}
