import styled from 'styled-components'
import { glassSurface, media } from '@/app/styles/mixins'

export const CardRoot = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  height: 100%;
  padding: 18px 20px;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  isolation: isolate;
  transition: all ${({ theme }) => theme.transition.base};

  ${glassSurface}

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
      260px circle at var(--glow-x, 50%) var(--glow-y, -30%),
      rgba(34, 211, 238, 0.16),
      transparent 68%
    );
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transition.base};
    pointer-events: none;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(34, 211, 238, 0.4);
    box-shadow: 0 26px 60px -42px rgba(34, 211, 238, 0.9);
  }

  &:hover::after {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.cyan};
    outline-offset: 3px;
  }

  ${media.sm`
    padding: 15px 16px;
    gap: 12px;
  `}
`

export const Mark = styled.span<{ $accent: string }>`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 13px;
  border: 1px solid ${({ $accent }) => `${$accent}3d`};
  background: ${({ $accent }) => `${$accent}14`};
  transition: all ${({ theme }) => theme.transition.base};

  ${CardRoot}:hover & {
    border-color: ${({ $accent }) => `${$accent}70`};
    background: ${({ $accent }) => `${$accent}22`};
    box-shadow: 0 10px 26px -14px ${({ $accent }) => $accent};
  }
`

export const Logo = styled.img`
  width: 28px;
  height: 28px;
  /* Часть логотипов идёт со своей квадратной подложкой — скругляем её,
     чтобы они не спорили с формой плитки. */
  border-radius: 8px;
  object-fit: contain;
`

export const Body = styled.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`

export const Name = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.color.text};
`

export const Note = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.color.textFaint};
`

export const Arrow = styled.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.color.textFaint};
  transition: all ${({ theme }) => theme.transition.base};

  ${CardRoot}:hover & {
    background: rgba(34, 211, 238, 0.16);
    color: ${({ theme }) => theme.color.cyanSoft};
    transform: translate(2px, -2px);
  }
`
