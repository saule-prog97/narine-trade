export interface Lesson {
  /** Номер урока в программе. */
  number: number
  title: string
  topics: string[]
  /** Помечает уроки, которые стоит выделить в списке. */
  featured?: boolean
}
