import styled, { css } from 'styled-components'
import { gradientText, media } from '@/app/styles/mixins'
import { Container } from '@/shared/ui/container'

export const HeaderRoot = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  inset-inline: 0;
  top: 0;
  z-index: 100;
  transition: all ${({ theme }) => theme.transition.base};

  ${({ $scrolled }) =>
    $scrolled &&
    css`
      background: rgba(5, 4, 12, 0.72);
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      backdrop-filter: blur(18px) saturate(150%);
      -webkit-backdrop-filter: blur(18px) saturate(150%);
      box-shadow: 0 18px 50px -34px rgba(0, 0, 0, 1);
    `}
`

export const ProgressBar = styled.span<{ $progress: number }>`
  position: absolute;
  left: 0;
  bottom: -1px;
  height: 2px;
  width: ${({ $progress }) => $progress * 100}%;
  background: ${({ theme }) => theme.gradient.brand};
  box-shadow: 0 0 12px rgba(255, 61, 190, 0.9);
  transition: width 120ms linear;
`

export const Bar = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 74px;

  ${media.sm`
    height: 64px;
  `}
`

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 11px;
  flex-shrink: 0;
`

export const LogoMark = styled.span`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 11px;
  background: ${({ theme }) => theme.gradient.brand};
  font-family: ${({ theme }) => theme.font.display};
  font-size: 17px;
  font-weight: 800;
  color: #fff;
  box-shadow: 0 8px 22px -10px rgba(255, 61, 190, 0.95);
`

export const LogoText = styled.span`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`

export const LogoName = styled.span`
  font-family: ${({ theme }) => theme.font.display};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.18em;
  ${gradientText()}
`

export const LogoTagline = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 9.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textFaint};

  ${media.sm`
    display: none;
  `}
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;

  ${media.lg`
    display: none;
  `}
`

export const NavLink = styled.a<{ $active: boolean }>`
  position: relative;
  padding: 8px 14px;
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: 14px;
  font-weight: 500;
  /* Пунктов много — без этого короткие подписи ломаются на две строки. */
  white-space: nowrap;

  /* На узких ноутбуках поджимаем меню, чтобы оно не выдавило кнопку. */
  ${media.xl`
    padding: 8px 9px;
    font-size: 13px;
  `}
  color: ${({ theme, $active }) =>
    $active ? theme.color.text : theme.color.textMuted};
  transition: color ${({ theme }) => theme.transition.base};

  &::after {
    content: '';
    position: absolute;
    left: 9px;
    right: 9px;
    bottom: 2px;
    height: 1.5px;
    border-radius: 2px;
    background: ${({ theme }) => theme.gradient.brand};
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transform-origin: left;
    transition: transform ${({ theme }) => theme.transition.base};
  }

  &:hover {
    color: ${({ theme }) => theme.color.text};
  }

  &:hover::after {
    transform: scaleX(1);
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  > a {
    ${media.sm`
      width: auto;
    `}
  }

  ${media.lg`
    > a {
      display: none;
    }
  `}
`

export const BurgerButton = styled.button<{ $open: boolean }>`
  display: none;
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 13px;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: rgba(255, 255, 255, 0.04);

  ${media.lg`
    display: grid;
    place-items: center;
  `}

  span {
    position: absolute;
    left: 13px;
    width: 18px;
    height: 1.8px;
    border-radius: 2px;
    background: ${({ theme }) => theme.color.text};
    transition: all 300ms cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  span:nth-child(1) {
    transform: translateY(${({ $open }) => ($open ? '0' : '-5px')})
      rotate(${({ $open }) => ($open ? '45deg' : '0deg')});
  }

  span:nth-child(2) {
    opacity: ${({ $open }) => ($open ? 0 : 1)};
    transform: scaleX(${({ $open }) => ($open ? 0 : 1)});
  }

  span:nth-child(3) {
    transform: translateY(${({ $open }) => ($open ? '0' : '5px')})
      rotate(${({ $open }) => ($open ? '-45deg' : '0deg')});
  }
`

export const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;
  position: fixed;
  inset: 0;
  z-index: 99;
  padding: 96px 24px 40px;
  background: rgba(4, 3, 10, 0.94);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transition:
    opacity 320ms ease,
    visibility 320ms ease;
  overflow-y: auto;

  ${media.lg`
    display: block;
  `}
`

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 28px;
`

export const MobileLink = styled.a<{ $open: boolean; $index: number }>`
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding: 15px 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 21px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: translateY(${({ $open }) => ($open ? '0' : '14px')});
  transition:
    opacity 420ms ease,
    transform 420ms cubic-bezier(0.22, 0.61, 0.36, 1);
  transition-delay: ${({ $index, $open }) => ($open ? 90 + $index * 55 : 0)}ms;

  &::before {
    content: '0${({ $index }) => $index + 1}';
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 12px;
    color: ${({ theme }) => theme.color.pink};
  }
`
