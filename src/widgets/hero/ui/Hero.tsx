import { PORTRAIT } from '@/shared/assets'
import { CONTACTS } from '@/shared/config'
import { Button, Eyebrow } from '@/shared/ui'
import { ArrowIcon, TelegramIcon, TrendIcon } from '@/shared/ui/icon'
import { HERO_STATS } from '../model/highlights'
import { ScrollCue } from './ScrollCue'
import {
  CaptionName,
  CaptionRole,
  Content,
  Ctas,
  FloatCard,
  FloatLabel,
  FloatPair,
  FloatValue,
  HeroInner,
  HeroRoot,
  Lead,
  LeadAccent,
  Orbit,
  PortraitCaption,
  PortraitFrame,
  PortraitImage,
  PortraitShade,
  Stat,
  StatLabel,
  Stats,
  StatValue,
  Title,
  TitleBrand,
  TitleSub,
  Visual,
} from './Hero.styled'

export function Hero() {
  return (
    <HeroRoot id="top">
      <HeroInner>
        <Content>
          <Eyebrow>Education + Mentorship · Crypto</Eyebrow>

          <Title>
            <TitleBrand>NARINE</TitleBrand>
            <TitleSub>Трейдинг, который наконец складывается в систему</TitleSub>
          </Title>

          <Lead>
            <LeadAccent>15 вебинаров в прямом эфире</LeadAccent>, персональное
            наставничество и сопровождение в реальных сделках. Разбираю рынок
            так, чтобы было понятно даже с нуля — и остаюсь рядом, пока ты не
            начнёшь торговать сама.
          </Lead>

          <Ctas>
            <Button
              href={CONTACTS.telegramUrl}
              external
              size="lg"
              icon={<TelegramIcon size={18} />}
            >
              Записаться на обучение
            </Button>
            <Button
              href="#program"
              variant="outline"
              size="lg"
              icon={<ArrowIcon size={16} />}
            >
              Смотреть программу
            </Button>
          </Ctas>

          <Stats>
            {HERO_STATS.map((stat) => (
              <Stat key={stat.label}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </Stat>
            ))}
          </Stats>
        </Content>

        <Visual>
          <Orbit aria-hidden />

          <FloatCard $position="top">
            <FloatLabel>Bybit · Long 5×</FloatLabel>
            <FloatValue>
              <TrendIcon size={15} />
              +247.61%
            </FloatValue>
            <FloatPair>ENSUSDT</FloatPair>
          </FloatCard>

          <PortraitFrame as="figure">
            <PortraitImage
              src={PORTRAIT.webp}
              alt={PORTRAIT.alt}
              width={520}
              height={945}
              loading="eager"
              decoding="async"
            />
            <PortraitShade aria-hidden />
            <PortraitCaption>
              <CaptionName>НАРИНЕ</CaptionName>
              <CaptionRole>Crypto trader · Mentor</CaptionRole>
            </PortraitCaption>
          </PortraitFrame>

          <FloatCard $position="bottom">
            <FloatLabel>Bitget · Long 25×</FloatLabel>
            <FloatValue>
              <TrendIcon size={15} />
              +2233.33%
            </FloatValue>
            <FloatPair>FTMUSDT</FloatPair>
          </FloatCard>
        </Visual>
      </HeroInner>

      <ScrollCue target="about" />
    </HeroRoot>
  )
}
