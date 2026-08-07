import { Reveal, Section, SectionHeading } from '@/shared/ui'
import { QuoteIcon } from '@/shared/ui/icon'
import { PILLARS } from '../model/pillars'
import {
  AuthorLine,
  AuthorName,
  Layout,
  PillarBody,
  PillarIndex,
  PillarItem,
  PillarList,
  PillarText,
  PillarTitle,
  QuoteAuthor,
  QuoteCard,
  QuoteIconWrap,
  QuoteText,
} from './About.styled'

export function About() {
  return (
    <Section id="about" tone="sunken" divider>
      <SectionHeading
        eyebrow="Просто о сложном"
        title="Обучение, после которого график перестаёт быть шумом"
        subtitle="Я торгую криптовалютой и знаю, каково это — тонуть в противоречивых статьях и видео. Поэтому собрала всё, что работает, в одну последовательную программу."
      />

      <Layout>
        <Reveal direction="right">
          <QuoteCard>
            <QuoteIconWrap>
              <QuoteIcon size={34} />
            </QuoteIconWrap>

            <QuoteText>
              Впервые я решила провести подробное обучение и передать все свои
              знания в той форме, которая доступна даже для новичков.
            </QuoteText>

            <QuoteAuthor>
              <AuthorLine aria-hidden />
              <AuthorName>Нарине · автор курса</AuthorName>
            </QuoteAuthor>
          </QuoteCard>
        </Reveal>

        <PillarList>
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 110} direction="left">
              <PillarItem>
                <PillarIndex>0{index + 1}</PillarIndex>
                <PillarBody>
                  <PillarTitle>{pillar.title}</PillarTitle>
                  <PillarText>{pillar.text}</PillarText>
                </PillarBody>
              </PillarItem>
            </Reveal>
          ))}
        </PillarList>
      </Layout>
    </Section>
  )
}
