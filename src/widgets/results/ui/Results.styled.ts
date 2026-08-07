import styled from 'styled-components'
import { media } from '@/app/styles/mixins'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  ${media.md`
    grid-template-columns: minmax(0, 1fr);
  `}
`

export const Disclaimer = styled.p`
  margin-top: 24px;
  padding: 15px 20px;
  border-left: 2px solid rgba(255, 61, 190, 0.5);
  border-radius: 0 ${({ theme }) => theme.radius.sm}
    ${({ theme }) => theme.radius.sm} 0;
  background: rgba(255, 255, 255, 0.025);
  font-size: 13px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.textFaint};
`
