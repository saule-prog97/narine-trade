import styled from 'styled-components'
import { gradientText, media } from '@/app/styles/mixins'
import { Container } from '@/shared/ui/container'

export const FooterRoot = styled.footer`
  position: relative;
  padding-block: 52px 40px;
  border-top: 1px solid ${({ theme }) => theme.color.border};
  background: rgba(2, 1, 6, 0.5);
`

export const Inner = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) auto;
  gap: 34px;
  align-items: start;

  ${media.md`
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
  `}
`

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const BrandName = styled.p`
  font-family: ${({ theme }) => theme.font.display};
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0.14em;
  ${gradientText()}
`

export const BrandText = styled.p`
  max-width: 42ch;
  font-size: 13.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.textFaint};
`

export const Column = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ColumnTitle = styled.p`
  margin-bottom: 4px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 10.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.textFaint};
`

export const Link = styled.a`
  width: fit-content;
  font-size: 14px;
  color: ${({ theme }) => theme.color.textMuted};
  transition: color ${({ theme }) => theme.transition.base};

  &:hover {
    color: ${({ theme }) => theme.color.text};
  }
`

export const Social = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.color.borderStrong};
  background: rgba(255, 255, 255, 0.04);
  font-size: 14px;
  font-weight: 500;
  transition: all ${({ theme }) => theme.transition.base};

  &:hover {
    border-color: rgba(34, 211, 238, 0.5);
    background: rgba(34, 211, 238, 0.1);
    transform: translateY(-2px);
  }
`

export const Bottom = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 38px;
  padding-top: 22px;
  border-top: 1px solid ${({ theme }) => theme.color.border};
`

export const Small = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.textFaint};
`

export const Risk = styled.p`
  max-width: 72ch;
  font-size: 11.5px;
  line-height: 1.6;
  color: rgba(111, 104, 144, 0.85);
`
