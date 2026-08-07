import { CueLabel, CueMouse, CueRoot } from './ScrollCue.styled'

interface ScrollCueProps {
  /** Якорь секции, к которой ведёт индикатор. */
  target: string
}

/** Ненавязчивый индикатор прокрутки под первым экраном. */
export function ScrollCue({ target }: ScrollCueProps) {
  return (
    <CueRoot href={`#${target}`} aria-label="Пролистать вниз">
      <CueLabel>Листай</CueLabel>
      <CueMouse aria-hidden />
    </CueRoot>
  )
}
