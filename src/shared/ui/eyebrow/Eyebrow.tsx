import type { ReactNode } from 'react'
import { EyebrowDot, EyebrowRoot } from './Eyebrow.styled'

interface EyebrowProps {
  children: ReactNode
  withDot?: boolean
  className?: string
}

export function Eyebrow({ children, withDot = true, className }: EyebrowProps) {
  return (
    <EyebrowRoot className={className}>
      {withDot && <EyebrowDot aria-hidden />}
      {children}
    </EyebrowRoot>
  )
}
