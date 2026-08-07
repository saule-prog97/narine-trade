import styled, { css } from 'styled-components'
import { gradientText, media } from '@/app/styles/mixins'

export const HeadingRoot = styled.header<{ $align: 'left' | 'center' }>`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 760px;
  margin-bottom: clamp(36px, 5vw, 64px);

  ${({ $align }) =>
    $align === 'center' &&
    css`
      align-items: center;
      text-align: center;
      margin-inline: auto;
    `}

  ${media.sm`
    gap: 14px;
    margin-bottom: 32px;
  `}
`

export const HeadingTitle = styled.h2`
  font-size: clamp(28px, 5.2vw, 54px);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.025em;
  ${gradientText()}
`

export const HeadingSubtitle = styled.p`
  font-size: clamp(15px, 1.6vw, 18px);
  line-height: 1.65;
  color: ${({ theme }) => theme.color.textMuted};
  max-width: 64ch;
`

export const HeadingAccent = styled.strong`
  font-weight: 800;
  ${gradientText(
    'linear-gradient(100deg, #FF3DBE 0%, #C084FC 55%, #22D3EE 100%)',
  )}
`
