import type { ReactNode } from 'react'
import { Container } from '../container'
import { SectionGlow, SectionRoot, type SectionTone } from './Section.styled'

interface SectionProps {
  id?: string
  tone?: SectionTone
  divider?: boolean
  className?: string
  children: ReactNode
}

export function Section({
  id,
  tone = 'default',
  divider = false,
  className,
  children,
}: SectionProps) {
  return (
    <SectionRoot id={id} $tone={tone} className={className}>
      {divider && <SectionGlow aria-hidden />}
      <Container>{children}</Container>
    </SectionRoot>
  )
}
