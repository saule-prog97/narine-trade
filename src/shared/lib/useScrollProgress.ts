import { useEffect, useState } from 'react'

/** Прогресс прокрутки страницы от 0 до 1 и флаг «страница сдвинута». */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      const offset = window.scrollY
      setProgress(scrollable > 0 ? Math.min(offset / scrollable, 1) : 0)
      setScrolled(offset > 24)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    // Первый замер — в следующем кадре, чтобы не дёргать setState прямо в эффекте.
    frame = window.requestAnimationFrame(update)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return { progress, scrolled }
}
