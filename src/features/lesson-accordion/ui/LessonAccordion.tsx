import { useId, useState } from 'react'
import type { Lesson } from '@/entities/lesson'
import { Reveal } from '@/shared/ui'
import { PlusIcon } from '@/shared/ui/icon'
import {
  AccordionList,
  Chevron,
  Item,
  Kicker,
  Number,
  Panel,
  PanelInner,
  Title,
  TitleGroup,
  TopicItem,
  TopicList,
  Trigger,
} from './LessonAccordion.styled'

interface LessonAccordionProps {
  lessons: Lesson[]
  /** Номер урока, раскрытого по умолчанию. */
  defaultOpen?: number
}

export function LessonAccordion({
  lessons,
  defaultOpen,
}: LessonAccordionProps) {
  const [openNumber, setOpenNumber] = useState<number | null>(
    defaultOpen ?? null,
  )
  const baseId = useId()

  const toggle = (lessonNumber: number) =>
    setOpenNumber((current) => (current === lessonNumber ? null : lessonNumber))

  return (
    <AccordionList>
      {lessons.map((lesson, index) => {
        const open = openNumber === lesson.number
        const panelId = `${baseId}-panel-${lesson.number}`
        const triggerId = `${baseId}-trigger-${lesson.number}`

        return (
          <Reveal key={lesson.number} delay={(index % 2) * 70}>
            <Item $open={open} $featured={Boolean(lesson.featured)}>
              <Trigger
                id={triggerId}
                type="button"
                $open={open}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(lesson.number)}
              >
                <Number $open={open}>
                  {String(lesson.number).padStart(2, '0')}
                </Number>

                <TitleGroup>
                  <Kicker>Урок № {lesson.number}</Kicker>
                  <Title>{lesson.title}</Title>
                </TitleGroup>

                <Chevron $open={open} aria-hidden>
                  <PlusIcon size={16} />
                </Chevron>
              </Trigger>

              <Panel
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                $open={open}
              >
                <PanelInner>
                  <TopicList>
                    {lesson.topics.map((topic) => (
                      <TopicItem key={topic}>{topic}</TopicItem>
                    ))}
                  </TopicList>
                </PanelInner>
              </Panel>
            </Item>
          </Reveal>
        )
      })}
    </AccordionList>
  )
}
