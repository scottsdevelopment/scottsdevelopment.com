import { colors } from '../../config/colors'
import { timeline, showEmployers } from '../../content/career'

/**
 * Career timeline. Employer names show only while `showEmployers` is true
 * (owner to confirm); entries flagged `unnamed` never show one.
 */
export default function Timeline({ items = timeline, compact = false }) {
  const list = compact ? items.slice(0, 4) : items
  return (
    <ol className="relative border-l-2 border-cyan-200 ml-3 md:ml-0">
      {list.map((t, i) => {
        const name = t.unnamed || !showEmployers ? null : t.employer
        return (
          <li key={`${t.start}-${i}`} className="relative pl-8 pb-10 last:pb-0">
            <span
              className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 ring-4 ring-white"
              aria-hidden="true"
            />
            <div className={`text-sm font-bold tracking-wider ${colors.text.accent}`}>
              {t.start} – {t.end}
            </div>
            <h3 className={`mt-1 text-lg font-bold ${colors.text.heading}`}>
              {t.role}
              {name && <span className={`font-medium ${colors.text.secondary}`}>, {name}</span>}
              {!name && t.unnamed && <span className={`font-medium ${colors.text.secondary}`}>, {t.employer}</span>}
            </h3>
            <div className={`text-sm ${colors.text.muted}`}>{t.location}</div>
            {!compact && <p className={`mt-3 ${colors.text.secondary} leading-relaxed max-w-3xl`}>{t.summary}</p>}
            {!compact && t.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {t.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </li>
        )
      })}
    </ol>
  )
}
