import { css } from 'styled-components'

/** Медиазапросы «до указанной точки» — мобильный вид перекрывает десктопный. */
export const media = {
  sm: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
      ${css(...args)}
    }
  `,
  md: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
      ${css(...args)}
    }
  `,
  lg: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
      ${css(...args)}
    }
  `,
  xl: (...args: Parameters<typeof css>) => css`
    @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
      ${css(...args)}
    }
  `,
}

/** Текст, залитый градиентом. */
export const gradientText = (gradient?: string) => css`
  background: ${({ theme }) => gradient ?? theme.gradient.text};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
`

/** Стеклянная поверхность карточек и панелей. */
export const glassSurface = css`
  background: ${({ theme }) => theme.gradient.glass};
  border: 1px solid ${({ theme }) => theme.color.border};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
`

/** Тонкая градиентная рамка поверх стеклянной карточки. */
export const gradientBorder = (opacity = 0.5) => css`
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: ${({ theme }) => theme.gradient.brand};
    opacity: ${opacity};
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    mask-composite: exclude;
    pointer-events: none;
  }
`

/** Плавный кламп для типографики. */
export const fluid = (min: number, max: number, vw = 6) =>
  `clamp(${min}px, ${vw}vw, ${max}px)`

export const focusRing = css`
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.cyan};
    outline-offset: 3px;
  }
`
