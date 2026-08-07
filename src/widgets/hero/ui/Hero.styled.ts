import styled, { css, keyframes } from 'styled-components'
import { glassSurface, gradientText, media } from '@/app/styles/mixins'
import { Container } from '@/shared/ui/container'

const float = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0); }
  50%      { transform: translate3d(0, -14px, 0); }
`

const flicker = keyframes`
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    opacity: 1;
    filter: drop-shadow(0 0 22px rgba(255, 61, 190, 0.55));
  }
  20%, 24%, 55% {
    opacity: 0.82;
    filter: drop-shadow(0 0 6px rgba(255, 61, 190, 0.25));
  }
`

const fadeUp = keyframes`
  from { opacity: 0; transform: translate3d(0, 26px, 0); }
  to   { opacity: 1; transform: none; }
`

const spin = keyframes`
  to { transform: rotate(360deg); }
`

export const HeroRoot = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100svh;
  padding-block: 118px 72px;
  overflow: hidden;

  ${media.lg`
    min-height: auto;
    padding-block: 108px 56px;
  `}
`

export const HeroInner = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
  gap: clamp(32px, 5vw, 72px);
  align-items: center;
  /* HeroRoot — флекс-контейнер, а флекс-элемент по умолчанию
     не сжимается уже своего min-content и растягивает страницу. */
  flex: 1;
  min-width: 0;

  ${media.lg`
    grid-template-columns: minmax(0, 1fr);
    gap: 48px;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 26px;

  > * {
    animation: ${fadeUp} 800ms cubic-bezier(0.22, 0.61, 0.36, 1) both;
  }

  > *:nth-child(1) {
    animation-delay: 80ms;
  }
  > *:nth-child(2) {
    animation-delay: 180ms;
  }
  > *:nth-child(3) {
    animation-delay: 300ms;
  }
  > *:nth-child(4) {
    animation-delay: 400ms;
  }
  > *:nth-child(5) {
    animation-delay: 500ms;
  }

  ${media.lg`
    align-items: center;
    text-align: center;
  `}
`

export const Title = styled.h1`
  font-size: clamp(38px, 7.4vw, 82px);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.035em;
`

export const TitleBrand = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(44px, 9vw, 104px);
  font-weight: 900;
  letter-spacing: 0.02em;
  animation: ${flicker} 7s linear infinite;
  ${gradientText('linear-gradient(100deg, #FF8AD9 0%, #FF3DBE 40%, #C084FC 100%)')}
`

export const TitleSub = styled.span`
  display: block;
  margin-top: 6px;
  ${gradientText()}
`

export const Lead = styled.p`
  max-width: 54ch;
  font-size: clamp(15.5px, 1.8vw, 19px);
  line-height: 1.65;
  color: ${({ theme }) => theme.color.textMuted};
`

export const LeadAccent = styled.strong`
  font-weight: 600;
  color: ${({ theme }) => theme.color.text};
`

export const Ctas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  ${media.sm`
    width: 100%;
    flex-direction: column;
  `}
`

export const Stats = styled.dl`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  width: 100%;
  margin-top: 8px;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  background: ${({ theme }) => theme.color.border};

  ${glassSurface}

  ${media.sm`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}
`

export const Stat = styled.div`
  padding: 16px 14px;
  background: rgba(8, 6, 18, 0.55);
  text-align: center;
  transition: background ${({ theme }) => theme.transition.base};

  &:hover {
    background: rgba(255, 61, 190, 0.08);
  }
`

export const StatValue = styled.dt`
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(22px, 3vw, 28px);
  font-weight: 800;
  line-height: 1;
  ${gradientText('linear-gradient(100deg, #FFFFFF, #A8ECFB)')}
`

export const StatLabel = styled.dd`
  margin-top: 7px;
  font-size: 11.5px;
  line-height: 1.35;
  color: ${({ theme }) => theme.color.textFaint};
`

/* ---------- Портрет ---------- */

export const Visual = styled.div`
  position: relative;
  justify-self: center;
  width: min(100%, 430px);
  animation: ${fadeUp} 1000ms cubic-bezier(0.22, 0.61, 0.36, 1) 240ms both;

  ${media.sm`
    width: min(100%, 320px);
  `}
`

export const PortraitFrame = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  background: linear-gradient(
    165deg,
    rgba(255, 61, 190, 0.3),
    rgba(34, 211, 238, 0.22)
  );
  padding: 1.5px;
  box-shadow:
    0 40px 100px -50px rgba(255, 61, 190, 0.95),
    0 0 90px -40px rgba(34, 211, 238, 0.7);
  animation: ${float} 9s ease-in-out infinite;
`

export const PortraitImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 520 / 945;
  object-fit: cover;
  border-radius: calc(${({ theme }) => theme.radius.xl} - 2px);
  background: ${({ theme }) => theme.color.bgDeep};
`

export const PortraitShade = styled.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    to top,
    rgba(5, 4, 12, 0.9) 0%,
    rgba(5, 4, 12, 0.12) 42%,
    transparent 70%
  );
  pointer-events: none;
`

export const PortraitCaption = styled.figcaption`
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  z-index: 2;
`

export const CaptionName = styled.span`
  font-family: ${({ theme }) => theme.font.display};
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #fff;
`

export const CaptionRole = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.color.cyanSoft};
`

export const Orbit = styled.span`
  position: absolute;
  inset: -8%;
  border-radius: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.09);
  animation: ${spin} 44s linear infinite;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    top: 12%;
    right: 6%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.cyan};
    box-shadow: 0 0 16px ${({ theme }) => theme.color.cyan};
  }

  ${media.md`
    display: none;
  `}
`

export const FloatCard = styled.div<{ $position: 'top' | 'bottom' }>`
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 13px 17px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(10, 8, 20, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 22px 50px -28px rgba(0, 0, 0, 1);
  animation: ${float} 7s ease-in-out infinite;

  ${({ $position, theme }) =>
    $position === 'top'
      ? css`
          top: 12%;
          left: -14%;
          animation-delay: -1.5s;

          @media (max-width: ${theme.breakpoint.lg}) {
            left: -3%;
          }

          @media (max-width: ${theme.breakpoint.sm}) {
            left: -6px;
          }
        `
      : css`
          bottom: 16%;
          right: -12%;
          animation-delay: -4s;

          @media (max-width: ${theme.breakpoint.lg}) {
            right: -3%;
          }

          @media (max-width: ${theme.breakpoint.sm}) {
            right: -6px;
          }
        `}

  ${media.sm`
    padding: 10px 13px;
  `}
`

export const FloatLabel = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textFaint};
`

export const FloatValue = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(16px, 2.2vw, 20px);
  font-weight: 800;
  color: ${({ theme }) => theme.color.green};
  text-shadow: 0 0 20px rgba(52, 211, 153, 0.5);
  font-variant-numeric: tabular-nums;
`

export const FloatPair = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  color: ${({ theme }) => theme.color.textMuted};
`
