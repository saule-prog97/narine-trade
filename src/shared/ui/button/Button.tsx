import type { ReactNode } from 'react'
import {
  ButtonIcon,
  ButtonRoot,
  type ButtonSize,
  type ButtonVariant,
} from './Button.styled'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  full?: boolean
  icon?: ReactNode
  external?: boolean
  className?: string
}

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  full = false,
  icon,
  external = false,
  className,
}: ButtonProps) {
  return (
    <ButtonRoot
      href={href}
      className={className}
      $variant={variant}
      $size={size}
      $full={full}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span>{children}</span>
      {icon && <ButtonIcon aria-hidden>{icon}</ButtonIcon>}
    </ButtonRoot>
  )
}
