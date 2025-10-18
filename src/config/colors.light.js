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
    },
  
    // Text hierarchy
    text: {
      heading: 'text-gray-900',           // #111827 - primary heading
      body: 'text-gray-800',              // strong readable paragraph
      secondary: 'text-gray-600',         // subtext
      muted: 'text-gray-500',             // metadata / placeholders
      accent: 'text-cyan-600',            // links / callouts
      dark: 'text-white',                 // text on dark buttons
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
    },
  
    // Interactive
    interactive: {
      primary: 'text-cyan-600',
      secondary: 'text-violet-600',
      hover: 'hover:text-violet-500',
      focus: 'focus:text-cyan-600',
      disabled: 'text-gray-400',
    },
  
    // Buttons (CTA system)
    button: {
      primary:
        'bg-cyan-600 text-white hover:bg-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-1 transition-colors',
      secondary:
        'border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-1 focus:ring-gray-400',
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
  };
  
  export default colors;
  