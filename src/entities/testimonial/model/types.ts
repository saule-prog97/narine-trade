export interface Testimonial {
  id: string
  author: string
  /** Короткая подпись под именем. */
  role: string
  text: string
  /** Инициал для аватара-заглушки. */
  initial: string
}
