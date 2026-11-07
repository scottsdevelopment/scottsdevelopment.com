import clsx from 'clsx'

/**
 * Page section with a left-aligned heading column and a content column.
 * Headings live in the left rail on wide screens so the content keeps a
 * readable measure; on mobile they stack.
 */
export default function Section({ id, title, lede, children, className, tone = 'paper' }) {
  const tones = {
    paper: 'bg-paper',
    white: 'bg-white',
    deep: 'bg-paper-deep',
  }
  return (
    <section id={id} className={clsx('border-t border-rule', tones[tone], className)}>
      <div className="mx-auto grid max-w-site gap-8 px-5 py-16 sm:px-8 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="md:col-span-4">
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
            {title}
          </h2>
          {lede && <p className="mt-4 max-w-prose text-[17px] leading-relaxed text-ink-soft">{lede}</p>}
        </div>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  )
}
