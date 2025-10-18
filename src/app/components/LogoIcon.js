import { colors } from '../../config/colors.dark'

export default function LogoIcon({ size = 'w-10 h-10', className = '' }) {
  return (
    <div className={`${size} rounded-lg ${colors.bg.gradient} flex items-center justify-center ${colors.text.dark} font-bold ${className}`}>
      S
    </div>
  )
}
