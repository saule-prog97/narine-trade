import { EXCHANGES, ExchangeCard } from '@/entities/exchange'
import { CONTACTS } from '@/shared/config'
import { usePointerGlow } from '@/shared/lib'
import { Reveal, Section, SectionHeading } from '@/shared/ui'
import { ArrowIcon, CheckIcon, TradingViewIcon } from '@/shared/ui/icon'
import { TRADINGVIEW } from '../model/tradingview'
import {
  Cell,
  Discount,
  DiscountText,
  DiscountValue,
  Grid,
  Hint,
  HintAccent,
  TvBody,
  TvCta,
  TvLabel,
  TvMark,
  TvPanel,
  TvPerk,
  TvPerks,
  TvTitle,
} from './Exchanges.styled'

export function Exchanges() {
  const { ref, onPointerMove, onPointerLeave } =
    usePointerGlow<HTMLAnchorElement>()

  return (
    <Section id="exchanges">
      <SectionHeading
        eyebrow="Биржи"
        title="Скидка на комиссии до 51% по моим ссылкам"
        subtitle="Комиссия съедает прибыль тише всего - и потому больнее всего. Регистрируйся по партнёрским ссылкам и торгуй на сниженных комиссиях с первого дня."
      />

      <Reveal>
        <Discount>
          <DiscountValue>−51%</DiscountValue>
          <DiscountText>
            Максимальный размер скидки на торговую комиссию. Точный процент
            зависит от биржи и её текущих условий - актуальные значения всегда
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

      <Reveal delay={120}>
        <TvPanel
          ref={ref}
          href={TRADINGVIEW.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
        >
          <TvMark aria-hidden>
            <TradingViewIcon size={38} />
          </TvMark>

          <TvBody>
            <TvLabel>TradingView</TvLabel>
            <TvTitle>Терминал, в котором я строю все свои разборы</TvTitle>

            <TvPerks>
              {TRADINGVIEW.perks.map((perk) => (
                <TvPerk key={perk}>
                  <CheckIcon size={14} />
                  {perk}
                </TvPerk>
              ))}
            </TvPerks>
          </TvBody>

          <TvCta>
            Оформить по моей ссылке
            <ArrowIcon size={16} />
          </TvCta>
        </TvPanel>
      </Reveal>

      <Reveal delay={180}>
        <Hint>
          Уже есть аккаунт на бирже? Напиши мне в{' '}
          <HintAccent>{CONTACTS.telegramHandle}</HintAccent> - подскажу, как
          подключить сниженную комиссию к существующему профилю.
        </Hint>
      </Reveal>
    </Section>
  )
}
