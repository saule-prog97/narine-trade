import type { TradeResult } from './types'

/** Сделки из презентации — скриншоты Bybit и Bitget. */
export const TRADE_RESULTS: TradeResult[] = [
  {
    id: 'ens',
    exchange: 'Bybit',
    pair: 'ENSUSDT',
    direction: 'Long',
    leverage: '5×',
    roi: 247.61,
    entry: '16.882',
    exit: '25.276',
    exitLabel: 'Текущая цена',
  },
  {
    id: 'ftm',
    exchange: 'Bitget',
    pair: 'FTMUSDT',
    direction: 'Long',
    leverage: '25×',
    roi: 2233.33,
    entry: '0.5925',
    exit: '1.1218',
    exitLabel: 'Цена закрытия',
  },
]
