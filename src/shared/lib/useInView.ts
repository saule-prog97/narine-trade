import { useEffect, useRef, useState } from 'react'

interface Options {
  /** Доля элемента, при которой он считается видимым. */
  threshold?: number
  /** Отступ снизу, чтобы анимация стартовала чуть раньше. */
  rootMargin?: string
  /** Показать один раз и больше не скрывать. */
  once?: boolean
}

/**
 * Порог намеренно нулевой: блок может быть выше вьюпорта, и тогда доля
 * пересечения никогда не дойдёт до заметного значения — контент остался бы
 * невидимым. Момент срабатывания задаёт rootMargin, а не threshold.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0,
  rootMargin = '0px 0px -70px 0px',
  once = true,
}: Options = {}) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      const timer = window.setTimeout(() => setInView(true), 0)
      return () => window.clearTimeout(timer)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, inView }
}
