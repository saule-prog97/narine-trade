import styled, { keyframes } from 'styled-components'
import { glassSurface, gradientText, media } from '@/app/styles/mixins'

const orbit = keyframes`
  to { transform: rotate(360deg); }
`

const pulse = keyframes`
  0%, 100% { opacity: 0.45; transform: scale(1); }
  50%      { opacity: 0.8;  transform: scale(1.08); }
`

export const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(20px, 3.4vw, 44px);
  align-items: start;

  ${media.lg`
    grid-template-columns: minmax(0, 1fr);
  `}
`

/* ---------- Левая колонка: чего не бывает на споте ---------- */

export const FreePanel = styled.div`
  position: relative;
  padding: clamp(24px, 3vw, 34px);
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;

  ${glassSurface}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      100% 120% at 100% 0%,
      rgba(34, 211, 238, 0.14),
      transparent 62%
    );
    pointer-events: none;
  }
`

export const PanelTitle = styled.h3`
  position: relative;
  margin-bottom: 20px;
  font-size: clamp(19px, 2.2vw, 23px);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
`

export const FreeList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const FreeItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 16px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(255, 255, 255, 0.03);
  font-size: 14.5px;
  line-height: 1.45;
  color: ${({ theme }) => theme.color.textMuted};
  transition: all ${({ theme }) => theme.transition.base};

  &:hover {
    border-color: rgba(34, 211, 238, 0.35);
    color: ${({ theme }) => theme.color.text};
  }
`

export const FreeMark = styled.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid rgba(34, 211, 238, 0.35);
  background: rgba(34, 211, 238, 0.1);
  color: ${({ theme }) => theme.color.cyanSoft};
`

export const FuturesNote = styled.p`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 11px;
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid ${({ theme }) => theme.color.border};
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.textFaint};

  svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: ${({ theme }) => theme.color.pinkSoft};
  }
`

/* ---------- Правая колонка: преимущества ---------- */

export const AdvantageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`

export const Advantage = styled.article`
  position: relative;
  display: flex;
  gap: 18px;
  padding: 22px 24px;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all ${({ theme }) => theme.transition.base};

  ${glassSurface}

  &:hover {
    border-color: rgba(52, 211, 153, 0.35);
    transform: translateX(6px);
    box-shadow: 0 26px 60px -46px rgba(52, 211, 153, 0.9);
  }

  ${media.sm`
    gap: 14px;
    padding: 18px 16px;
  `}
`

export const AdvantageIndex = styled.span`
  flex-shrink: 0;
  padding-top: 2px;
  font-family: ${({ theme }) => theme.font.display};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.color.green};
`

export const AdvantageBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const AdvantageTitle = styled.h4`
  font-size: 16.5px;
  font-weight: 600;
  letter-spacing: -0.01em;
`

export const AdvantageText = styled.p`
  font-size: 14.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.textMuted};
`

/* ---------- Нижний блок: подключение и эфиры ---------- */

export const Connect = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: clamp(22px, 3vw, 40px);
  align-items: center;
  margin-top: 22px;
  padding: clamp(24px, 3vw, 36px);
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid rgba(52, 211, 153, 0.24);
  overflow: hidden;
  background: linear-gradient(
    120deg,
    rgba(52, 211, 153, 0.1),
    rgba(34, 211, 238, 0.05) 55%,
    transparent
  );

  ${media.md`
    grid-template-columns: minmax(0, 1fr);
    gap: 22px;
  `}
`

export const BotBadge = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: clamp(84px, 11vw, 118px);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid rgba(52, 211, 153, 0.34);
  background: radial-gradient(circle, rgba(52, 211, 153, 0.16), transparent 68%);
  color: ${({ theme }) => theme.color.green};

  ${media.md`
    justify-self: center;
  `}

  &::before {
    content: '';
    position: absolute;
    inset: -10%;
    border-radius: 50%;
    border: 1px dashed rgba(52, 211, 153, 0.3);
    animation: ${orbit} 26s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 12%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(52, 211, 153, 0.25), transparent 70%);
    animation: ${pulse} 4.5s ease-in-out infinite;
  }

  svg {
    position: relative;
    width: 44%;
    height: 44%;
  }
`

export const ConnectBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
`

export const ConnectTitle = styled.h3`
  font-size: clamp(20px, 2.6vw, 27px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  ${gradientText('linear-gradient(100deg, #FFFFFF, #A7F3D8 60%, #A8ECFB)')}
`

export const ConnectActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 11px;

  ${media.sm`
    flex-direction: column;
  `}
`

export const BroadcastBlock = styled.div`
  margin-top: 26px;
`

export const BroadcastLabel = styled.p`
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textFaint};
`

export const BroadcastList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  ${media.md`
    grid-template-columns: minmax(0, 1fr);
  `}
`

export const Broadcast = styled.a`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 16px 18px;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all ${({ theme }) => theme.transition.base};

  ${glassSurface}

  &:hover {
    border-color: rgba(34, 211, 238, 0.42);
    background: rgba(34, 211, 238, 0.07);
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.cyan};
    outline-offset: 3px;
  }
`

export const BroadcastMark = styled.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  color: ${({ theme }) => theme.color.cyanSoft};
  transition: all ${({ theme }) => theme.transition.base};

  ${Broadcast}:hover & {
    background: rgba(34, 211, 238, 0.18);
  }
`

export const BroadcastMeta = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
`

export const BroadcastName = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.text};
`

export const BroadcastHint = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.color.textFaint};
`
