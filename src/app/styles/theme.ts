import type { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  color: {
    bg: '#05040c',
    bgDeep: '#020106',
    surface: 'rgba(255, 255, 255, 0.028)',
    surfaceStrong: 'rgba(255, 255, 255, 0.05)',
    border: 'rgba(255, 255, 255, 0.09)',
    borderStrong: 'rgba(255, 255, 255, 0.16)',

    text: '#ECE9F6',
    textMuted: '#A49CC2',
    textFaint: '#6F6890',

    pink: '#FF3DBE',
    pinkSoft: '#FF8AD9',
    violet: '#A855F7',
    cyan: '#22D3EE',
    cyanSoft: '#7DE9FB',
    green: '#34D399',
  },

  gradient: {
    brand: 'linear-gradient(100deg, #FF3DBE 0%, #A855F7 48%, #22D3EE 100%)',
    brandSoft: 'linear-gradient(100deg, #FF8AD9 0%, #C084FC 50%, #7DE9FB 100%)',
    text: 'linear-gradient(100deg, #FFFFFF 0%, #FFC7EE 35%, #A8ECFB 100%)',
    glass:
      'linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.015) 60%)',
  },

  font: {
    display: "'Orbitron', 'Inter', system-ui, sans-serif",
    body: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', ui-monospace, 'SFMono-Regular', monospace",
  },

  radius: {
    sm: '10px',
    md: '16px',
    lg: '22px',
    xl: '30px',
    pill: '999px',
  },

  shadow: {
    glowPink: '0 0 40px rgba(255, 61, 190, 0.35)',
    glowCyan: '0 0 40px rgba(34, 211, 238, 0.3)',
    card: '0 24px 60px -30px rgba(0, 0, 0, 0.9)',
    lift: '0 34px 80px -40px rgba(168, 85, 247, 0.55)',
  },

  layout: {
    maxWidth: '1240px',
    gutter: '24px',
  },

  breakpoint: {
    sm: '560px',
    md: '820px',
    lg: '1080px',
    xl: '1320px',
  },

  transition: {
    base: '260ms cubic-bezier(0.22, 0.61, 0.36, 1)',
    slow: '600ms cubic-bezier(0.22, 0.61, 0.36, 1)',
  },
}

export type AppTheme = typeof theme
