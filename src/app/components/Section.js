import clsx from 'clsx'
import { colors } from '../../config/colors'

/**
 * Standard page section in the current site's style: centered heading and
 * subtitle, max-w-7xl content, alternating gray-50 / white backgrounds.
 */
export default function Section({ id, eyebrow, title, lede, children, tone = 'primary', className }) {
  const tones = {
    primary: colors.bg.primary,
    white: `bg-white border-y ${colors.border.subtle}`,
    dark: colors.bg.dark,
  }
  return (
    <section id={id} className={clsx('py-24 px-6', tones[tone], className)}>
      <div className="mx-auto max-w-7xl">
        {(title || lede) && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            {eyebrow && (
              <div className={`text-sm font-bold uppercase tracking-wider ${colors.text.accent} mb-3`}>{eyebrow}</div>
            )}
            {title && (
              <h2 className={`text-3xl sm:text-4xl font-bold ${colors.text.heading} mb-4 font-heading`}>{title}</h2>
            )}
            {lede && <p className={`text-xl ${colors.text.secondary}`}>{lede}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
