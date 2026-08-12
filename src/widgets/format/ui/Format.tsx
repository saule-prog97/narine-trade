import type { ReactNode } from 'react'
import { GlowCard, Reveal, Section, SectionHeading } from '@/shared/ui'
import { BrainIcon, CapIcon, ChatIcon } from '@/shared/ui/icon'
import { FORMAT_BLOCKS, type FormatBlock } from '../model/pillars'
import {
  CardShell,
  Grid,
  IconBox,
  Kicker,
  StepIndex,
  Text,
  Title,
} from './Format.styled'

const ICONS: Record<FormatBlock['id'], ReactNode> = {
  webinars: <CapIcon size={26} />,
  focus: <BrainIcon size={26} />,
  mentorship: <ChatIcon size={26} />,
}

export function Format() {
  return (
    <Section id="format">
      <SectionHeading
        eyebrow="Как устроено обучение"
        title="Три опоры, на которых держится результат"
        subtitle="Теория, ежедневная практика в сообществе и личное наставничество работают вместе - по отдельности ни одно из них не даёт устойчивого результата."
      />

      <Grid>
        {FORMAT_BLOCKS.map((block, index) => (
          <Reveal key={block.id} delay={index * 120}>
            <CardShell>
              <GlowCard>
                <StepIndex aria-hidden>0{index + 1}</StepIndex>
                <IconBox aria-hidden>{ICONS[block.id]}</IconBox>
                <div>
                  <Kicker>{block.kicker}</Kicker>
                  <Title>{block.title}</Title>
                </div>
                <Text>{block.text}</Text>
              </GlowCard>
            </CardShell>
          </Reveal>
        ))}
      </Grid>
    </Section>
  )
}
