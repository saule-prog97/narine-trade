import styled from 'styled-components'
import { glassSurface, gradientText, media } from '@/app/styles/mixins'

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 26px;
  padding: 16px 22px;
  border-radius: ${({ theme }) => theme.radius.md};

  ${glassSurface}

  ${media.sm`
    padding: 14px 16px;
  `}
`

export const ToolbarInfo = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.textMuted};
`

export const ToolbarCount = styled.strong`
  font-family: ${({ theme }) => theme.font.display};
  font-size: 17px;
  font-weight: 800;
  ${gradientText('linear-gradient(100deg, #FF8AD9, #7DE9FB)')}
`

export const TopicCloud = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-bottom: 26px;
`

export const Topic = styled.li<{ $inView: boolean; $index: number }>`
  padding: 9px 17px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: rgba(255, 255, 255, 0.03);
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12.5px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.color.textMuted};
  cursor: default;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: translateY(${({ $inView }) => ($inView ? '0' : '10px')});
  transition:
    opacity 500ms ease,
    transform 500ms cubic-bezier(0.22, 0.61, 0.36, 1),
    border-color 240ms ease,
    color 240ms ease,
    background 240ms ease,
    box-shadow 240ms ease;
  transition-delay: ${({ $index, $inView }) => ($inView ? $index * 38 : 0)}ms;

  &:hover {
    border-color: rgba(255, 61, 190, 0.5);
    background: rgba(255, 61, 190, 0.1);
    color: ${({ theme }) => theme.color.text};
    box-shadow: 0 0 26px -8px rgba(255, 61, 190, 0.8);
  }

  ${media.sm`
    padding: 7px 13px;
    font-size: 11.5px;
  `}
`

export const ToolbarHint = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textFaint};
`
