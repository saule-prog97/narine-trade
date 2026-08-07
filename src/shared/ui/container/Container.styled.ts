import styled from 'styled-components'
import { media } from '@/app/styles/mixins'

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.layout.gutter};

  ${media.sm`
    padding-inline: 18px;
  `}
`
