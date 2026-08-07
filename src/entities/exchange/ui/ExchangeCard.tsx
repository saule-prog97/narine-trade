import { EXCHANGE_LOGOS } from '@/shared/assets'
import { usePointerGlow } from '@/shared/lib'
import { ArrowIcon } from '@/shared/ui/icon'
import type { Exchange } from '../model/types'
import {
  Arrow,
  Body,
  CardRoot,
  Logo,
  Mark,
  Name,
  Note,
} from './ExchangeCard.styled'

interface ExchangeCardProps {
  exchange: Exchange
}

export function ExchangeCard({ exchange }: ExchangeCardProps) {
  const { ref, onPointerMove, onPointerLeave } =
    usePointerGlow<HTMLAnchorElement>()

  return (
    <CardRoot
      ref={ref}
      href={exchange.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <Mark aria-hidden $accent={exchange.accent}>
        <Logo
          src={EXCHANGE_LOGOS[exchange.id]}
          alt=""
          width={28}
          height={28}
          loading="lazy"
          decoding="async"
        />
      </Mark>

      <Body>
        <Name>{exchange.name}</Name>
        <Note>{exchange.note}</Note>
      </Body>

      <Arrow aria-hidden>
        <ArrowIcon size={14} />
      </Arrow>
    </CardRoot>
  )
}
