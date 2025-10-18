import { colors } from '../../config/colors'

/**
 * Reusable Card Component
 * 
 * A flexible card component that handles the common card patterns used throughout the application.
 * Supports different semantic elements, styling variants, and content layouts.
 */
export default function Card({ 
  children, 
  as = 'div', 
  variant = 'default',
  className = '',
  ...props 
}) {
  // Base card classes
  const baseClasses = `p-6 rounded-lg border ${colors.card.container}`
  
  // Variant-specific classes
  const variantClasses = {
    default: '',
    centered: 'text-center',
    elevated: 'shadow-md',
    interactive: 'hover:shadow-md transition-shadow cursor-pointer'
  }
  
  // Combine all classes
  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim()
  
  // Render with the specified semantic element
  const Component = as
  
  return (
    <Component className={cardClasses} {...props}>
      {children}
    </Component>
  )
}

// Export common card variants for convenience
export function ArticleCard({ children, ...props }) {
  return <Card as="article" {...props}>{children}</Card>
}

export function BlockquoteCard({ children, ...props }) {
  return <Card as="blockquote" {...props}>{children}</Card>
}

export function CenteredCard({ children, ...props }) {
  return <Card variant="centered" {...props}>{children}</Card>
}

export function InteractiveCard({ children, ...props }) {
  return <Card variant="interactive" {...props}>{children}</Card>
}
