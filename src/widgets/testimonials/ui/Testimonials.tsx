import { TESTIMONIALS, TestimonialCard } from '@/entities/testimonial'
import { Reveal, Section, SectionHeading } from '@/shared/ui'
import { Cell, Grid } from './Testimonials.styled'

export function Testimonials() {
  return (
    <Section id="reviews" tone="sunken" divider>
      <SectionHeading
        eyebrow="Отзывы учеников"
        title="Что говорят те, кто уже прошёл обучение"
        subtitle="Живые сообщения из чата учеников — без правок и постановки."
      />

      <Grid>
        {TESTIMONIALS.map((testimonial, index) => (
          <Cell key={testimonial.id}>
            <Reveal delay={(index % 2) * 110}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          </Cell>
        ))}
      </Grid>
    </Section>
  )
}
