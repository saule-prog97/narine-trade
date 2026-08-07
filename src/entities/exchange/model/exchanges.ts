import type { Exchange } from './types'

/**
 * Партнёрские ссылки на биржи — регистрация по ним даёт сниженную
 * комиссию. Порядок отражает приоритет, с которым я их рекомендую.
 */
export const EXCHANGES: Exchange[] = [
  {
    id: 'bitget',
    name: 'Bitget',
    mark: 'BG',
    accent: '#00E8F0',
    note: 'Спот и фьючерсы',
    url: 'https://partner.bitget.com/bg/NARINE',
  },
  {
    id: 'bybit',
    name: 'Bybit',
    mark: 'BY',
    accent: '#F7A600',
    note: 'Спот и фьючерсы',
    url: 'https://partner.bybit.com/b/104114',
  },
  {
    id: 'binance',
    name: 'Binance',
    mark: 'BN',
    accent: '#F0B90B',
    note: 'Крупнейшая биржа',
    url: 'https://www.binance.info/referral/earn-together/refertoearn2000usdc/claim?hl=ru&ref=GRO_14352_B87LM&utm_source=referralmode',
  },
  {
    id: 'mexc',
    name: 'MEXC',
    mark: 'MX',
    accent: '#00B897',
    note: 'Много альткоинов',
    url: 'https://www.mexc.com/ru-RU/invite/customer-register?inviteCode=mexc-Nari7',
  },
  {
    id: 'kucoin',
    name: 'KuCoin',
    mark: 'KC',
    accent: '#24D6A8',
    note: 'Спот и фьючерсы',
    url: 'https://www.kucoin.com/r/af/CX8TFPLE',
  },
  {
    id: 'bingx',
    name: 'BingX',
    mark: 'BX',
    accent: '#5B8CFF',
    note: 'Копитрейдинг',
    url: 'https://bingx.com/invite/B0NA5XQQ/',
  },
  {
    id: 'blofin',
    name: 'Blofin',
    mark: 'BF',
    accent: '#7DE9FB',
    note: 'Быстрый старт',
    url: 'https://partner.blofin.com/d/NARINE',
  },
  {
    id: 'weex',
    name: 'WEEX',
    mark: 'WX',
    accent: '#FFC94A',
    note: 'Фьючерсы',
    url: 'https://www.weex.com/ru/register?vipCode=narine777',
  },
  {
    id: 'toobit',
    name: 'Toobit',
    mark: 'TB',
    accent: '#A78BFA',
    note: 'Фьючерсы',
    url: 'https://www.toobit.pro/t/narine50',
  },
  {
    id: 'bitunix',
    name: 'Bitunix',
    mark: 'BU',
    accent: '#34D399',
    note: 'Фьючерсы',
    url: 'https://www.bitunix.com/register?inviteCode=mudtxu',
  },
]
