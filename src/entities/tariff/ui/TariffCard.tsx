import { CONTACTS } from '@/shared/config'
import { Button, GlowCard } from '@/shared/ui'
import { CheckIcon, PlusIcon, TelegramIcon } from '@/shared/ui/icon'
import type { Tariff } from '../model/types'
import {
  Badge,
  CardFooter,
  CardShell,
  Divider,
  FeatureItem,
  FeatureList,
  FeatureMark,
  Kicker,
  Name,
  Note,
  PriceCurrency,
  PriceRow,
  PriceValue,
} from './TariffCard.styled'

interface TariffCardProps {
  tariff: Tariff
}

export function TariffCard({ tariff }: TariffCardProps) {
  const featured = Boolean(tariff.featured)

  return (
    <CardShell $featured={featured}>
      {tariff.badge && <Badge>{tariff.badge}</Badge>}

      <GlowCard highlight={featured}>
        <div>
          <Kicker>{tariff.kicker}</Kicker>
          <Name>{tariff.name}</Name>
          <PriceRow>
            <PriceValue>{tariff.price}</PriceValue>
            <PriceCurrency>{tariff.currency}</PriceCurrency>
          </PriceRow>
        </div>

        {tariff.note && <Note>{tariff.note}</Note>}

        <Divider />

        <FeatureList>
          {tariff.features.map((feature) => (
            <FeatureItem key={feature.text} $included={feature.included}>
              <FeatureMark $included={feature.included}>
                {feature.included ? (
                  <CheckIcon size={12} />
                ) : (
                  <PlusIcon size={12} />
                )}
              </FeatureMark>
              {feature.text}
            </FeatureItem>
          ))}
        </FeatureList>

        <CardFooter>
          <Button
            href={CONTACTS.telegramUrl}
            external
            full
            size="md"
            variant={featured ? 'primary' : 'outline'}
            icon={<TelegramIcon size={16} />}
          >
            Занять место
          </Button>
        </CardFooter>
      </GlowCard>
    </CardShell>
  )
}
