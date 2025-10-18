import { colors } from '../../config/colors'

export default function Intro() {
  return (
    <section className={`py-12 border-t ${colors.border.primary}`}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className={`text-lg ${colors.text.body} leading-relaxed`}>
          We build modern, secure, and compliant web applications for organizations where reliability, security, and compliance matter. Whether modernizing legacy systems or developing solutions from the ground up, we deliver scalable, resilient systems engineered for long-term performance.
          </p>
        </div>
      </div>
    </section>
  )
}
