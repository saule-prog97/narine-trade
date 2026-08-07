import { useCallback, useRef } from 'react'

/**
 * Подсветка, следующая за курсором: пишет координаты в CSS-переменные
 * --glow-x / --glow-y на самом элементе.
 */
export function usePointerGlow<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)

  const onPointerMove = useCallback((event: React.PointerEvent<T>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty('--glow-x', `${event.clientX - rect.left}px`)
    node.style.setProperty('--glow-y', `${event.clientY - rect.top}px`)
  }, [])

  const onPointerLeave = useCallback(() => {
    const node = ref.current
    if (!node) return
    node.style.removeProperty('--glow-x')
    node.style.removeProperty('--glow-y')
  }, [])

  return { ref, onPointerMove, onPointerLeave }
}
