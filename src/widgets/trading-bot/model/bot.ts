export interface BotAdvantage {
  title: string
  text: string
}

export interface BotBroadcast {
  label: string
  url: string
}

/** Чего на споте не бывает — в отличие от фьючерсов. */
export const BOT_FREE_FROM: string[] = [
  'Без ликвидаций',
  'Без плечей',
  'Без вопроса: «откуда долить депозит?»',
  'Без стресса: «где усреднить позицию?»',
]

/** Что даёт спотовый бот. */
export const BOT_ADVANTAGES: BotAdvantage[] = [
  {
    title: 'Рынок падает',
    text: 'Бот покупает дешевле — просадка превращается в возможность набрать актив.',
  },
  {
    title: 'Рынок восстанавливается',
    text: 'Мы уже в позиции: не нужно ловить момент входа и догонять движение.',
  },
  {
    title: 'Нервы в порядке',
    text: 'Алгоритм работает по правилам, а не по эмоциям, — и не будит тебя ночью.',
  },
]

export const BOT_LINKS = {
  primary: 'https://crypto.cryppush.net/',
  registration: 'https://cryppush.net/registration/9879cb7b9d',
} as const

/** Записи эфиров с разбором алгоритма. */
export const BOT_BROADCASTS: BotBroadcast[] = [
  { label: 'Первый эфир', url: 'https://t.me/narinetrade/3095' },
  { label: 'Второй эфир', url: 'https://t.me/narinetrade/3146' },
  { label: 'Третий эфир', url: 'https://t.me/narinetrade/3316' },
]
