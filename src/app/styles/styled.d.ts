import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      bg: string
      bgDeep: string
      surface: string
      surfaceStrong: string
      border: string
      borderStrong: string
      text: string
      textMuted: string
      textFaint: string
      pink: string
      pinkSoft: string
      violet: string
      cyan: string
      cyanSoft: string
      green: string
    }
    gradient: {
      brand: string
      brandSoft: string
      text: string
      glass: string
    }
    font: {
      display: string
      body: string
      mono: string
    }
    radius: {
      sm: string
      md: string
      lg: string
      xl: string
      pill: string
    }
    shadow: {
      glowPink: string
      glowCyan: string
      card: string
      lift: string
    }
    layout: {
      maxWidth: string
      gutter: string
    }
    breakpoint: {
      sm: string
      md: string
      lg: string
      xl: string
    }
    transition: {
      base: string
      slow: string
    }
  }
}
