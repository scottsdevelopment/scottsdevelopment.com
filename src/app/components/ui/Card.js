import { colors } from '../../../config/colors'
import clsx from 'clsx'

export default function Card({ children, className, ...props }) {
    return (
        <div
            className={clsx(
                colors.card.container,
                "p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
