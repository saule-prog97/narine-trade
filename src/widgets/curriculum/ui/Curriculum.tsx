import { LESSONS } from '@/entities/lesson'
import { LessonAccordion } from '@/features/lesson-accordion'
import { useInView } from '@/shared/lib'
import { Reveal, Section, SectionHeading } from '@/shared/ui'
import { SparkIcon } from '@/shared/ui/icon'
import { KEY_TOPICS } from '../model/topics'
import {
  Toolbar,
  ToolbarCount,
  ToolbarHint,
  ToolbarInfo,
  Topic,
  TopicCloud,
} from './Curriculum.styled'

export function Curriculum() {
  const { ref, inView } = useInView<HTMLUListElement>()

  return (
    <Section id="program" tone="sunken" divider>
      <SectionHeading
        eyebrow="Программа"
        title="Что мы разбираем на вебинарах"
        subtitle="От структуры рынка и ликвидности до готовых торговых стратегий и психологии. Каждый урок — отдельный блок с практикой и домашним заданием."
      />

      <TopicCloud ref={ref}>
        {KEY_TOPICS.map((topic, index) => (
          <Topic key={topic} $inView={inView} $index={index}>
            {topic}
          </Topic>
        ))}
      </TopicCloud>

      <Reveal>
        <Toolbar>
          <ToolbarInfo>
            <ToolbarCount>{LESSONS.length}</ToolbarCount> уроков в программе ·
            записи остаются навсегда
          </ToolbarInfo>
          <ToolbarHint>
            <SparkIcon size={13} />
            Нажми на урок, чтобы раскрыть темы
          </ToolbarHint>
        </Toolbar>
      </Reveal>

      <LessonAccordion lessons={LESSONS} defaultOpen={LESSONS[0]?.number} />
    </Section>
  )
}
