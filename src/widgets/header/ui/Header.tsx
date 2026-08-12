import { useEffect, useState } from 'react'
import { CONTACTS, NAV_ITEMS } from '@/shared/config'
import { useActiveSection, useScrollProgress } from '@/shared/lib'
import { Button } from '@/shared/ui'
import { TelegramIcon } from '@/shared/ui/icon'
import {
  Actions,
  Bar,
  BurgerButton,
  HeaderRoot,
  Logo,
  LogoMark,
  LogoName,
  LogoTagline,
  LogoText,
  MobileLink,
  MobileMenu,
  MobileNav,
  Nav,
  NavLink,
  ProgressBar,
} from './Header.styled'

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

export function Header() {
  const { progress, scrolled } = useScrollProgress()
  const active = useActiveSection(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)

  // Блокируем прокрутку страницы, пока открыто мобильное меню.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <HeaderRoot $scrolled={scrolled || menuOpen}>
        <Bar>
          <Logo href="#top" aria-label={`${CONTACTS.brand} - на главную`}>
            <LogoMark aria-hidden>N</LogoMark>
            <LogoText>
              <LogoName>{CONTACTS.brand}</LogoName>
              <LogoTagline>{CONTACTS.tagline}</LogoTagline>
            </LogoText>
          </Logo>

          <Nav aria-label="Основная навигация">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                href={`#${item.id}`}
                $active={active === item.id}
              >
                {item.label}
              </NavLink>
            ))}
          </Nav>

          <Actions>
            <Button
              href={CONTACTS.telegramUrl}
              external
              icon={<TelegramIcon size={16} />}
            >
              Написать
            </Button>

            <BurgerButton
              type="button"
              $open={menuOpen}
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </BurgerButton>
          </Actions>
        </Bar>

        <ProgressBar $progress={progress} aria-hidden />
      </HeaderRoot>

      <MobileMenu $open={menuOpen} aria-hidden={!menuOpen}>
        <MobileNav aria-label="Мобильная навигация">
          {NAV_ITEMS.map((item, index) => (
            <MobileLink
              key={item.id}
              href={`#${item.id}`}
              $open={menuOpen}
              $index={index}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </MobileLink>
          ))}
        </MobileNav>

        <Button
          href={CONTACTS.telegramUrl}
          external
          full
          size="lg"
          icon={<TelegramIcon size={18} />}
        >
          Написать в Telegram
        </Button>
      </MobileMenu>
    </>
  )
}
