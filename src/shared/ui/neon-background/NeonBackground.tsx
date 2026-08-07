import {
  Aurora,
  BackdropRoot,
  GridOverlay,
  NetworkCanvas,
  Noise,
  Scanline,
  Vignette,
} from './NeonBackground.styled'
import { useParticleNetwork } from './useParticleNetwork'

/** Фиксированный анимированный фон всей страницы. */
export function NeonBackground() {
  const canvasRef = useParticleNetwork()

  return (
    <BackdropRoot aria-hidden>
      <Aurora
        $color="rgba(255, 61, 190, 0.5)"
        $size="52vw"
        $top="-14vw"
        $left="-10vw"
        $delay="0s"
      />
      <Aurora
        $color="rgba(34, 211, 238, 0.4)"
        $size="46vw"
        $top="34vh"
        $left="62vw"
        $delay="-9s"
      />
      <Aurora
        $color="rgba(168, 85, 247, 0.42)"
        $size="58vw"
        $top="68vh"
        $left="8vw"
        $delay="-17s"
      />
      <GridOverlay />
      <NetworkCanvas ref={canvasRef} />
      <Scanline />
      <Noise />
      <Vignette />
    </BackdropRoot>
  )
}
