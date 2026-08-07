import type { ReactNode } from 'react'
import { usePointerGlow } from '@/shared/lib'
import { GlowCardRoot } from './GlowCard.styled'

interface GlowCardProps {
  children: ReactNode
  highlight?: boolean
  className?: string
}

/** Стеклянная карточка с подсветкой, следующей за курсором. */
export function GlowCard({
  children,
  highlight = false,
  className,
}: GlowCardProps) {
  const { ref, onPointerMove, onPointerLeave } = usePointerGlow<HTMLElement>()

  return (
    <GlowCardRoot
      ref={ref}
      className={className}
      $highlight={highlight}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </GlowCardRoot>
  )
}
