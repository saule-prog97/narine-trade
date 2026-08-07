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
