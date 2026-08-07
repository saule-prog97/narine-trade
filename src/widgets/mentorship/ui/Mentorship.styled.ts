import styled, { keyframes } from 'styled-components'
import { glassSurface, gradientText, media } from '@/app/styles/mixins'

/* translateX(-50%) обязан присутствовать в каждом кадре: анимация
   transform полностью перекрывает статическое значение свойства. */
const glowPulse = keyframes`
  0%, 100% { opacity: 0.5; transform: translateX(-50%) scale(1); }
  50%      { opacity: 0.85; transform: translateX(-50%) scale(1.06); }
`

export const Wordmark = styled.p`
  margin-bottom: 26px;
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(34px, 8.6vw, 96px);
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0.02em;
  text-align: center;
  ${gradientText('linear-gradient(100deg, #FFFFFF 0%, #BFF1FC 45%, #FFC7EE 100%)')}
  filter: drop-shadow(0 0 34px rgba(34, 211, 238, 0.45));
`

export const Halo = styled.span`
  position: absolute;
  top: 8%;
  left: 50%;
  width: min(720px, 90%);
  aspect-ratio: 2 / 1;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(
    ellipse,
    rgba(34, 211, 238, 0.22),
    transparent 68%
  );
  filter: blur(40px);
  animation: ${glowPulse} 7s ease-in-out infinite;
  pointer-events: none;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  /* Нечётный последний пункт занимает всю ширину */
  > :last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }

  ${media.md`
    grid-template-columns: minmax(0, 1fr);
  `}
`

export const Perk = styled.article`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  height: 100%;
  padding: 20px 22px;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all ${({ theme }) => theme.transition.base};

  ${glassSurface}

  &:hover {
    border-color: rgba(255, 61, 190, 0.35);
    box-shadow: 0 26px 60px -44px rgba(255, 61, 190, 0.9);
    transform: translateY(-4px);
  }

  ${media.sm`
    gap: 13px;
    padding: 17px 16px;
  `}
`

export const PerkNumber = styled.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid rgba(34, 211, 238, 0.34);
  background: rgba(34, 211, 238, 0.1);
  font-family: ${({ theme }) => theme.font.display};
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.cyanSoft};
  box-shadow: inset 0 0 18px rgba(34, 211, 238, 0.18);
`

export const PerkText = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.textMuted};
`
