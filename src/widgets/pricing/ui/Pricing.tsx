import { TARIFFS, TariffCard } from '@/entities/tariff'
import { Reveal, Section, SectionHeading } from '@/shared/ui'
import { Cell, Grid } from './Pricing.styled'

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeading
        align="center"
        eyebrow="Тарифы"
        title="Выбери формат под свою задачу"
        subtitle="Один и тот же материал - разная глубина сопровождения. Если сомневаешься, что выбрать, напиши мне: подскажу честно."
      />

      <Grid>
        {TARIFFS.map((tariff, index) => (
          <Cell key={tariff.id}>
            <Reveal delay={index * 120} direction="scale">
              <TariffCard tariff={tariff} />
            </Reveal>
          </Cell>
        ))}
      </Grid>
    </Section>
  )
}
