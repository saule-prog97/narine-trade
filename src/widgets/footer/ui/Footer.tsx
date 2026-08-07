import { CONTACTS, NAV_ITEMS } from '@/shared/config'
import { TelegramIcon } from '@/shared/ui/icon'
import {
  Bottom,
  Brand,
  BrandName,
  BrandText,
  Column,
  ColumnTitle,
  FooterRoot,
  Inner,
  Link,
  Risk,
  Small,
  Social,
  SocialList,
  SocialNote,
} from './Footer.styled'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <FooterRoot>
      <Inner>
        <Brand>
          <BrandName>{CONTACTS.brand}</BrandName>
          <BrandText>
            Обучение трейдингу и персональное наставничество на крипторынке.
            Авторская торговая система, живые вебинары и сопровождение в сделках.
          </BrandText>
        </Brand>

        <Column aria-label="Разделы сайта">
          <ColumnTitle>Разделы</ColumnTitle>
          {NAV_ITEMS.map((item) => (
            <Link key={item.id} href={`#${item.id}`}>
              {item.label}
            </Link>
          ))}
        </Column>

        <div>
          <ColumnTitle>Связаться</ColumnTitle>
          <SocialList>
            <Social
              href={CONTACTS.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon size={17} />
              {CONTACTS.telegramHandle}
            </Social>
            <Social
              href={CONTACTS.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon size={17} />
              {CONTACTS.channelHandle}
            </Social>
            <SocialNote>Личные сообщения и канал</SocialNote>
          </SocialList>
        </div>
      </Inner>

      <Bottom>
        <Small>
          © {year} {CONTACTS.brand}. {CONTACTS.tagline}
        </Small>
        <Risk>
          Материалы носят образовательный характер и не являются индивидуальной
          инвестиционной рекомендацией. Торговля криптовалютой сопряжена с риском
          потери капитала.
        </Risk>
      </Bottom>
    </FooterRoot>
  )
}
