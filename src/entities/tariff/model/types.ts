export interface TariffFeature {
  text: string
  /** false — пункт присутствует в тарифе как ограничение. */
  included: boolean
}

export interface Tariff {
  id: string
  /** Латинское название блока: EDUCATION / MENTORSHIP. */
  kicker: string
  name: string
  price: string
  currency: string
  note?: string
  badge?: string
  features: TariffFeature[]
  featured?: boolean
}
