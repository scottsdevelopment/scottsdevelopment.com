import { colors } from '../../../config/colors'
import clsx from 'clsx'

export default function Button({ children, variant = 'primary', className, ...props }) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[15px] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed'

  const variants = {
    primary: colors.button.primary,
    secondary: colors.button.secondary,
    accent: colors.button.accent,
    ghost: colors.button.ghost,
    outline: 'border border-ink/30 text-ink bg-transparent hover:border-ink hover:bg-paper-deep',
  }

  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
