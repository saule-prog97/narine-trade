import styled, { css } from 'styled-components'
import { focusRing, media } from '@/app/styles/mixins'

export type ButtonVariant = 'primary' | 'ghost' | 'outline'
export type ButtonSize = 'md' | 'lg'

const sizes: Record<ButtonSize, ReturnType<typeof css>> = {
  md: css`
    padding: 12px 24px;
    font-size: 14px;
  `,
  lg: css`
    padding: 17px 34px;
    font-size: 16px;
  `,
}

const variants: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    color: #fff;
    background: ${({ theme }) => theme.gradient.brand};
    background-size: 200% 100%;
    box-shadow:
      0 10px 34px -12px rgba(255, 61, 190, 0.75),
      inset 0 1px 0 rgba(255, 255, 255, 0.28);

    &:hover {
      background-position: 100% 0;
      box-shadow:
        0 16px 44px -12px rgba(168, 85, 247, 0.85),
        inset 0 1px 0 rgba(255, 255, 255, 0.34);
    }
  `,
  outline: css`
    color: ${({ theme }) => theme.color.text};
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid ${({ theme }) => theme.color.borderStrong};
    backdrop-filter: blur(10px);

    &:hover {
      border-color: rgba(34, 211, 238, 0.6);
      background: rgba(34, 211, 238, 0.08);
      box-shadow: 0 0 30px -8px rgba(34, 211, 238, 0.5);
    }
  `,
  ghost: css`
    color: ${({ theme }) => theme.color.textMuted};
    background: transparent;

    &:hover {
      color: ${({ theme }) => theme.color.text};
      background: rgba(255, 255, 255, 0.05);
    }
  `,
}

export const ButtonRoot = styled.a<{
  $variant: ButtonVariant
  $size: ButtonSize
  $full: boolean
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: ${({ theme }) => theme.radius.pill};
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;
  cursor: pointer;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transition.base};
  will-change: transform;

  ${({ $size }) => sizes[$size]}
  ${({ $variant }) => variants[$variant]}
  ${({ $full }) =>
    $full &&
    css`
      width: 100%;
    `}
  ${focusRing}

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  /* Блик, пробегающий по кнопке */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      110deg,
      transparent 20%,
      rgba(255, 255, 255, 0.32) 50%,
      transparent 80%
    );
    transform: translateX(-120%);
    transition: transform 700ms ease;
    pointer-events: none;
  }

  &:hover::after {
    transform: translateX(120%);
  }

  ${media.sm`
    width: 100%;
  `}
`

export const ButtonIcon = styled.span`
  display: inline-flex;
  transition: transform ${({ theme }) => theme.transition.base};

  ${ButtonRoot}:hover & {
    transform: translateX(3px);
  }
`
