import styled, { css, keyframes } from 'styled-components'
import { gradientText, media } from '@/app/styles/mixins'
import { GlowCardRoot } from '@/shared/ui/glow-card'

const shimmer = keyframes`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`

export const CardShell = styled.div<{ $featured: boolean }>`
  position: relative;
  height: 100%;

  ${({ $featured }) =>
    $featured &&
    css`
      ${GlowCardRoot} {
        background:
          linear-gradient(
            165deg,
            rgba(255, 61, 190, 0.12) 0%,
            rgba(168, 85, 247, 0.06) 45%,
            rgba(255, 255, 255, 0.02) 100%
          );
      }

      ${media.lg`
        order: -1;
      `}
    `}

  ${GlowCardRoot} {
    height: 100%;
    gap: 22px;
  }
`

export const Badge = styled.span`
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  padding: 6px 18px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.gradient.brand};
  background-size: 200% 100%;
  animation: ${shimmer} 4s linear infinite alternate;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #fff;
  white-space: nowrap;
  box-shadow: 0 10px 26px -12px rgba(255, 61, 190, 0.95);
`

export const Kicker = styled.span`
  font-family: ${({ theme }) => theme.font.display};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.cyan};
  text-shadow: 0 0 18px rgba(34, 211, 238, 0.55);
`

export const Name = styled.h3`
  margin-top: 10px;
  font-size: clamp(21px, 2.4vw, 25px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  /* Резерв под две строки, чтобы цены во всех тарифах стояли на одной линии. */
  min-height: 2.4em;

  ${media.lg`
    min-height: 0;
  `}
`

export const PriceRow = styled.p`
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: 16px;
`

export const PriceValue = styled.span`
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(40px, 6vw, 56px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  ${gradientText('linear-gradient(100deg, #FFFFFF 0%, #FFC7EE 60%, #A8ECFB 100%)')}
`

export const PriceCurrency = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.textMuted};
`

export const Note = styled.p`
  font-size: 14px;
  line-height: 1.55;
  color: ${({ theme }) => theme.color.textFaint};
`

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.16),
    transparent
  );
`

export const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 13px;
  flex: 1;
`

export const FeatureItem = styled.li<{ $included: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 11px;
  font-size: 14.5px;
  line-height: 1.5;
  color: ${({ theme, $included }) =>
    $included ? theme.color.textMuted : theme.color.textFaint};

  ${({ $included }) =>
    !$included &&
    css`
      text-decoration: line-through;
      text-decoration-color: rgba(255, 255, 255, 0.22);
    `}
`

export const FeatureMark = styled.span<{ $included: boolean }>`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 1px;
  border-radius: 50%;
  color: ${({ theme, $included }) =>
    $included ? theme.color.cyan : theme.color.textFaint};
  background: ${({ $included }) =>
    $included ? 'rgba(34, 211, 238, 0.12)' : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid
    ${({ $included }) =>
      $included ? 'rgba(34, 211, 238, 0.35)' : 'rgba(255, 255, 255, 0.1)'};
`

export const CardFooter = styled.div`
  margin-top: auto;
  padding-top: 6px;
`
