import styled, { css } from 'styled-components'

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'scale'

const offsets: Record<RevealDirection, string> = {
  up: 'translate3d(0, 34px, 0)',
  down: 'translate3d(0, -34px, 0)',
  left: 'translate3d(38px, 0, 0)',
  right: 'translate3d(-38px, 0, 0)',
  scale: 'scale(0.94)',
}

export const RevealRoot = styled.div<{
  $inView: boolean
  $delay: number
  $direction: RevealDirection
}>`
  opacity: 0;
  transform: ${({ $direction }) => offsets[$direction]};
  transition:
    opacity 760ms cubic-bezier(0.22, 0.61, 0.36, 1),
    transform 760ms cubic-bezier(0.22, 0.61, 0.36, 1);
  transition-delay: ${({ $delay }) => $delay}ms;
  will-change: opacity, transform;

  ${({ $inView }) =>
    $inView &&
    css`
      opacity: 1;
      transform: none;
    `}

  /* На узких экранах горизонтальный сдвиг заменяем вертикальным:
     он не создаёт лишней ширины и читается спокойнее. */
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    transform: ${({ $inView, $direction }) =>
      $inView
        ? 'none'
        : $direction === 'scale'
          ? offsets.scale
          : offsets.up};
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
  }
`
