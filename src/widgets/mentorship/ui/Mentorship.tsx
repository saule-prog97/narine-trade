import { Reveal, Section, SectionHeading } from '@/shared/ui'
import { MENTORSHIP_PERKS } from '../model/perks'
import { Grid, Halo, Perk, PerkNumber, PerkText, Wordmark } from './Mentorship.styled'

export function Mentorship() {
  return (
    <Section id="mentorship" tone="accent">
      <Halo aria-hidden />

      <Reveal direction="scale">
        <Wordmark>MENTORSHIP</Wordmark>
      </Reveal>

      <SectionHeading
        align="center"
        eyebrow="Наставничество 1×1"
        title="Два месяца, когда ты не остаёшься с рынком один на один"
        subtitle="Разбор твоих сделок, торговый план, работа над ошибками и поддержка - включая ту, что нужна не графику, а тебе."
      />

      <Grid>
        {MENTORSHIP_PERKS.map((perk, index) => (
          <Reveal key={perk} delay={(index % 2) * 90}>
            <Perk>
              <PerkNumber aria-hidden>{index + 1}</PerkNumber>
              <PerkText>{perk}</PerkText>
            </Perk>
          </Reveal>
        ))}
      </Grid>
    </Section>
  )
}
