import { EXCHANGES, ExchangeCard } from '@/entities/exchange'
import { CONTACTS } from '@/shared/config'
import { Reveal, Section, SectionHeading } from '@/shared/ui'
import {
  Cell,
  Discount,
  DiscountText,
  DiscountValue,
  Grid,
  Hint,
  HintAccent,
} from './Exchanges.styled'

export function Exchanges() {
  return (
    <Section id="exchanges">
      <SectionHeading
        eyebrow="Биржи"
        title="Скидка на комиссии до 51% по моим ссылкам"
        subtitle="Комиссия съедает прибыль тише всего — и потому больнее всего. Регистрируйся по партнёрским ссылкам и торгуй на сниженных комиссиях с первого дня."
      />

      <Reveal>
        <Discount>
          <DiscountValue>−51%</DiscountValue>
          <DiscountText>
            Максимальный размер скидки на торговую комиссию. Точный процент
            зависит от биржи и её текущих условий — актуальные значения всегда
            указаны на странице регистрации.
          </DiscountText>
        </Discount>
      </Reveal>

      <Grid>
        {EXCHANGES.map((exchange, index) => (
          <Cell key={exchange.id}>
            <Reveal delay={(index % 4) * 70}>
              <ExchangeCard exchange={exchange} />
            </Reveal>
          </Cell>
        ))}
      </Grid>

      <Reveal delay={140}>
        <Hint>
          Уже есть аккаунт на бирже? Напиши мне в{' '}
          <HintAccent>{CONTACTS.telegramHandle}</HintAccent> — подскажу, как
          подключить сниженную комиссию к существующему профилю.
        </Hint>
      </Reveal>
    </Section>
  )
}
