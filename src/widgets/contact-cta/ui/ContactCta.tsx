import { CONTACTS } from '@/shared/config'
import { Button, Reveal, Section } from '@/shared/ui'
import { ArrowIcon, TelegramIcon } from '@/shared/ui/icon'
import {
  Actions,
  Meta,
  MetaDivider,
  MetaLink,
  Panel,
  PanelBorder,
  Pulse,
  Text,
  Title,
} from './ContactCta.styled'

export function ContactCta() {
  return (
    <Section id="contact">
      <Reveal direction="scale">
        <Panel>
          <PanelBorder aria-hidden />

          <Pulse aria-hidden>
            <TelegramIcon size={30} />
          </Pulse>

          <Title>Нажми, чтобы со мной связаться</Title>

          <Text>
            Расскажи, где ты сейчас находишься в трейдинге, - и я подскажу, какой
            формат подойдёт именно тебе. Отвечаю лично.
          </Text>

          <Actions>
            <Button
              href={CONTACTS.telegramUrl}
              external
              size="lg"
              icon={<TelegramIcon size={18} />}
            >
              Написать в Telegram
            </Button>
            <Button
              href="#pricing"
              variant="outline"
              size="lg"
              icon={<ArrowIcon size={16} />}
            >
              Посмотреть тарифы
            </Button>
          </Actions>

          <Meta>
            <MetaLink
              href={CONTACTS.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACTS.telegramHandle}
            </MetaLink>
            <MetaDivider aria-hidden />
            <MetaLink
              href={CONTACTS.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACTS.channelHandle}
            </MetaLink>
          </Meta>
        </Panel>
      </Reveal>
    </Section>
  )
}
