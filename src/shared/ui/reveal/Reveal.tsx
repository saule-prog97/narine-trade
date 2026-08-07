import type { ReactNode } from 'react'
import { useInView } from '@/shared/lib'
import { RevealRoot, type RevealDirection } from './Reveal.styled'

interface RevealProps {
  children: ReactNode
  delay?: number
  direction?: RevealDirection
  className?: string
}

/** Появление блока при попадании во вьюпорт. */
export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <RevealRoot
      ref={ref}
      className={className}
      $inView={inView}
      $delay={delay}
      $direction={direction}
    >
      {children}
    </RevealRoot>
  )
}
