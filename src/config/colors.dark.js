/**
 * Centralized Color Configuration
 * 
 * Business / SaaS / Web Development Agency Theme
 * --------------------------------------------------
 * - Professional dark-mode foundation
 * - Cyan = trust + tech
 * - Violet = innovation + creativity
 * - Accessible contrast with subtle gradients
 */

export const colors = {
    // Background layers
    bg: {
      primary: 'bg-gray-950',          // #030712 - Deep dark background
      secondary: 'bg-gray-900',        // #111827 - Surface backgrounds
      hover: 'bg-gray-800',            // #1F2937 - Hover surfaces
      elevated: 'bg-gray-800',         // Cards, modals
      overlay: 'bg-gray-950/80',       // Backdrop overlay
      accent: 'bg-cyan-500',           // #06B6D4 - CTA background
      gradient: 'bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500', // Cyan → Sky → Violet
      // Opacity variants
      primary80: 'bg-gray-950/80',     // 80% opacity for header backdrop
      secondary40: 'bg-gray-900/40',   // 40% opacity for footer
    },
  
    // Text hierarchy
    text: {
      heading: 'text-gray-900',           // Primary headings
      body: 'text-gray-300',           // Readable paragraph text
      secondary: 'text-slate-500',     // Subtext / descriptions
      muted: 'text-gray-400',          // Placeholder / metadata
      accent: 'text-cyan-400',         // Links / accents
      dark: 'text-gray-950',           // Text on light surfaces (CTA buttons)
    },
  
    // Rich content blocks
    copy: {
      primary: 'text-white',
      secondary: 'text-gray-300',
      tertiary: 'text-slate-400',
      muted: 'text-gray-400',
      accent: 'text-cyan-400',
    },
  
    // Borders
    border: {
      primary: 'border-gray-700',      // Dividers
      secondary: 'border-gray-600',    // Emphasis borders
      subtle: 'border-gray-800',       // Card outlines
      // Opacity variants
      primary60: 'border-gray-700/60',  // 60% opacity for footer border
    },
  
    // Interactive (links, hovers, focus)
    interactive: {
      primary: 'text-cyan-400',        // Default interactive color
      secondary: 'text-violet-400',    // Alternative actions
      hover: 'hover:text-violet-400',  // Hover: creative accent
      focus: 'focus:text-cyan-400',    // Focus: consistent cyan accent
      disabled: 'text-gray-500',       // Disabled / muted
    },

    // Link states (for navigation and footer links)
    link: {
      default: 'text-gray-300',
      hover: 'hover:text-white',
      focus: 'focus:text-white',
      underline: 'underline',
      underlineHover: 'hover:underline',
    },
  
    // Buttons (CTA system)
    button: {
      primary:
        'bg-cyan-500 text-gray-950 hover:bg-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 transition-colors',
      secondary:
        'border border-gray-700 text-gray-300 hover:bg-gray-800 focus:ring-1 focus:ring-gray-600',
      accent:
        'bg-violet-500 text-gray-950 hover:bg-violet-400 focus:ring-2 focus:ring-violet-400 transition-colors',
      ghost:
        'text-cyan-400 hover:text-cyan-300 hover:bg-gray-800 focus:ring-1 focus:ring-cyan-400',
      disabled:
        'bg-gray-700 text-gray-500 cursor-not-allowed',
    },
  
    // Card components
    card: {
      container:
        'bg-gray-900 border border-gray-700 rounded-2xl shadow-md',
      heading: 'text-white',
      body: 'text-slate-400',
      muted: 'text-gray-400',
      highlight: 'text-cyan-400',
    },
  
    // Section layout
    section: {
      container:
        'bg-gray-950 border-t border-gray-700',
      heading: 'text-white',
      body: 'text-slate-400',
      muted: 'text-gray-400',
      accent: 'text-cyan-400',
    },
  
    // Status indicators
    status: {
      success: 'text-emerald-400',     // #34D399
      warning: 'text-amber-400',       // #FBBF24
      error: 'text-rose-400',          // #FB7185
      info: 'text-sky-400',            // #38BDF8
    },
  
    // Highlights (banners, callouts)
    highlight: {
      primary: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20',
      secondary: 'bg-violet-500/10 text-violet-300 border border-violet-500/20',
      success: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20',
    },
  };
  
  export default colors;
  