import { Button, Reveal, Section, SectionHeading } from '@/shared/ui'
import {
  ArrowIcon,
  BanIcon,
  BotIcon,
  PlayIcon,
  TrendIcon,
} from '@/shared/ui/icon'
import {
  BOT_ADVANTAGES,
  BOT_BROADCASTS,
  BOT_FREE_FROM,
  BOT_LINKS,
} from '../model/bot'
import {
  Advantage,
  AdvantageBody,
  AdvantageIndex,
  AdvantageList,
  AdvantageText,
  AdvantageTitle,
  BotBadge,
  Broadcast,
  BroadcastBlock,
  BroadcastHint,
  BroadcastLabel,
  BroadcastList,
  BroadcastMark,
  BroadcastMeta,
  BroadcastName,
  Connect,
  ConnectActions,
  ConnectBody,
  ConnectTitle,
  FreeItem,
  FreeList,
  FreeMark,
  FreePanel,
  FuturesNote,
  Layout,
  PanelTitle,
} from './TradingBot.styled'

export function TradingBot() {
  return (
    <Section id="algo" tone="sunken" divider>
      <SectionHeading
        eyebrow="Торговый алгоритм"
        title="Бот, который торгует на споте"
        subtitle="На споте нет давления фьючерсов. Алгоритм спокойно накапливает актив, пока ты занимаешься своими делами."
      />

      <Layout>
        <Reveal direction="right">
          <FreePanel>
            <PanelTitle>Чего здесь нет</PanelTitle>

            <FreeList>
              {BOT_FREE_FROM.map((item) => (
                <FreeItem key={item}>
                  <FreeMark aria-hidden>
                    <BanIcon size={14} />
                  </FreeMark>
                  {item}
                </FreeItem>
              ))}
            </FreeList>

            <FuturesNote>
              <TrendIcon size={17} />
              При этом я не отказываюсь от фьючерсов — они остаются частью моей
              торговли и программы обучения.
            </FuturesNote>
          </FreePanel>
        </Reveal>

        <AdvantageList>
          {BOT_ADVANTAGES.map((advantage, index) => (
            <Reveal key={advantage.title} delay={index * 110} direction="left">
              <Advantage>
                <AdvantageIndex>0{index + 1}</AdvantageIndex>
                <AdvantageBody>
                  <AdvantageTitle>{advantage.title}</AdvantageTitle>
                  <AdvantageText>{advantage.text}</AdvantageText>
                </AdvantageBody>
              </Advantage>
            </Reveal>
          ))}
        </AdvantageList>
      </Layout>

      <Reveal delay={120}>
        <Connect>
          <BotBadge aria-hidden>
            <BotIcon size={64} />
          </BotBadge>

          <ConnectBody>
            <ConnectTitle>Подключиться к торговому алгоритму</ConnectTitle>

            <ConnectActions>
              <Button
                href={BOT_LINKS.primary}
                external
                size="lg"
                icon={<ArrowIcon size={16} />}
              >
                Открыть платформу
              </Button>
              <Button
                href={BOT_LINKS.registration}
                external
                variant="outline"
                size="lg"
                icon={<ArrowIcon size={16} />}
              >
                Регистрация по моей ссылке
              </Button>
            </ConnectActions>
          </ConnectBody>
        </Connect>
      </Reveal>

      <BroadcastBlock>
        <Reveal>
          <BroadcastLabel>Записи эфиров с разбором алгоритма</BroadcastLabel>
        </Reveal>

        <BroadcastList>
          {BOT_BROADCASTS.map((broadcast, index) => (
            <Reveal key={broadcast.url} delay={index * 90}>
              <Broadcast
                href={broadcast.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BroadcastMark aria-hidden>
                  <PlayIcon size={17} />
                </BroadcastMark>
                <BroadcastMeta>
                  <BroadcastName>{broadcast.label}</BroadcastName>
                  <BroadcastHint>Смотреть в Telegram</BroadcastHint>
                </BroadcastMeta>
              </Broadcast>
            </Reveal>
          ))}
        </BroadcastList>
      </BroadcastBlock>
    </Section>
  )
}
