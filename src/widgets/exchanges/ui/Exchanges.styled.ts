import styled, { keyframes } from 'styled-components'
import { glassSurface, gradientText, media } from '@/app/styles/mixins'

const shine = keyframes`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`

export const Discount = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 26px;
  padding: 20px 24px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid rgba(52, 211, 153, 0.28);
  background: linear-gradient(
    120deg,
    rgba(52, 211, 153, 0.1),
    rgba(34, 211, 238, 0.05) 60%,
    transparent
  );

  ${media.sm`
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding: 18px 16px;
  `}
`

export const DiscountValue = styled.span`
  flex-shrink: 0;
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(30px, 5vw, 44px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.02em;
  background: linear-gradient(100deg, #34d399, #7de9fb, #34d399);
  background-size: 200% 100%;
  animation: ${shine} 6s linear infinite;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
`

export const DiscountText = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.textMuted};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 12px;

  ${media.sm`
    grid-template-columns: minmax(0, 1fr);
  `}
`

export const Cell = styled.div`
  height: 100%;

  > div {
    height: 100%;
  }
`

export const Hint = styled.p`
  margin-top: 22px;
  padding: 14px 18px;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 13px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.textFaint};

  ${glassSurface}
`

export const HintAccent = styled.strong`
  font-weight: 600;
  ${gradientText('linear-gradient(100deg, #FF8AD9, #7DE9FB)')}
`

/* --- TradingView ------------------------------------------------------- */

/** Фирменный синий TradingView - выделяет блок среди карточек бирж. */
const TV_BLUE = '#2962FF'

const sweep = keyframes`
  0%   { transform: translateX(-120%); }
  100% { transform: translateX(220%); }
`

export const TvPanel = styled.a`
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: clamp(18px, 3vw, 34px);
  margin-top: 26px;
  padding: clamp(22px, 3vw, 30px) clamp(20px, 3vw, 32px);
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid rgba(41, 98, 255, 0.34);
  overflow: hidden;
  isolation: isolate;
  background: linear-gradient(
    120deg,
    rgba(41, 98, 255, 0.16),
    rgba(34, 211, 238, 0.06) 55%,
    transparent
  );
  transition: all ${({ theme }) => theme.transition.base};

  /* Мягкое свечение под курсором - как на карточках бирж. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
      420px circle at var(--glow-x, 50%) var(--glow-y, -40%),
      rgba(41, 98, 255, 0.22),
      transparent 70%
    );
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transition.base};
    pointer-events: none;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(41, 98, 255, 0.6);
    box-shadow: 0 34px 80px -46px rgba(41, 98, 255, 0.95);
  }

  &:hover::after {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.cyan};
    outline-offset: 3px;
  }

  ${media.md`
    grid-template-columns: auto minmax(0, 1fr);
    row-gap: 20px;
  `}

  ${media.sm`
    grid-template-columns: minmax(0, 1fr);
    justify-items: start;
    padding: 22px 18px;
  `}
`

export const TvMark = styled.span`
  position: relative;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: clamp(60px, 8vw, 76px);
  aspect-ratio: 1;
  border-radius: 20px;
  border: 1px solid rgba(41, 98, 255, 0.45);
  background: linear-gradient(
    150deg,
    rgba(41, 98, 255, 0.32),
    rgba(41, 98, 255, 0.08)
  );
  color: #fff;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transition.base};

  /* Блик, пробегающий по знаку при наведении. */
  &::before {
    content: '';
    position: absolute;
    inset: -40% -60%;
    background: linear-gradient(
      100deg,
      transparent,
      rgba(255, 255, 255, 0.32),
      transparent
    );
    transform: translateX(-120%);
  }

  ${TvPanel}:hover & {
    border-color: rgba(41, 98, 255, 0.85);
    box-shadow: 0 16px 40px -18px ${TV_BLUE};
  }

  ${TvPanel}:hover &::before {
    animation: ${sweep} 900ms ease-out;
  }

  ${media.md`
    grid-row: span 2;
    align-self: start;
  `}

  ${media.sm`
    grid-row: auto;
  `}
`

export const TvBody = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
`

export const TvLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #8fb0ff;

  &::after {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${TV_BLUE};
    box-shadow: 0 0 12px ${TV_BLUE};
  }
`

export const TvTitle = styled.span`
  font-size: clamp(19px, 2.4vw, 25px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  ${gradientText('linear-gradient(100deg, #FFFFFF, #BFD3FF 60%, #A8ECFB)')}
`

export const TvPerks = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
  margin-top: 2px;
`

export const TvPerk = styled.span`
  display: inline-flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13.5px;
  line-height: 1.45;
  color: ${({ theme }) => theme.color.textMuted};

  svg {
    flex-shrink: 0;
    /* Держим галочку на первой строке, если пункт переносится. */
    margin-top: 3px;
    color: #7f9dff;
  }
`

export const TvCta = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding: 14px 24px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid rgba(41, 98, 255, 0.5);
  background: rgba(41, 98, 255, 0.14);
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.text};
  transition: all ${({ theme }) => theme.transition.base};

  svg {
    transition: transform ${({ theme }) => theme.transition.base};
  }

  ${TvPanel}:hover & {
    border-color: rgba(41, 98, 255, 0.9);
    background: ${TV_BLUE};
    box-shadow: 0 16px 40px -16px rgba(41, 98, 255, 0.9);
  }

  ${TvPanel}:hover & svg {
    transform: translateX(3px);
  }

  ${media.md`
    grid-column: 2;
    justify-self: start;
  `}

  ${media.sm`
    grid-column: auto;
    width: 100%;
    justify-content: center;
  `}
`
