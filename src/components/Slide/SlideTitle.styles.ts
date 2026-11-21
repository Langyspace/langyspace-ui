import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Title = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  vertical-align: baseline;
  max-width: 100%;
  text-align: left;
`
export const Text = styled.span`
  min-width: 0;
  white-space: normal;
  overflow-wrap: normal;
  text-wrap: pretty;
`
export const Action = styled.span`
  display: inline-flex;
  flex: 0 0 auto;
`
