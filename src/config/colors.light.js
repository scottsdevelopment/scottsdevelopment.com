/**
 * Centralized Color Configuration (light theme)
 *
 * Tokens are Tailwind class strings so older pages (blog posts, FAQ) pick up
 * the palette without being rewritten. The palette itself lives in
 * tailwind.config.js: ink (text), paper (page), moss (single accent).
 */

export const colors = {
  // Background layers
  bg: {
    primary: 'bg-paper',
    secondary: 'bg-white',
    hover: 'bg-paper-deep',
    elevated: 'bg-white',
    overlay: 'bg-ink/50',
    accent: 'bg-moss',
    gradient: 'bg-gradient-to-br from-moss-tint via-paper to-paper',
    primary80: 'bg-paper/80',
    secondary40: 'bg-paper/40',
    header: 'bg-paper/90',
    footer: 'bg-ink',
    contrast: 'bg-paper-deep',
    dark: 'bg-paper-deep',
    contrastBrand: 'bg-moss-tint',
    warningLight: 'bg-amber-50',
    successLight: 'bg-emerald-50',
    infoLight: 'bg-sky-50',
    subtle: 'bg-paper-deep',
    overlayBrand: 'bg-moss/10',
  },

  // Text hierarchy
  text: {
    heading: 'text-ink',
    body: 'text-ink-soft',
    secondary: 'text-ink-soft',
    muted: 'text-ink-mute',
    accent: 'text-moss',
    dark: 'text-white',
    inverse: 'text-ink',
    inverseSecondary: 'text-ink-soft',
    onDark: 'text-ink',
    onDarkSecondary: 'text-ink-soft',
  },

  // Rich content blocks
  copy: {
    primary: 'text-ink',
    secondary: 'text-ink-soft',
    tertiary: 'text-ink-soft',
    muted: 'text-ink-mute',
    accent: 'text-moss',
  },

  // Borders
  border: {
    primary: 'border-rule',
    secondary: 'border-ink-mute',
    subtle: 'border-rule',
    primary60: 'border-rule/60',
    inverse: 'border-rule',
    onDark: 'border-rule',
    accent: 'border-moss',
    warning: 'border-amber-400',
    success: 'border-emerald-400',
    info: 'border-sky-400',
  },

  // Interactive
  interactive: {
    primary: 'text-moss',
    secondary: 'text-moss-deep',
    hover: 'hover:text-moss-deep',
    primaryHover: 'hover:text-moss-deep',
    focus: 'focus:text-moss-deep',
    disabled: 'text-ink-mute',
  },

  // Link states
  link: {
    default: 'text-ink-soft',
    hover: 'hover:text-ink',
    focus: 'focus:text-ink',
    underline: 'underline',
    underlineHover: 'hover:underline',
    inverse: 'text-ink-soft',
    inverseHover: 'hover:text-ink',
  },

  // Buttons
  button: {
    primary:
      'bg-ink text-paper hover:bg-moss-deep focus:ring-2 focus:ring-moss focus:ring-offset-2 transition-colors',
    secondary:
      'bg-moss text-white hover:bg-moss-deep focus:ring-2 focus:ring-moss focus:ring-offset-2 transition-colors',
    accent:
      'bg-moss text-white hover:bg-moss-deep focus:ring-2 focus:ring-moss transition-colors',
    ghost:
      'text-moss hover:text-moss-deep hover:bg-paper-deep focus:ring-1 focus:ring-moss',
    disabled: 'bg-paper-deep text-ink-mute cursor-not-allowed',
  },

  // Card components
  card: {
    container: 'bg-white border border-rule rounded-lg',
    heading: 'text-ink',
    body: 'text-ink-soft',
    muted: 'text-ink-mute',
    highlight: 'text-moss',
  },

  // Section layout
  section: {
    container: 'bg-paper border-t border-rule',
    heading: 'text-ink',
    body: 'text-ink-soft',
    muted: 'text-ink-mute',
    accent: 'text-moss',
  },

  // Status indicators
  status: {
    success: 'text-emerald-700',
    warning: 'text-amber-700',
    error: 'text-rose-700',
    info: 'text-sky-700',
  },

  // Highlights (banners, callouts)
  highlight: {
    primary: 'bg-moss-tint text-moss-deep border border-moss/20',
    secondary: 'bg-paper-deep text-ink border border-rule',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-100',
  },

  // Brand specifics
  brand: {
    bullet: 'bg-moss',
  },

  // Feature specific themes
  features: {
    design: { bg: 'bg-moss-tint', text: 'text-moss-deep' },
    ai: { bg: 'bg-paper-deep', text: 'text-ink' },
    marketing: { bg: 'bg-amber-50', text: 'text-amber-700' },
  },
};

export default colors;
