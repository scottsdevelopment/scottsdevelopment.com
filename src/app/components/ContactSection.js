'use client'

import { useFormspree } from '../hooks/useFormspree'
import { owner } from '../../content/site'
import Button from './ui/Button'

const field =
  'w-full rounded-md border border-rule bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink-mute focus:border-moss focus:outline-none focus:ring-2 focus:ring-moss/30'

export default function ContactSection({
  title = 'Tell me what you need',
  subtitle = 'A new site, a data problem, a product that needs a second pair of hands, or just hosting. I reply to every message myself.',
  formId = 'xbljqeop',
  context = {},
}) {
  const { handleSubmit, status, submitting } = useFormspree(formId)
  const sent = status === 'Thanks for your submission!'

  return (
    <section id="contact" className="border-t border-rule bg-paper">
      <div className="mx-auto grid max-w-site gap-8 px-5 py-16 sm:px-8 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="md:col-span-4">
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-prose text-[17px] leading-relaxed text-ink-soft">{subtitle}</p>
          <p className="mt-6 text-[15px] text-ink-soft">
            Prefer email?{' '}
            <a className="link" href={`mailto:${owner.email}`}>
              {owner.email}
            </a>
          </p>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          {sent ? (
            <div role="status" className="rounded-lg border border-moss/30 bg-moss-tint p-6">
              <h3 className="font-heading text-xl font-semibold text-ink">Message sent</h3>
              <p className="mt-2 text-[15px] text-ink-soft">
                Thanks. I'll read it and get back to you, usually within a business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
              {Object.entries(context).map(([key, value]) => (
                <input key={key} type="hidden" name={key} value={value} />
              ))}

              <div>
                <label htmlFor="bottleneck" className="mb-1.5 block text-sm font-medium text-ink">
                  What's the problem you want solved?
                </label>
                <textarea
                  id="bottleneck"
                  name="bottleneck"
                  required
                  rows={3}
                  className={field}
                  placeholder="e.g. Our site is slow and nobody can find it on Google, or we have data in five places and no way to see it together."
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                    Name
                  </label>
                  <input id="name" type="text" name="name" required autoComplete="name" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input id="email" type="email" name="email" required autoComplete="email" className={field} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                  Anything else: timeline, budget, links
                </label>
                <textarea id="message" name="message" required rows={4} className={field} />
              </div>

              {status && !sent && (
                <p role="alert" className="rounded-md border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-sm text-rose-800">
                  {status}
                </p>
              )}

              <Button type="submit" variant="primary" className="px-7 py-3 text-base" disabled={submitting}>
                {submitting ? 'Sending…' : 'Send message'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
