import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/shared/lib'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

const LINK_DISTANCE = 148
const DENSITY = 13000 // одна точка на такую площадь в px²
const MAX_PARTICLES = 110

/** Живая сеть точек и связей — «крипто-нерв» фона. */
export function useParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: Particle[] = []
    let width = 0
    let height = 0
    let frame = 0
    let running = true
    const pointer = { x: -9999, y: -9999 }

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const seed = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(
        MAX_PARTICLES,
        Math.max(28, Math.round((width * height) / DENSITY)),
      )

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.5 + 0.7,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20
      }

      // связи между точками
      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i]

        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist > LINK_DISTANCE) continue

          const strength = 1 - dist / LINK_DISTANCE
          const mid = (a.x + b.x) / 2 / Math.max(width, 1)

          ctx.strokeStyle = `rgba(${Math.round(255 - mid * 200)}, ${Math.round(
            61 + mid * 140,
          )}, ${Math.round(190 + mid * 48)}, ${strength * 0.3})`
          ctx.lineWidth = 0.7
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }

        // притяжение линий к курсору
        const pdx = a.x - pointer.x
        const pdy = a.y - pointer.y
        const pDist = Math.hypot(pdx, pdy)
        if (pDist < 190) {
          ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - pDist / 190) * 0.4})`
          ctx.lineWidth = 0.8
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(pointer.x, pointer.y)
          ctx.stroke()
        }

        const tint = a.x / Math.max(width, 1)
        ctx.fillStyle = `rgba(${Math.round(255 - tint * 210)}, ${Math.round(
          120 + tint * 110,
        )}, ${Math.round(220 + tint * 20)}, 0.85)`
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fill()
      }

      if (running) frame = requestAnimationFrame(draw)
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
    }

    const onPointerLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
    }

    const onVisibility = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(frame)
      } else if (!running) {
        running = true
        frame = requestAnimationFrame(draw)
      }
    }

    seed()

    if (reduced) {
      draw()
      running = false
      cancelAnimationFrame(frame)
      return
    }

    frame = requestAnimationFrame(draw)

    const resizeObserver = new ResizeObserver(seed)
    resizeObserver.observe(canvas)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerleave', onPointerLeave)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      running = false
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [reduced])

  return canvasRef
}
