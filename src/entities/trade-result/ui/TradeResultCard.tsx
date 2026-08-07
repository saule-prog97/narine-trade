import { useCountUp, useInView } from '@/shared/lib'
import { GlowCard } from '@/shared/ui'
import { TrendIcon } from '@/shared/ui/icon'
import type { TradeResult } from '../model/types'
import {
  CardShell,
  Chart,
  ChartArea,
  ChartPath,
  Exchange,
  Head,
  Pair,
  PriceLabel,
  PriceValue,
  Prices,
  Roi,
  Tag,
  Tags,
} from './TradeResultCard.styled'

interface TradeResultCardProps {
  result: TradeResult
  /** Разная форма кривой для каждой карточки. */
  shape?: 'a' | 'b'
}

const SHAPES = {
  a: 'M0 62 L34 54 L62 58 L96 40 L128 46 L164 28 L198 33 L232 16 L268 20 L300 4',
  b: 'M0 66 L30 60 L58 63 L88 44 L118 50 L150 30 L182 36 L214 22 L250 26 L300 2',
} as const

export function TradeResultCard({ result, shape = 'a' }: TradeResultCardProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const roi = useCountUp(result.roi, inView)

  const line = SHAPES[shape]
  const area = `${line} L300 76 L0 76 Z`

  return (
    <CardShell ref={ref}>
      <GlowCard>
        <Head>
          <Exchange>
            <TrendIcon size={15} />
            {result.exchange}
          </Exchange>
          <Tags>
            <Tag $accent>{result.direction}</Tag>
            <Tag>{result.leverage}</Tag>
          </Tags>
        </Head>

        <Pair>{result.pair}</Pair>

        <Roi>
          +
          {roi.toLocaleString('ru-RU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: false,
          })}
          %
        </Roi>

        <Chart viewBox="0 0 300 76" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="roi-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
            </linearGradient>
          </defs>
          <ChartArea d={area} $inView={inView} />
          <ChartPath d={line} $inView={inView} />
        </Chart>

        <Prices>
          <div>
            <PriceLabel>Цена входа</PriceLabel>
            <PriceValue>{result.entry}</PriceValue>
          </div>
          <div>
            <PriceLabel>{result.exitLabel}</PriceLabel>
            <PriceValue>{result.exit}</PriceValue>
          </div>
        </Prices>
      </GlowCard>
    </CardShell>
  )
}
