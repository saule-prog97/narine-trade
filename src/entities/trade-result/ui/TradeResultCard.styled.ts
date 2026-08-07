import styled, { css, keyframes } from 'styled-components'
import { media } from '@/app/styles/mixins'
import { GlowCardRoot } from '@/shared/ui/glow-card'

const drawLine = keyframes`
  to { stroke-dashoffset: 0; }
`

export const CardShell = styled.div`
  height: 100%;

  ${GlowCardRoot} {
    height: 100%;
    gap: 18px;
    background: linear-gradient(
      160deg,
      rgba(52, 211, 153, 0.08) 0%,
      rgba(255, 255, 255, 0.015) 55%
    );
  }
`

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
`

export const Exchange = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textFaint};
`

export const Tags = styled.div`
  display: flex;
  gap: 7px;
`

export const Tag = styled.span<{ $accent?: boolean }>`
  padding: 4px 11px;
  border-radius: ${({ theme }) => theme.radius.pill};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;

  ${({ $accent, theme }) =>
    $accent
      ? css`
          color: ${theme.color.green};
          background: rgba(52, 211, 153, 0.12);
          border: 1px solid rgba(52, 211, 153, 0.32);
        `
      : css`
          color: ${theme.color.textMuted};
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid ${theme.color.border};
        `}
`

export const Pair = styled.h3`
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(22px, 2.6vw, 28px);
  font-weight: 700;
  letter-spacing: 0.02em;
`

export const Roi = styled.p`
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(34px, 5.4vw, 50px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.green};
  text-shadow: 0 0 34px rgba(52, 211, 153, 0.45);
  font-variant-numeric: tabular-nums;
`

export const Chart = styled.svg`
  width: 100%;
  height: 76px;
  overflow: visible;
`

export const ChartPath = styled.path<{ $inView: boolean }>`
  fill: none;
  stroke: ${({ theme }) => theme.color.green};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 420;
  stroke-dashoffset: 420;
  filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.65));

  ${({ $inView }) =>
    $inView &&
    css`
      animation: ${drawLine} 1.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    stroke-dashoffset: 0;
  }
`

export const ChartArea = styled.path<{ $inView: boolean }>`
  fill: url(#roi-area);
  stroke: none;
  opacity: 0;
  transition: opacity 900ms ease 700ms;

  ${({ $inView }) =>
    $inView &&
    css`
      opacity: 1;
    `}
`

export const Prices = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.color.border};

  ${media.sm`
    gap: 10px;
  `}
`

export const PriceLabel = styled.dt`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textFaint};
`

export const PriceValue = styled.dd`
  margin-top: 4px;
  font-size: 17px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({ theme }) => theme.color.text};
`
