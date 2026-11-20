import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
`
