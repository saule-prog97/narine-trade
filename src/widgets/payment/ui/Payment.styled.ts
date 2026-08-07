import styled, { keyframes } from 'styled-components'
import { glassSurface, media } from '@/app/styles/mixins'

const bolt = keyframes`
  0%, 100% { filter: drop-shadow(0 0 18px rgba(255, 61, 190, 0.6)); transform: scale(1); }
  50%      { filter: drop-shadow(0 0 34px rgba(255, 61, 190, 0.95)); transform: scale(1.06); }
`

export const Layout = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: clamp(24px, 4vw, 54px);
  align-items: center;

  ${media.md`
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
  `}
`

export const BoltWrap = styled.div`
  display: grid;
  place-items: center;
  width: clamp(96px, 14vw, 150px);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid rgba(255, 61, 190, 0.3);
  background: radial-gradient(
    circle,
    rgba(255, 61, 190, 0.16),
    transparent 68%
  );
  color: ${({ theme }) => theme.color.pinkSoft};
  animation: ${bolt} 4.5s ease-in-out infinite;

  ${media.md`
    justify-self: center;
  `}

  svg {
    width: 46%;
    height: 46%;
  }
`

export const OptionList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  ${media.lg`
    grid-template-columns: minmax(0, 1fr);
  `}
`

export const Option = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  padding: 22px;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all ${({ theme }) => theme.transition.base};

  ${glassSurface}

  &:hover {
    border-color: rgba(255, 61, 190, 0.35);
    transform: translateY(-4px);
  }
`

export const OptionTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.01em;
`

export const OptionText = styled.p`
  font-size: 14.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.textMuted};
`

export const Handle = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 26px;
  padding: 11px 20px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid rgba(34, 211, 238, 0.34);
  background: rgba(34, 211, 238, 0.08);
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13.5px;
  color: ${({ theme }) => theme.color.cyanSoft};
  transition: all ${({ theme }) => theme.transition.base};

  &:hover {
    background: rgba(34, 211, 238, 0.16);
    box-shadow: 0 0 30px -8px rgba(34, 211, 238, 0.7);
  }
`
