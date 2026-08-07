import styled from 'styled-components'
import { glassSurface, gradientText, media } from '@/app/styles/mixins'

export const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: clamp(24px, 4vw, 56px);
  align-items: center;

  ${media.lg`
    grid-template-columns: minmax(0, 1fr);
  `}
`

export const QuoteCard = styled.blockquote`
  position: relative;
  padding: clamp(28px, 4vw, 46px);
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;

  ${glassSurface}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      90% 120% at 0% 0%,
      rgba(255, 61, 190, 0.16),
      transparent 60%
    );
    pointer-events: none;
  }
`

export const QuoteIconWrap = styled.span`
  display: block;
  margin-bottom: 18px;
  color: rgba(255, 61, 190, 0.45);
`

export const QuoteText = styled.p`
  position: relative;
  font-size: clamp(19px, 2.6vw, 28px);
  font-weight: 500;
  line-height: 1.42;
  letter-spacing: -0.02em;
  ${gradientText('linear-gradient(100deg, #FFFFFF 0%, #FFD8F1 50%, #BFF1FC 100%)')}
`

export const QuoteAuthor = styled.footer`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 26px;
  padding-top: 22px;
  border-top: 1px solid ${({ theme }) => theme.color.border};
`

export const AuthorLine = styled.span`
  width: 34px;
  height: 2px;
  border-radius: 2px;
  background: ${({ theme }) => theme.gradient.brand};
`

export const AuthorName = styled.cite`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  font-style: normal;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textMuted};
`

export const PillarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const PillarItem = styled.li`
  position: relative;
  display: flex;
  gap: 16px;
  padding: 20px 22px;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all ${({ theme }) => theme.transition.base};

  ${glassSurface}

  &:hover {
    border-color: rgba(34, 211, 238, 0.34);
    transform: translateX(6px);
  }

  ${media.sm`
    gap: 13px;
    padding: 17px 16px;
  `}
`

export const PillarIndex = styled.span`
  flex-shrink: 0;
  font-family: ${({ theme }) => theme.font.display};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.color.cyan};
  padding-top: 3px;
`

export const PillarBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const PillarTitle = styled.h3`
  font-size: 16.5px;
  font-weight: 600;
  letter-spacing: -0.01em;
`

export const PillarText = styled.p`
  font-size: 14.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.textMuted};
`
