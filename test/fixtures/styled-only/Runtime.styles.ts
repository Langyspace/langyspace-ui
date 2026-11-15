import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'

export const Page = styled.main`
  display: grid;
  align-content: start;
  gap: ${theme.spacing[4]};
  min-height: 150vh;
  padding: ${theme.spacing[5]};
`
export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing[3]};
`
export const Content = styled.div`
  display: grid;
  gap: ${theme.spacing[3]};
`
export const LongContent = styled.p`
  min-height: 30rem;
`
