/**
 * Centralized Color Configuration
 * 
 * Business / SaaS / Web Development Agency Theme (Light Mode)
 * --------------------------------------------------
 * - Professional light-mode base for resumes, marketing, and client-facing UIs
 * - Cyan = trust + tech
 * - Violet = innovation + creativity
 * - Softer neutrals and subtle contrast
 */

export const colors = {
  // Background layers
  bg: {
    primary: 'bg-gray-50',              // #F9FAFB - clean page background
    secondary: 'bg-white',              // #FFFFFF - cards, elevated surfaces
    hover: 'bg-gray-100',               // #F3F4F6 - hover effects
    elevated: 'bg-white',               // for modals / card layers
    overlay: 'bg-gray-900/50',          // subtle dark overlay for modals
    accent: 'bg-cyan-600',              // CTA background (trust + energy)
    gradient: 'bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500', // same brand energy
    // Opacity variants
    primary80: 'bg-white/80',           // 80% opacity for header backdrop
    secondary40: 'bg-gray-50/40',       // 40% opacity for footer
    header: 'bg-white/80',              // Clean glassmorphism header
    footer: 'bg-slate-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]', // Deeper anchor (slate-200)
    contrast: 'bg-gray-50',             // Subtle contrast
    dark: 'bg-slate-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)]',   // Mid-tone step (slate-100) vs gray-50
    contrastBrand: 'bg-cyan-50',        // Brand colored section background
    warningLight: 'bg-amber-50',        // Light warning background
    successLight: 'bg-emerald-50',      // Light success background
    infoLight: 'bg-sky-50',             // Light info background
    subtle: 'bg-gray-100',              // Subtle background (placeholders)
    overlayBrand: 'bg-cyan-900/10',     // Brand tinted overlay
  },

  // Text hierarchy
  text: {
    heading: 'text-gray-900',           // #111827 - primary heading
    body: 'text-gray-800',              // strong readable paragraph
    secondary: 'text-gray-600',         // subtext
    muted: 'text-gray-500',             // metadata / placeholders
    accent: 'text-cyan-600',            // links / callouts
    dark: 'text-white',                 // text on dark buttons
    inverse: 'text-gray-900',           // text on contrast backgrounds
    inverseSecondary: 'text-gray-600',  // secondary text on contrast backgrounds
    onDark: 'text-slate-900',           // text on emphasis background
    onDarkSecondary: 'text-slate-600',  // secondary text on emphasis background
  },

  // Rich content blocks
  copy: {
    primary: 'text-gray-900',
    secondary: 'text-gray-700',
    tertiary: 'text-gray-600',
    muted: 'text-gray-500',
    accent: 'text-cyan-600',
  },

  // Borders
  border: {
    primary: 'border-gray-200',         // light dividers
    secondary: 'border-gray-300',       // stronger emphasis
    subtle: 'border-gray-100',          // card outlines
    // Opacity variants
    primary60: 'border-gray-200/60',    // 60% opacity for footer border
    inverse: 'border-gray-300',         // border for contrast backgrounds
    onDark: 'border-slate-200',         // border for emphasis backgrounds
    accent: 'border-cyan-500',          // brand emphasis borders
    warning: 'border-amber-400',        // warning borders
    success: 'border-emerald-400',      // success borders
    info: 'border-sky-400',             // info borders
  },

  // Interactive
  interactive: {
    primary: 'text-cyan-600',
    secondary: 'text-violet-600',
    hover: 'hover:text-violet-500',
    primaryHover: 'hover:text-cyan-500',
    focus: 'focus:text-cyan-600',
    disabled: 'text-gray-400',
  },

  // Link states (for navigation and footer links)
  link: {
    default: 'text-gray-500',
    hover: 'hover:text-gray-900',
    focus: 'focus:text-gray-900',
    underline: 'underline',
    underlineHover: 'hover:underline',
    inverse: 'text-gray-600',
    inverseHover: 'hover:text-gray-900',
  },

  // Buttons (CTA system)
  button: {
    primary:
      'bg-cyan-600 text-white hover:bg-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-1 transition-colors',
    secondary:
      'bg-gray-900 text-white hover:bg-gray-800 focus:ring-1 focus:ring-gray-900 shadow-sm',
    accent:
      'bg-violet-600 text-white hover:bg-violet-500 focus:ring-2 focus:ring-violet-500 transition-colors',
    ghost:
      'text-cyan-600 hover:text-cyan-500 hover:bg-gray-100 focus:ring-1 focus:ring-cyan-500',
    disabled:
      'bg-gray-100 text-gray-400 cursor-not-allowed',
  },

  // Card components
  card: {
    container:
      'bg-white border border-gray-200 rounded-2xl shadow-sm',
    heading: 'text-gray-900',
    body: 'text-gray-700',
    muted: 'text-gray-500',
    highlight: 'text-cyan-600',
  },

  // Section layout
  section: {
    container:
      'bg-gray-50 border-t border-gray-200',
    heading: 'text-gray-900',
    body: 'text-gray-700',
    muted: 'text-gray-500',
    accent: 'text-cyan-600',
  },

  // Status indicators
  status: {
    success: 'text-emerald-600',       // #059669
    warning: 'text-amber-600',         // #D97706
    error: 'text-rose-600',            // #E11D48
    info: 'text-sky-600',              // #0284C7
  },

  // Highlights (banners, callouts)
  highlight: {
    primary: 'bg-cyan-50 text-cyan-700 border border-cyan-100',
    secondary: 'bg-violet-50 text-violet-700 border border-violet-100',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
  },

  // Brand specifics
  brand: {
    bullet: 'bg-cyan-500',
  },

  // Feature specific themes
  features: {
    design: { bg: 'bg-blue-50', text: 'text-blue-600' },
    ai: { bg: 'bg-purple-50', text: 'text-purple-600' },
    marketing: { bg: 'bg-pink-50', text: 'text-pink-600' },
  },
};

export default colors;
