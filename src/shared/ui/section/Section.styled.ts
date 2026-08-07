import styled, { css } from 'styled-components'
import { media } from '@/app/styles/mixins'

export type SectionTone = 'default' | 'sunken' | 'accent'

export const SectionRoot = styled.section<{ $tone: SectionTone }>`
  position: relative;
  padding-block: clamp(72px, 9vw, 132px);
  isolation: isolate;

  ${({ $tone }) =>
    $tone === 'sunken' &&
    css`
      background:
        radial-gradient(
          120% 70% at 50% 0%,
          rgba(168, 85, 247, 0.09) 0%,
          transparent 65%
        ),
        rgba(255, 255, 255, 0.012);
      border-block: 1px solid rgba(255, 255, 255, 0.05);
    `}

  ${({ $tone }) =>
    $tone === 'accent' &&
    css`
      background: radial-gradient(
        110% 80% at 50% 50%,
        rgba(255, 61, 190, 0.1) 0%,
        transparent 70%
      );
    `}

  ${media.sm`
    padding-block: 64px;
  `}
`

export const SectionGlow = styled.span`
  position: absolute;
  inset-inline: 0;
  top: -1px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 61, 190, 0.5),
    rgba(34, 211, 238, 0.5),
    transparent
  );
  pointer-events: none;
`
