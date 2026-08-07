interface IconProps {
  size?: number
  className?: string
}

export function TelegramIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M21.94 4.2a1.3 1.3 0 0 0-1.35-.2L2.9 11.05c-.98.4-.94 1.8.06 2.14l4.3 1.45 1.63 5.06c.27.83 1.33 1.07 1.93.44l2.4-2.5 4.34 3.2c.7.5 1.7.13 1.9-.72l3.05-13.6c.1-.5-.1-1-.57-1.32ZM9.2 14.1l8.9-5.9-7.2 6.8-.3 3.2-1.4-4.1Z" />
    </svg>
  )
}

export function ArrowIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h13" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export function PlusIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  )
}

export function CheckIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m4 12.5 5.2 5.2L20 7" />
    </svg>
  )
}

export function SparkIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2 13.9 8.6 20.5 10.5 13.9 12.4 12 19 10.1 12.4 3.5 10.5 10.1 8.6 12 2Z" />
    </svg>
  )
}

export function BoltIcon({ size = 22, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M13.5 2 4 13.5h6L9.5 22 20 10.5h-6.5L13.5 2Z" />
    </svg>
  )
}

export function CapIcon({ size = 26, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3 22 8l-10 5L2 8l10-5Z" />
      <path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />
      <path d="M22 8v6" />
    </svg>
  )
}

export function BrainIcon({ size = 26, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 5a3 3 0 0 0-5.9-.7A3.2 3.2 0 0 0 3.4 9a3.2 3.2 0 0 0 .5 4.7A3 3 0 0 0 6.5 19 3 3 0 0 0 12 18Z" />
      <path d="M12 5a3 3 0 0 1 5.9-.7A3.2 3.2 0 0 1 20.6 9a3.2 3.2 0 0 1-.5 4.7A3 3 0 0 1 17.5 19 3 3 0 0 1 12 18Z" />
      <path d="M12 5v13" />
    </svg>
  )
}

export function ChatIcon({ size = 26, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M8 14H5.5A2.5 2.5 0 0 1 3 11.5v-5A2.5 2.5 0 0 1 5.5 4h9A2.5 2.5 0 0 1 17 6.5V8" />
      <path d="M9.5 10h9a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5H16l-3.5 3v-3H9.5A2.5 2.5 0 0 1 7 17.5v-5A2.5 2.5 0 0 1 9.5 10Z" />
    </svg>
  )
}

export function TrendIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m3 16 5.5-5.5 3.5 3.5L21 5" />
      <path d="M15 5h6v6" />
    </svg>
  )
}

export function QuoteIcon({ size = 28, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M9.6 5.5C6.4 6.9 4.3 9.8 4.3 13.4c0 3 1.8 5.1 4.3 5.1 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.06-1 .13.4-1.6 2-3.2 3.9-4L9.6 5.5Zm9.3 0c-3.2 1.4-5.3 4.3-5.3 7.9 0 3 1.8 5.1 4.3 5.1 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.06-1 .13.4-1.6 2-3.2 3.9-4l-2.4-1.9Z" />
    </svg>
  )
}
