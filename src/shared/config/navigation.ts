export interface NavItem {
  id: string
  label: string
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'Обо мне' },
  { id: 'format', label: 'Формат' },
  { id: 'program', label: 'Программа' },
  { id: 'mentorship', label: 'Наставничество' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'pricing', label: 'Тарифы' },
  { id: 'exchanges', label: 'Биржи' },
]
