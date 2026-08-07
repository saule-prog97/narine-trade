import type { Tariff } from './types'

export const TARIFFS: Tariff[] = [
  {
    id: 'base',
    kicker: 'Education',
    name: 'Базовый минимум',
    price: '590',
    currency: 'USDT',
    note: 'Самостоятельный формат',
    features: [
      {
        text: '15 обучающих вебинаров по трейдингу в режиме реального времени',
        included: true,
      },
      { text: 'Последующий доступ ко всем материалам в записи навсегда', included: true },
      { text: 'Отдельный чат с учениками', included: true },
      { text: 'Бесплатный доступ к Фокус-группе 2.0 на 1 месяц', included: true },
      { text: 'Без обратной связи', included: false },
    ],
  },
  {
    id: 'mentorship',
    kicker: 'Mentorship',
    name: 'Обучение с наставничеством',
    price: '890',
    currency: 'USDT',
    note: 'Максимальный результат',
    badge: 'Выбор большинства',
    featured: true,
    features: [
      { text: 'Доступ ко всем обучающим вебинарам', included: true },
      {
        text: 'Проверка всех домашних заданий и индивидуальный разбор ошибок',
        included: true,
      },
      { text: 'Персональное наставничество 1×1 с фокусом на тебе', included: true },
      { text: 'Индивидуальные созвоны с разбором всех сложных вопросов', included: true },
      {
        text: 'Возможность задавать любые вопросы напрямую в личные сообщения',
        included: true,
      },
      { text: 'Сопровождение в торговле в течение 3 месяцев после обучения', included: true },
      { text: 'Бесплатный доступ к Фокус-группе 2.0 на 1 год', included: true },
    ],
  },
  {
    id: 'comeback',
    kicker: 'Education',
    name: 'Come back',
    price: '300',
    currency: '$',
    note: 'Для выпускников прошлых потоков, которые хотят обновить знания и повысить точность работы',
    features: [
      { text: '15 обучающих вебинаров по трейдингу в режиме реального времени', included: true },
      { text: 'Последующий доступ ко всем материалам в записи навсегда', included: true },
      { text: 'Отдельный чат с учениками', included: true },
      { text: 'Бесплатный доступ к Фокус-группе 2.0 на 1 месяц', included: true },
    ],
  },
]
