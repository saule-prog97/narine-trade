import styled from 'styled-components'
import { GlowCardRoot } from '@/shared/ui/glow-card'

export const CardShell = styled.div`
  height: 100%;
  break-inside: avoid;

  ${GlowCardRoot} {
    height: 100%;
    gap: 20px;
  }
`

export const QuoteMark = styled.span`
  color: rgba(255, 61, 190, 0.4);
`

export const Text = styled.blockquote`
  flex: 1;
  font-size: 15px;
  line-height: 1.68;
  color: ${({ theme }) => theme.color.textMuted};
`

export const Author = styled.figcaption`
  display: flex;
  align-items: center;
  gap: 13px;
  padding-top: 4px;
  border-top: 1px solid ${({ theme }) => theme.color.border};
`

export const Avatar = styled.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  margin-top: 16px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradient.brand};
  font-family: ${({ theme }) => theme.font.display};
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  box-shadow: 0 8px 22px -10px rgba(255, 61, 190, 0.9);
`

export const AuthorMeta = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`

export const AuthorName = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.text};
`

export const AuthorRole = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11.5px;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.color.textFaint};
`
