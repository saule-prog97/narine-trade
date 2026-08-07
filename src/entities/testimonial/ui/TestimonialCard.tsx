import { GlowCard } from '@/shared/ui'
import { QuoteIcon } from '@/shared/ui/icon'
import type { Testimonial } from '../model/types'
import {
  Author,
  AuthorMeta,
  AuthorName,
  AuthorRole,
  Avatar,
  CardShell,
  QuoteMark,
  Text,
} from './TestimonialCard.styled'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <CardShell>
      <GlowCard>
        <QuoteMark>
          <QuoteIcon size={26} />
        </QuoteMark>

        <Text>{testimonial.text}</Text>

        <Author>
          <Avatar aria-hidden>{testimonial.initial}</Avatar>
          <AuthorMeta>
            <AuthorName>{testimonial.author}</AuthorName>
            <AuthorRole>{testimonial.role}</AuthorRole>
          </AuthorMeta>
        </Author>
      </GlowCard>
    </CardShell>
  )
}
