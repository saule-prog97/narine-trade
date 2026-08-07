import { TRADE_RESULTS, TradeResultCard } from '@/entities/trade-result'
import { Reveal, Section, SectionHeading } from '@/shared/ui'
import { Disclaimer, Grid } from './Results.styled'

export function Results() {
  return (
    <Section id="results">
      <SectionHeading
        eyebrow="Сделки"
        title="Стратегия, которую я преподаю, — та же, по которой торгую"
        subtitle="Несколько сделок из моей торговли. Разбор точек входа, сопровождения позиции и фиксации — часть программы обучения."
      />

      <Grid>
        {TRADE_RESULTS.map((result, index) => (
          <Reveal key={result.id} delay={index * 130}>
            <TradeResultCard result={result} shape={index === 0 ? 'a' : 'b'} />
          </Reveal>
        ))}
      </Grid>

      <Reveal delay={200}>
        <Disclaimer>
          Результаты прошлых сделок не гарантируют будущей доходности. Торговля
          криптовалютой связана с риском потери капитала — все решения вы
          принимаете самостоятельно.
        </Disclaimer>
      </Reveal>
    </Section>
  )
}
