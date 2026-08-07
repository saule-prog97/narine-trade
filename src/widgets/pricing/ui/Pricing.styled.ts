import styled from 'styled-components'
import { media } from '@/app/styles/mixins'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  align-items: stretch;

  ${media.lg`
    grid-template-columns: minmax(0, 1fr);
    gap: 26px;
  `}
`

export const Cell = styled.div`
  height: 100%;

  > div {
    height: 100%;
  }
`
