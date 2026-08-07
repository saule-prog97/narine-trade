import styled, { css } from 'styled-components'
import { glassSurface, media } from '@/app/styles/mixins'

export const GlowCardRoot = styled.article<{ $highlight: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: clamp(22px, 2.6vw, 32px);
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  isolation: isolate;
  transition:
    transform ${({ theme }) => theme.transition.base},
    border-color ${({ theme }) => theme.transition.base},
    box-shadow ${({ theme }) => theme.transition.base};

  ${glassSurface}

  /* Пятно света, следующее за курсором */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
      340px circle at var(--glow-x, 50%) var(--glow-y, -20%),
      rgba(255, 61, 190, 0.16),
      rgba(168, 85, 247, 0.08) 40%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transition.base};
    pointer-events: none;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 255, 255, 0.18);
    box-shadow: ${({ theme }) => theme.shadow.lift};
  }

  &:hover::after {
    opacity: 1;
  }

  ${({ $highlight }) =>
    $highlight &&
    css`
      border-color: rgba(255, 61, 190, 0.4);
      box-shadow:
        0 0 0 1px rgba(255, 61, 190, 0.16),
        0 30px 80px -46px rgba(255, 61, 190, 0.85);
    `}

  ${media.md`
    &:hover {
      transform: none;
    }
  `}
`
