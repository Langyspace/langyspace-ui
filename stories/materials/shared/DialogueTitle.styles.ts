import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'

export const Title = styled.span`
  white-space: normal;
`
export const Tail = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  vertical-align: middle;
  max-width: 100%;
  white-space: nowrap;
`
export const Action = styled.span`
  display: inline-flex;
  flex: 0 0 auto;
`
