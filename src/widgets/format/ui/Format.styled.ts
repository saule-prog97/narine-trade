import styled from 'styled-components'
import { media } from '@/app/styles/mixins'
import { GlowCardRoot } from '@/shared/ui/glow-card'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  ${media.lg`
    grid-template-columns: minmax(0, 1fr);
  `}

  ${GlowCardRoot} {
    height: 100%;
    gap: 16px;
  }
`

export const CardShell = styled.div`
  height: 100%;
`

export const IconBox = styled.span`
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  border-radius: 16px;
  color: #fff;
  background: ${({ theme }) => theme.gradient.brand};
  box-shadow: 0 16px 34px -18px rgba(255, 61, 190, 0.95);
`

export const Kicker = styled.span`
  display: block;
  margin-bottom: 7px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.cyan};
`

export const Title = styled.h3`
  font-size: clamp(19px, 2.2vw, 22px);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
`

export const Text = styled.p`
  font-size: 15px;
  line-height: 1.65;
  color: ${({ theme }) => theme.color.textMuted};
`

export const StepIndex = styled.span`
  position: absolute;
  top: 20px;
  right: 24px;
  font-family: ${({ theme }) => theme.font.display};
  font-size: 42px;
  font-weight: 800;
  line-height: 1;
  color: rgba(255, 255, 255, 0.05);
  pointer-events: none;
`
