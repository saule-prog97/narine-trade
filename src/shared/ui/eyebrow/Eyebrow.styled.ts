import styled from 'styled-components'
import { gradientBorder } from '@/app/styles/mixins'

export const EyebrowRoot = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 16px 7px 13px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(255, 255, 255, 0.035);
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textMuted};
  backdrop-filter: blur(10px);

  ${gradientBorder(0.35)}
`

export const EyebrowDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.pink};
  box-shadow: 0 0 10px ${({ theme }) => theme.color.pink};
  animation: pulse 2.4s ease-in-out infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.45;
      transform: scale(0.72);
    }
  }
`
