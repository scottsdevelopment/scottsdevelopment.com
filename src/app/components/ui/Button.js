import { colors } from '../../../config/colors'
import clsx from 'clsx'

export default function Button({
    children,
    variant = 'primary',
    className,
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200"

    const variants = {
        primary: colors.button.primary,
        secondary: colors.button.secondary,
        accent: colors.button.accent,
        ghost: colors.button.ghost,
        outline: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50",
    }

    return (
        <button
            className={clsx(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    )
}
