import styled, { keyframes } from 'styled-components'
import { gradientText, media } from '@/app/styles/mixins'

const sweep = keyframes`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`

const ring = keyframes`
  0%   { transform: scale(0.85); opacity: 0.7; }
  100% { transform: scale(1.6); opacity: 0; }
`

export const Panel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  padding: clamp(40px, 7vw, 84px) clamp(22px, 5vw, 64px);
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
  text-align: center;
  background:
    radial-gradient(
      90% 130% at 50% 0%,
      rgba(255, 61, 190, 0.22),
      transparent 62%
    ),
    radial-gradient(
      80% 110% at 100% 100%,
      rgba(34, 211, 238, 0.18),
      transparent 60%
    ),
    rgba(9, 7, 20, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 50px 120px -60px rgba(255, 61, 190, 0.9);
`

export const PanelBorder = styled.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    100deg,
    #ff3dbe,
    #a855f7,
    #22d3ee,
    #a855f7,
    #ff3dbe
  );
  background-size: 200% 100%;
  animation: ${sweep} 7s linear infinite;
  opacity: 0.65;
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  mask-composite: exclude;
  pointer-events: none;
`

export const Pulse = styled.span`
  position: relative;
  display: grid;
  place-items: center;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  color: #fff;
  background: ${({ theme }) => theme.gradient.brand};
  box-shadow: 0 18px 44px -18px rgba(255, 61, 190, 1);

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 1px solid rgba(255, 61, 190, 0.6);
    animation: ${ring} 2.8s ease-out infinite;
  }

  &::after {
    animation-delay: 1.4s;
  }
`

export const Title = styled.h2`
  font-size: clamp(28px, 5.4vw, 52px);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.03em;
  ${gradientText()}
`

export const Text = styled.p`
  max-width: 56ch;
  font-size: clamp(15px, 1.8vw, 18px);
  line-height: 1.65;
  color: ${({ theme }) => theme.color.textMuted};
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  width: 100%;

  ${media.sm`
    flex-direction: column;
  `}
`

export const Meta = styled.p`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textFaint};
`
