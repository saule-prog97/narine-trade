import type { ReactNode } from 'react'
import { Eyebrow } from '../eyebrow'
import { Reveal } from '../reveal'
import {
  HeadingRoot,
  HeadingSubtitle,
  HeadingTitle,
} from './SectionHeading.styled'

interface SectionHeadingProps {
  eyebrow?: ReactNode
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <HeadingRoot $align={align}>
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={80}>
        <HeadingTitle>{title}</HeadingTitle>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <HeadingSubtitle>{subtitle}</HeadingSubtitle>
        </Reveal>
      )}
    </HeadingRoot>
  )
}
