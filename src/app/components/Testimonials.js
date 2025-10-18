import { colors } from '../../config/colors'
import { BlockquoteCard } from './Card'

export default function Testimonials() {
  return (
    <section id="testimonials" className={`py-12 border-t ${colors.border.primary}`}>
      <div className="mx-auto max-w-7xl px-6">
        <h2 className={`text-2xl font-semibold text-center ${colors.text.heading}`}>Testimonials / Client Feedback</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <BlockquoteCard>
            <p className={colors.text.body}>"Scott's team modernized our legacy C# systems and delivered a 30% performance boost while preserving full compliance — the migration was seamless."</p>
            <footer className={`mt-4 text-sm ${colors.text.secondary}`}>— Technical Director, PAN Foundation</footer>
          </BlockquoteCard>

          <BlockquoteCard>
            <p className={colors.text.body}>"The pension library modernization exceeded expectations. Their architecture and execution are top-tier."</p>
            <footer className={`mt-4 text-sm ${colors.text.secondary}`}>— Program Manager, U.S. Department of Veterans Affairs</footer>
          </BlockquoteCard>

          <BlockquoteCard>
            <p className={colors.text.body}>"Observability dashboards and security hardening cut MTTR by 25%. Their AWS design significantly improved our data integrity."</p>
            <footer className={`mt-4 text-sm ${colors.text.secondary}`}>— IT Director, Library of Congress</footer>
          </BlockquoteCard>
        </div>
      </div>
    </section>
  )
}
