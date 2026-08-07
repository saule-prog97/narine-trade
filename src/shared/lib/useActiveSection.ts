import { useEffect, useState } from 'react'

/** Определяет, какая секция сейчас в поле зрения, — для подсветки в меню. */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const crossing = new Set<string>()

    /**
     * Секция может быть выше вьюпорта, поэтому сравнивать долю пересечения
     * бессмысленно. Вместо этого сужаем область наблюдения до узкой полосы
     * в верхней трети экрана: активна та секция, которая её пересекает.
     */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) crossing.add(entry.target.id)
          else crossing.delete(entry.target.id)
        })

        // Порядок в ids отражает порядок секций на странице.
        const current = ids.find((id) => crossing.has(id)) ?? null
        setActive(current)
      },
      { threshold: 0, rootMargin: '-30% 0px -65% 0px' },
    )

    ids.forEach((id) => {
      const node = document.getElementById(id)
      if (node) observer.observe(node)
    })

    return () => observer.disconnect()
  }, [ids])

  return active
}
