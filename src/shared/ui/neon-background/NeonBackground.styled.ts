import styled, { keyframes } from 'styled-components'
import { media } from '@/app/styles/mixins'

const drift = keyframes`
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  33%  { transform: translate3d(6%, -4%, 0) scale(1.08); }
  66%  { transform: translate3d(-5%, 5%, 0) scale(0.96); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
`

const scan = keyframes`
  from { transform: translateY(-100%); }
  to   { transform: translateY(100%); }
`

export const BackdropRoot = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background:
    radial-gradient(
      120% 80% at 50% -10%,
      rgba(168, 85, 247, 0.16) 0%,
      transparent 60%
    ),
    ${({ theme }) => theme.color.bg};
  pointer-events: none;
`

export const NetworkCanvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.62;

  ${media.md`
    opacity: 0.45;
  `}
`

export const Aurora = styled.span<{
  $color: string
  $size: string
  $top: string
  $left: string
  $delay: string
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: ${({ $size }) => $size};
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${({ $color }) => $color} 0%,
    transparent 68%
  );
  filter: blur(50px);
  opacity: 0.55;
  animation: ${drift} 26s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};
  will-change: transform;
`

export const GridOverlay = styled.span`
  position: absolute;
  inset: -10% -10% 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(120% 90% at 50% 0%, #000 0%, transparent 72%);
  -webkit-mask-image: radial-gradient(
    120% 90% at 50% 0%,
    #000 0%,
    transparent 72%
  );
  opacity: 0.7;
`

export const Scanline = styled.span`
  position: absolute;
  inset-inline: 0;
  height: 40vh;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(34, 211, 238, 0.045),
    transparent
  );
  animation: ${scan} 11s linear infinite;
`

export const Vignette = styled.span`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    100% 70% at 50% 40%,
    transparent 40%,
    rgba(2, 1, 6, 0.72) 100%
  );
`

export const Noise = styled.span`
  position: absolute;
  inset: 0;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
`
