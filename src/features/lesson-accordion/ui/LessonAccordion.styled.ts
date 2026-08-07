import styled, { css } from 'styled-components'
import { glassSurface, media } from '@/app/styles/mixins'

export const AccordionList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  align-items: start;

  ${media.lg`
    grid-template-columns: minmax(0, 1fr);
  `}
`

export const Item = styled.div<{ $open: boolean; $featured: boolean }>`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  transition:
    border-color ${({ theme }) => theme.transition.base},
    box-shadow ${({ theme }) => theme.transition.base},
    background ${({ theme }) => theme.transition.base};

  ${glassSurface}

  ${({ $featured }) =>
    $featured &&
    css`
      border-color: rgba(255, 61, 190, 0.26);
    `}

  ${({ $open }) =>
    $open &&
    css`
      border-color: rgba(34, 211, 238, 0.4);
      box-shadow: 0 24px 60px -40px rgba(34, 211, 238, 0.8);
      background: linear-gradient(
        160deg,
        rgba(34, 211, 238, 0.07) 0%,
        rgba(255, 255, 255, 0.015) 60%
      );
    `}

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }
`

export const Trigger = styled.button<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 20px 22px;
  text-align: left;

  ${media.sm`
    gap: 12px;
    padding: 16px 15px;
  `}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.cyan};
    outline-offset: -4px;
  }
`

export const Number = styled.span<{ $open: boolean }>`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 13px;
  font-family: ${({ theme }) => theme.font.display};
  font-size: 15px;
  font-weight: 700;
  transition: all ${({ theme }) => theme.transition.base};

  ${({ $open, theme }) =>
    $open
      ? css`
          color: #fff;
          background: ${theme.gradient.brand};
          box-shadow: 0 10px 26px -12px rgba(255, 61, 190, 0.95);
        `
      : css`
          color: ${theme.color.textMuted};
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid ${theme.color.border};
        `}

  ${media.sm`
    width: 38px;
    height: 38px;
    border-radius: 11px;
    font-size: 13px;
  `}
`

export const TitleGroup = styled.span`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  min-width: 0;
`

export const Kicker = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textFaint};
`

export const Title = styled.span`
  font-size: clamp(15px, 1.8vw, 17.5px);
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.color.text};
`

export const Chevron = styled.span<{ $open: boolean }>`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: ${({ theme, $open }) => ($open ? theme.color.cyan : theme.color.textFaint)};
  background: rgba(255, 255, 255, 0.05);
  transition: all ${({ theme }) => theme.transition.base};
  transform: rotate(${({ $open }) => ($open ? '135deg' : '0deg')});
`

export const Panel = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? '1fr' : '0fr')};
  transition: grid-template-rows 420ms cubic-bezier(0.22, 0.61, 0.36, 1);
`

export const PanelInner = styled.div`
  overflow: hidden;
`

export const TopicList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 2px 24px 24px 82px;

  ${media.sm`
    padding: 2px 16px 20px 16px;
  `}
`

export const TopicItem = styled.li`
  position: relative;
  padding-left: 18px;
  font-size: 14.5px;
  line-height: 1.55;
  color: ${({ theme }) => theme.color.textMuted};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 9px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.gradient.brand};
  }
`
