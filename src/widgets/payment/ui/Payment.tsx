import { CONTACTS } from '@/shared/config'
import { Reveal, Section, SectionHeading } from '@/shared/ui'
import { BoltIcon, TelegramIcon } from '@/shared/ui/icon'
import { PAYMENT_OPTIONS } from '../model/options'
import {
  BoltWrap,
  Handle,
  Layout,
  Option,
  OptionList,
  OptionText,
  OptionTitle,
} from './Payment.styled'

export function Payment() {
  return (
    <Section id="payment" tone="sunken" divider>
      <SectionHeading
        eyebrow="Оплата"
        title="Доступ к знаниям без барьеров"
        subtitle="Цена не должна быть причиной остаться на месте. Выбирай удобный вариант - остальное обсудим лично."
      />

      <Layout>
        <Reveal direction="scale">
          <BoltWrap aria-hidden>
            <BoltIcon size={64} />
          </BoltWrap>
        </Reveal>

        <OptionList>
          {PAYMENT_OPTIONS.map((option, index) => (
            <Reveal key={option.title} delay={index * 110}>
              <Option>
                <OptionTitle>{option.title}</OptionTitle>
                <OptionText>{option.text}</OptionText>
              </Option>
            </Reveal>
          ))}
        </OptionList>
      </Layout>

      <Reveal delay={160}>
        <Handle
          href={CONTACTS.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon size={15} />
          {CONTACTS.telegramHandle}
        </Handle>
      </Reveal>
    </Section>
  )
}
