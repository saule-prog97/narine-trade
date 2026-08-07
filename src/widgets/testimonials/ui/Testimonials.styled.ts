import styled from 'styled-components'
import { media } from '@/app/styles/mixins'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  align-items: stretch;

  ${media.md`
    grid-template-columns: minmax(0, 1fr);
  `}
`

export const Cell = styled.div`
  height: 100%;

  > div {
    height: 100%;
  }
`
