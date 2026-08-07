export interface TradeResult {
  id: string
  exchange: string
  pair: string
  direction: string
  leverage: string
  /** ROI в процентах — используется для анимации счётчика. */
  roi: number
  entry: string
  exit: string
  exitLabel: string
}
